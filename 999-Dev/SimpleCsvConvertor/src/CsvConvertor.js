/**
 * csvConvertor object
 * (Javascript Module Pattern)
 */
csvConvertor = (function () {
	
  var csvTableId = "csvTable";
  
  return {

	getCsvTableId: function(){
		return csvTableId;
	},
  
	/**
	* getTableMeta is to get table meta data 
	* such as the number of column and number of row
	*
	* @param csv 
	* @return meta Table Meta Information
	*/
    getTableMeta: function (csv) {
      var meta = {};
      meta.maxColNum = 0;
      meta.maxRowNum = csv.length;
      var csvLenght = csv.length
      for (var i = 0; i < csvLenght; i++) {
        var col = csv[i];
        var colNum = col.length;
        if (colNum > meta.maxColNum) {
          meta.maxColNum = colNum;
        }
      }
      return meta;
    },

	/**
	* convertCsvToTable is to convert csv object into html table format in String.
	* 
	* @param csv
	* @return tableHtml 
	*/
    convertCsvToTable: function (csv) {
      var meta = this.getTableMeta(csv);
      var tableContent = "";
      tableContent = tableContent + "<table id='"+ this.getCsvTableId() +"'>";
      for (var i = 0; i < csv.length; i++) {
        tableContent = tableContent + "<tr>";
        var cols = csv[i];
        var colNum = cols.length;
        for (var j = 0; j < colNum; j++) {
          var col = cols[j];
          if (col == "") {
            col = "&nbsp;";
          }
          tableContent = tableContent + "<td>";
          tableContent = tableContent + col;
          tableContent = tableContent + "</td>";
        }
        while (colNum < meta.maxColNum) {
          tableContent = tableContent + "<td>";
          tableContent = tableContent + "&nbsp;";
          tableContent = tableContent + "</td>";
          colNum = colNum + 1;
        }
        tableContent = tableContent + "</tr>";
      }
      tableContent = tableContent + "</table>";
      return tableContent;
    },
	
	/**
	* This method is get Json Data from the generated table 
	* (The generated table would be altered which make it differs from the orginally imported csv file.)
	*/
	getJsonFromTable: function(){
		var jsonValue = {};
		var colNum = 0;
		var rowNum = 0;
		var csvTable = document.getElementById(this.getCsvTableId());
		if (csvTable){
			var rows = csvTable.querySelectorAll("tr");
			rowNum = rows.length;
			var csvData = [];
			for (var i=0; i<rows.length; i++){
				var row = rows[i];
				var rowData = [];
				var cols = row.querySelectorAll("td");
				if (cols.length > colNum){
					colNum = cols.length ;
				}
				for (var j=0; j<cols.length; j++){
					var col = cols[j];
					var colHtml = col.innerHTML;
					while(colHtml.indexOf("&nbsp;") > -1 ){
						colHtml = colHtml.replace("&nbsp;", "");
					}
					rowData.push(colHtml);
				}
				csvData.push(rowData);
			}
			jsonValue.csv = csvData;
		}
		jsonValue.colNum = colNum;
		jsonValue.rowNum = rowNum;
		return jsonValue;
	},
	
	/**
	* Convert the csvTable to csv content
	*/
	covertTableToCsv: function(){
		var csvJson = this.getJsonFromTable();
		var rows = csvJson.csv;
		var csvStr = "";
		var tempRowArr = [];
		for (var i=0; i<rows.length; i++){
			var row = rows[i];
			var rowStr = row.join(',');
			tempRowArr.push(rowStr);
		}
		csvStr = tempRowArr.join('\r\n');
		return csvStr;
	}
  };
})();