/**
* This function covert output of diff lib into DiffView Object
*/
function convertDiffLib(diff){
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

viewerConvertor = {};
viewerConvertor.convert = convertDiffLib;