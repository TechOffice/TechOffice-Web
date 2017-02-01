/**
 * csvConvertor object
 * (Javascript Module Pattern)
 */
csvConvertor = (function () {
  return {

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
      tableContent = tableContent + "<table>";
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
    }
  };
})();