function read(file, callback){
	var reader = new FileReader();
	reader.onload = function(e){
		content = reader.result;
		callback(content);
	}
	reader.readAsText(file);
}
fileReader = {};
fileReader.read = read;