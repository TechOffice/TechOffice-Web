function read(file, callback){
	var reader = new FileReader();
	reader.onload = function(e){
		content = reader.result;
		callback(content);
	}
	// file could be null when select file when file browser and then unselect the file.
	if (file){
		reader.readAsText(file);
	}
}
fileReader = {};
fileReader.read = read;