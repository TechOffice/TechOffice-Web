SystemJs Babal Example

1. Install jspm (by npm)
```
npm install jspm -g
```

2. Initialize Project
```
jspm init -p
```

3. Create index.html
```
<html>
	<head>
		<script src="jspm_packages/system.js"></script>
		<script src="config.js"></script>
		<script>
			System.import('main.js')
		</script>
	</head>
	
	<body>
	
	</body>
</html>
```

4. Create main.js
```
import test from 'test'
```

5. Create test.js
```
Console.log("test");
```

6. Create Web Server by php
```
php -S localhost:10
```

7. Visit your web page