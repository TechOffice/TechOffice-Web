$.fn.pagingTable = function(config){
	var me = this;
	var config = config ? config: {};
	me.pageLimit = config.pageLimit ? config.pageLimit : 20
	me.index = me.parent().children().index(me);
	me.headers = [];
	me.originalRows = [];
	me.rows = [];
	me.pagingRows = [];
	me.pageNum = 0;
	me.pageBar = null;
	me.searchFields = [];
	me.searchHeader = null;
	
	$(me).addClass("table");
	
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
	}
	
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
	
	// paging function
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
	
	// page bar
	me.enablePageBar = function(){
		var pageBar = $("<nav aria-label='Page navigation'></nav>");
		var pageList = $("<ul class='pagination'></ul>");
		pageBar.append(pageList);
		for (var i=0; i<me.pageNum; i++){
			var pageItem = $("<li></li>");
			var pageNumSpan = $("<span>" + (i+1) + "</span>");
			pageNumSpan.click(function(){
				var pageNum = parseInt($(this).html());
				if (pageNum){
					var rows = me.pagingRows[pageNum - 1];
					var tbody = me.find("tbody");
					tbody.html(rows);
				}
			});
			pageItem.append(pageNumSpan);
			pageList.append(pageItem);
			pageList.append($("<span>&nbsp;</span>"))
		}
		me.pageBar = pageBar;
		pageBar.insertAfter(me);
	}
	
	me.enableCountBar = function() {
		var countBar = $("<div></div>");
		var countValue = $("<span></span>");
		countValue.html(me.rows.length);
		countBar.append("<span><b>Totol: </b></span>")
		countBar.append(countValue);
		countBar.insertAfter(me);
	};
	
	// search header
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
					var col = $(cols[index]);
					var colValue = col.html();
					if (value == "" || colValue.toUpperCase().includes(value.toUpperCase())){
						filteredRows.push(rows[i]);
					}
				}
				me.rows = filteredRows;
			}, me);
			me.paging();
		}, me);
		var searchHeader = $("<div></div>");
		for (var i=0; i< me.headers.length; i++){
			var header = me.headers[i];
			var searhField = $("<span><b>" + $(header).html() + ": </b></span>" );
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
			searchHeader.append(searhField);
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
	
	me.paging();
	me.enablePageBar();
	me.enableHeadersSorting();
	if (config.enableSearchHeader){
		me.enableSearchHeader();
	}
	me.enableCountBar();
	
	return {
		table: me,
		getRows: function(){
			return me.rows;
		},
		getPagingRows: function(){
			return me.pagingRows;
		},
		getConfig: function(){
			return config;
		},
		enableSearchHeader: me.enableSearchHeader
	};
};
