/**
* Paging Table jQuery Plugin 
* 
* It convert jQuery Table Object into a Paging Table which includes the following features.
* 
* - Paging Table
* - Sorting 
* - Search
* - Mutiple Select 
* 
* @author Ben
* @param config Configuration of Paging Table. 
* @returns JSON object of Paiging Table.
*/
$.fn.pagingTable = function(config){
	var me = this;
	var config = config ? config: {};
	
	/**
	* The Limit of rows per page
	*/
	me.pageLimit = config.pageLimit ? config.pageLimit : 20
	
	/**
	* The Index Sequence of Paging in its container
	*/ 
	me.index = me.parent().children().index(me);
	
	/**
	* List of Headers 
	*/
	me.headers = [];
	
	/**
	* Original Row List
	*/
	me.originalRows = [];
	
	/**
	* Ordered and Filtered Row List
	*/
	me.rows = [];
	
	/**
	* Paging Rows 
	*/
	me.pagingRows = [];
	
	/**
	* Number of Page
	*/
	me.pageNum = 0;
	
	/**
	* Current Page Numer
	*/
	me.currentPageNum = 0;
	
	/**
	* Page Bar Control of Paging Table
	*/ 
	me.pageBar = null;
	
	/**
	* Search Header Control of Paging Table
	*/ 
	me.searchHeader = null;
	
	/**
	* List of Search Fields Controls in Search Header
	*/ 
	me.searchFields = [];
	
	$(me).addClass("table");
	
	if (config.checkboxSelection){
		me.find("tr td:first-child").before("<td><div><input type='checkbox'></div></td>");
	}
	
	// Rows
	if(me.find("tbody").length > 0 ){
		var rows = null;
		if (config.firstRowHeader){
			var thead = me.find("tbody>tr:eq(0)");
			me.headers = thead.find("th");
			rows = me.find("tbody>tr:not(:eq(0))");
		}else{
			rows = me.find("tbody>tr");
		}
		me.rows= rows;
		me.originalRows = me.rows.slice(0);
	}
	
	// Headers
	if(me.find("thead").length > 0 ){
		var thead = me.find("thead");
		me.headers = thead.find("th");
		if (config.checkboxSelection){
			me.find("thead th:first").before("<th>&nbsp;</th>");
		}
	}
	
	/**
	* Enable Headers Sorting 
	*/ 
	me.enableHeadersSorting = function(){
		if (me.headers.length > 0){
			me.headers.click($.proxy(function(event){
				var me = this;
				var target = $(event.target);
				var index = me.headers.index(target);
				var rows = me.rows;
				rows.sort($.proxy(function(a,b){
					var index = this.index;
					var jA = $(a).find("td")[index];
					var jB = $(b).find("td")[index];
					var aValue = $(jA).html();
					var bValue = $(jB).html();
					return aValue.localeCompare(bValue);
				}, {index: index}));
				me.paging();
			}, me));
		}
	};
	
	/** 
	* Paging function to separated the rows of table into pages of row.
	*/
	me.paging = function(){
		var rows = me.rows.slice(0);
		var pageNum = Math.ceil(rows.length / me.pageLimit);
		me.pageNum = pageNum;
		me.pagingRows = [];
		var remainders = rows.splice(me.pageLimit);
		if (rows.toArray){
			me.pagingRows.push(rows.toArray());
		}else{
			if(Array.isArray(rows)){
				me.pagingRows.push(rows);
			}
		}
		rows = remainders;
		if (pageNum > 1 ){
			for (var i=0; i<pageNum-1; i++){
				remainders = rows.splice(me.pageLimit)
				me.pagingRows.push(rows);
				rows = remainders;
			}						
		}
		
		// show the first page
		var tbody = me.find("tbody");
		tbody.html(me.pagingRows[0]);
		
		// show thead if not exisit
		if (me.find("thead").length == 0){
			var thead = $("<thead></thead>");
			thead.append(me.headers);
			thead.insertBefore(tbody);
		}
	}
	
	/**
	* Enable PageBar
	*/
	me.enablePageBar = function(){
		
		// Initialize Page Bar
		var pageBar = $("<nav aria-label='Page navigation'></nav>");
		var pageList = $("<ul class='pagination'></ul>");
		pageBar.append(pageList);
		me.pageBar = pageBar;
		pageBar.insertAfter(me);
		
		// Initialize current Page Num
		if (me.pageNum > 0 ){
			if (me.currentPageNum == 0 ){
				me.currentPageNum = 1;
			}
		}
		
		// Previous Item Span
		var previousPageItem = $("<li></li>");
		var previousPageSpan = $("<span>&laquo;</span>");
		previousPageSpan.click(function(){
			var previousPageNum = me.currentPageNum - 1;
			if (previousPageNum > 0 ){
				me.switchPage(previousPageNum);
			}
		});
		previousPageItem.append(previousPageSpan);
		pageList.append(previousPageItem);
		
		// Num Items Span
		for (var i=0; i<me.pageNum; i++){
			var pageItem = $("<li></li>");
			var pageNumSpan = $("<span>" + (i+1) + "</span>");	
			if ( (i+1) == me.currentPageNum){
				pageNumSpan.css("font-weight", "bold");
			}
			pageNumSpan.click(function(){
				var pageNum = parseInt($(this).html());
				if (pageNum){
					me.switchPage(pageNum);
				}									
					  
	 
			});
			pageItem.append(pageNumSpan);
			pageList.append(pageItem);
		}
		
		// Next Item Span
		var nextPageItem = $("<li></li>");
		var nextPageSpan = $("<span>&raquo;</span>");
		nextPageSpan.click(function(){
			var nextPageNum = me.currentPageNum + 1;
			if (nextPageNum <= me.pageNum ){
				me.switchPage(nextPageNum);
			}
		});
		nextPageItem.append(nextPageSpan);
		pageList.append(nextPageItem);
	}
	
	/**
	* Switch Page
	* 
	* @param Page Num
	*/
	me.switchPage = function(pageNum){
		if (pageNum != me.currentPageNum){
			me.currentPageNum = pageNum;
			var rows = me.pagingRows[pageNum - 1];
			var tbody = me.find("tbody");
			tbody.html(rows);
			me.pageBar.find("ul>li>span").each(function(index, value){
				if (pageNum == parseInt($(value).html())){
					$(value).css("font-weight", "bold");
				}else{
					$(value).css("font-weight", "normal");
				}
			});
		}
	}
	
	/**
	* Enable CountBar. 
	* Count Bar count the number of filtered rows.
	*/ 
	me.enableCountBar = function() {
		var countBar = $("<div></div>");
		var countValue = $("<span></span>");
		countValue.html(me.rows.length);
		countBar.append("<span><b>Totol: </b></span>")
		countBar.append(countValue);
		countBar.insertAfter(me);
	};
	
	/**
	* Enable Searh Header
	*/
	me.enableSearchHeader = function(){
		me.search = $.proxy(function(){
			var me = this;
			me.rows = me.originalRows;
			var searchFields = me.searchFields;
			searchFields.forEach(function(item, index, arr){
				var me = this;
				var input = $(item[1]);
				var value = input.val();
				var rows = me.rows;
				var filteredRows = [];
				for (var i=0; i<rows.length; i++){
					var row = $(rows[i]);
					var cols = row.find("td");
					var col;
					if (config.checkboxSelection){
						col = $(cols[index + 1]);
					}else{
						col = $(cols[index]);
					}
					var colValue = col.html();
					if (value == "" || colValue.toUpperCase().includes(value.toUpperCase())){
						filteredRows.push(rows[i]);
					}
				}
				me.rows = filteredRows;
			}, me);
			me.paging();
		}, me);
		var searchHeader = $("<div class='form-inline'></div>");
		for (var i=0; i< me.headers.length; i++){
			var header = me.headers[i];
			var fromGroup = $("<div class='form-group'></div>");
			var searhField = $("<label><b>" + $(header).html() + ": </b></label>" );
			var searchInput = $("<input/>");
			searchInput.keypress(function(e){
				var keycode = (e.keyCode ? e.keyCode : e.which);
				if (keycode == '13') {
					me.search();
				}
			});
			searchInput.on('input', function(e){
				me.search();
			});
			searhField = searhField.add(searchInput);
			me.searchFields.push(searhField);
			fromGroup.append(searhField)
			searchHeader.append(fromGroup);
			searchHeader.append($("<span>&nbsp;&nbsp;&nbsp;</span>"))
		}
		searchHeader.append($("<br/>"));
		var searchButton = $("<input type='button' value='Search'/>");
		searchButton.click(me.search);
		var clearButton = $("<input type='button' value='Reset'/>")
		clearButton.click($.proxy(function(){
			var me = this;
			me.rows = me.originalRows;
			var searchFields = me.searchFields;
			searchFields.forEach(function(item, index, arr){
				var me = this;
				var input = $(item[1]).val("");
			}, me);
			me.paging();
		}, me));
		searchHeader.append(clearButton);
		searchHeader.append($("<span>&nbsp;</span>"));
		searchHeader.append(searchButton);
		searchHeader.append($("<br/>"));
		searchHeader.append($("<br/>"));
		me.searchHeader = searchHeader;
		me.searchHeader.insertBefore(me);
	}
	
	// Init Paging Table
	me.paging();
	me.enablePageBar();
	me.enableHeadersSorting();
	if (config.enableSearchHeader){
		me.enableSearchHeader();
	}
	me.enableCountBar();
	
	// return JSON Object of Paging Table.
	return {
		table: me,
		config: config,
		getRows: function(){
			return me.rows;
		},
		getPagingRows: function(){
			return me.pagingRows;
		},
		getConfig: function(){
			return config;
		},
		enableSearchHeader: me.enableSearchHeader,
		getSelected: function(){
			var rows = $(this.getRows());
			var selectedInputs = rows.find("input:checked");
			var selectedRows;
			if (selectedInputs.length > 0){
				selectedRows =  selectedInputs.parent().parent();
			}
			return selectedRows;
		}
	};
};
