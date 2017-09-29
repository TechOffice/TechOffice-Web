# SystemJs

## JSPM as Package Manager
Install JSPM 
```
npm install jspm -g
```

Initialize jspm project
```
jspm init -p
```

Install React
```
jspm install npm:react --save
```

## Example

index.html

```
<html>
	<head>
		<script src="jspm_packages/system.js"></script>
		<script src="config.js"></script>
		<script>
			System.import('app/main.js')
		</script>
	</head>
	
	<body>
		<div id="main"></div>
	</body>
</html>
```

app/main.js
```
import React from 'react';
import ReactDom from 'react-dom';

class Main extends React.Component{
	render(){
		return <h1>Hello World</h1>;
	}
}

ReactDom.render(
  <Main/>, document.getElementById('main')
);

```

## Start Server

## serve (Node)
```
serve
```