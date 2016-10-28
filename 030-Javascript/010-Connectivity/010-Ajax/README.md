# Ajax Example

Asynchronous Javascript and XML (Ajax) is a technique that client-side application retrieve information from a server aynchronously.

In Html, XMLHttpRequest is an object for this function. The below is a sample code.

```
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(this.responseText);
	}
};
xhttp.open("GET", "<URL>", true);
xhttp.send();
```

## Example List