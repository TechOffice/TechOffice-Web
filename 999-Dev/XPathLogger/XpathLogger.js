/**
* Xpath Logger
* 
* Print the xpath of clicked item in the console.
*/
var xpathLogger = (function(){
	
	var enabled = false;
	
	var convertNodeListToArr = function(nodeList, nodeName){
		var arr = [];
		for (var i=0; i<nodeList.length; i++){
			var node = nodeList[i];
			if (node.nodeName == nodeName){
				arr.push(node);	
			}
		}
		return arr;
	};
	
	var getXpath = function(node){
		if (node.parentNode && node.parentNode.nodeName != "#document" ){
			var nodeListArr = convertNodeListToArr(node.parentNode.children, node.nodeName);
			if (nodeListArr.length > 1){
				var seq = nodeListArr.indexOf(node);
				seq = seq + 1;
				return getXpath(node.parentNode) + "/" + node.tagName.toLowerCase() + "[" + seq + "]"; 
			}
			return getXpath(node.parentNode) + "/" + node.tagName.toLowerCase();
		}
		return node.nodeName.toLowerCase();
	};

	var xPathEventListener = function(event){		
		var xpath = getXpath(event.target);
		console.log(xpath);
	};
	
	var enableLogger = function(){
		enabled = true;
		document.addEventListener("click", xPathEventListener);
	};
	
	var disableLogger = function(){
		enabled = false;
		if (enabled){
			document.removeEventListener("click", xPathEventListener);
		}
	};
	
	return {
		enable: enableLogger, 
		diable: disableLogger,
		isEnabled: function(){
			return enabled;
		}
	};
})();;

xpathLogger.enable();