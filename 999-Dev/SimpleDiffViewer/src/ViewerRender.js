function render(diffArr, leftDivId, rightDivId){
	for (var i=0; i<diffArr.length; i++){
		var item = diffArr[i];
		if (typeof item == "string"){
			var lineDiv = $("<div></div>");
			if (item == ""){
				item = "&nbsp;";
			}
			lineDiv.append(item);
			$("#"+leftDivId).append(lineDiv);
			$("#"+rightDivId).append(lineDiv.clone());
		}else{
			var map = item;
			var left = map.get("left");
			var right = map.get("right");
			var lineNum = 0;
			var leftLineNum = 0;
			var rightLineNum = 0;
			if (left){
				leftLineNum = left.length;
			}else{
				left = [];
			}
			if (right){
				rightLineNum = right.length;
			}else{
				right = [];
			}
			if (leftLineNum >= rightLineNum){
				lineNum = leftLineNum;
			}else{
				lineNum = rightLineNum;
			}
			var leftContainer = $("<div class='diff'></div>");
			var rightContainer = $("<div class='diff'></div>");
			
			for (var j=0; j< left.length; j++){
				var leftItem = left[j];
				var lineDiv = $("<div></div>");
				if (leftItem == ""){
					leftItem = "&nbsp;";
				}
				lineDiv.append(leftItem);
				leftContainer.append(lineDiv);
			}
			
			for (var j=0; j< right.length; j++){
				var rightItem = right[j];
				var lineDiv = $("<div></div>");
				if (rightItem == ""){
					rightItem = "&nbsp;";
				}
				lineDiv.append(rightItem);
				rightContainer.append(lineDiv);
			}
			
			
			while (leftLineNum < lineNum){
				var lineDiv = $("<div>&nbsp;</div>");
				leftContainer.append(lineDiv);
				leftLineNum = leftLineNum + 1;
			}
			
			if (rightLineNum < lineNum){
				var lineDiv = $("<div>&nbsp;</div>");
				rightContainer.append(lineDiv);
				rightLineNum = rightLineNum + 1;
			}
			
			$("#"+leftDivId).append(leftContainer);
			$("#"+rightDivId).append(rightContainer);
		}
	}
}
viewerRender = {};
viewerRender.render = render;