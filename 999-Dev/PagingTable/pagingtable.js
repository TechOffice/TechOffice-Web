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
	
	// Rows
	if(me.find("tbody").length > 0 ){
		var rows = me.find("tbody>tr");
		me.rows= rows;
		me.originalRows = me.rows.slice(0);
	}
	
	// Headers
	if(me.find("thead").length > 0 ){
		var thead = me.find("thead");
		me.headers = thead.find("th");
	}
	
	me.enableHeadersSorting = function(){
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
	}
	
	// page bar
	me.enablePageBar = function(){
		var pageBar = $("<div></div>");
		for (var i=0; i<me.pageNum; i++){
			var pageNumSpan = $("<span>" + (i+1) + "</span>");
			pageNumSpan.click(function(){
				var pageNum = parseInt($(this).html());
				if (pageNum){
					var rows = me.pagingRows[pageNum - 1];
					var tbody = me.find("tbody");
					tbody.html(rows);
				}
			});
			pageBar.append(pageNumSpan);
			pageBar.append($("<span>&nbsp;</span>"))
		}
		me.pageBar = pageBar;
		pageBar.insertAfter(me);
	}
	
	// search header
	me.enableSearchHeader = function(){
		var searchHeader = $("<div></div>");
		for (var i=0; i< me.headers.length; i++){
			var header = me.headers[i];
			var searhField = $("<span><b>" + $(header).html() + ": </b></span>" + "<input/>");
			me.searchFields.push(searhField);
			searchHeader.append(searhField);
			searchHeader.append($("<span>&nbsp;&nbsp;&nbsp;</span>"))
		}
		searchHeader.append($("<br/>"));
		var searchButton = $("<input type='button' value='search'/>");
		searchButton.click($.proxy(function(){
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
					if (value == "" || colValue.includes(value)){
						filteredRows.push(rows[i]);
					}
				}
				me.rows = filteredRows;
			}, me);
			me.paging();
		}, me));
		searchHeader.append(searchButton);
		searchHeader.append($("<br/>"));
		searchHeader.append($("<br/>"));
		me.searchHeader = searchHeader;
		me.searchHeader.insertBefore(me);
	}
	
	me.paging();
	me.enablePageBar();
	me.enableHeadersSorting();
	me.enableSearchHeader();
	
	return {
		table: me,
		getRows: function(){
			return me.rows;
		},
		getPagingRows: function(){
			return me.pagingRows;
		}
	};
};
