function simpleViewDiffArrConvertor(diff){
	var diffArr = [];
	for (var i=3; i<diff.length; i++){
		var line = diff[i];
		if (line.startsWith(" ")){
			var lineContent = line.substring(1);
			diffArr.push(lineContent);
		}
		if (line.startsWith("-")){
			var lineContent = line.substring(1);
			var map;
			if (diffArr[diffArr.length - 1] instanceof Map){
				map = diffArr[diffArr.length - 1];
			}else{
				map = new Map();
				diffArr.push(map);
			}
			var leftArr = map.get("left");
			if (!leftArr){
				leftArr = [];
				map.set("left", leftArr);
			}
			leftArr.push(lineContent);
		}
		if (line.startsWith("+")){
			var lineContent = line.substring(1);
			var map;
			if (diffArr[diffArr.length - 1] instanceof Map){
				map = diffArr[diffArr.length - 1];
			}else{
				map = new Map();
				diffArr.push(map);
			}
			var rightArr = map.get("right");
			if (!rightArr){
				rightArr = [];
				map.set("right", rightArr);
			}
			rightArr.push(lineContent);
		}
	}
	return diffArr;
}

console.log("============================================");
console.log("Simple View Diff Arr Convertor Test");
console.log("============================================");
var fs = require("fs");
var file1Content = fs.readFileSync("./resources/file1.txt", "utf-8");
var file2Content = fs.readFileSync("./resources/file2.txt", "utf-8");
var file1ContentArr = file1Content.split("\r\n");
var file2ContentArr = file2Content.split("\r\n");
var diffConfig = { 
	fromfile: 'Original',
	tofile: 'Current',
	lineterm: ''
};
var difflib = require("difflib");
var diff = difflib.unifiedDiff(file1ContentArr, file2ContentArr, diffConfig);

var diffArr = simpleViewDiffArrConvertor(diff);


console.log(diffArr);