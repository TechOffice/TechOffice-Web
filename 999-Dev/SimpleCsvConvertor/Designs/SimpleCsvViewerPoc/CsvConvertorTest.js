function getTableMeta(csv){
	var meta = {};
	meta.maxColNum = 0;
	meta.maxRowNum = csv.length;
	
	for (var i=0; i<csv.length; i++){
		var col = csv[i];
		var colNum = col.length;
		if (colNum > meta.maxColNum){
			meta.maxColNum = colNum;
		}
	}
	return meta;
}

function convertCsvToTable(csv){
	var meta = getTableMeta(csv);
	var tableContent = "";
	tableContent = tableContent + "<table>";
	for (var i=0; i<csv.length; i++){
		tableContent = tableContent + "<tr>";
		var cols = csv[i];
		var colNum = cols.length;
		for (var j=0; j<colNum; j++){
			var col = cols[j];
			if (col == ""){
				col = "&nbsp;";
			}
			tableContent = tableContent + "<td>";
			tableContent = tableContent + col;
			tableContent = tableContent + "</td>";
		}
		while (colNum < meta.maxColNum){
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


var fs = require("fs");
var csvContent = fs.readFileSync("./resources/sample.csv", "utf-8");

var babyparse = require("babyparse");
var parsedCsv = babyparse.parse(csvContent);
var tableContent = convertCsvToTable(parsedCsv.data);
var beautify = require('js-beautify');
var beautifiedTableContent = beautify.html(tableContent);
console.log(beautifiedTableContent);
