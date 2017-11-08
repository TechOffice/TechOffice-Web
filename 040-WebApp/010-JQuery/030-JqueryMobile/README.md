# jQuery Mobile

Important! HTML5 Required.

## Prerequisite

* jQuery JS
* jQuery Mobile JS
* jQuery Mobile CSS

CDN:
```
<link rel="stylesheet" href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
<script src="http://code.jquery.com/jquery-3.1.1.slim.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
```

HTML5 introduced viewport in meta tag give browser an instructions on how to control dimensions and scaling of a web page.
width=device-with	:	The width of a web page follow the screen width of the device.
initial-scale=1.0	:	The initial zoon level.

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Introduction
jQuery Mobile provide UI widges and an navigation system for mobile application.

* <div data-role="page">					: a wrapper to start a page
* <div data-role="header">				: a header bar
* <div role="main" class="ui-content">	: a content region
* <div data-role="footer">				: a footer bar

List View
```
<ul data-role="listview" data-inset="true" data-filter="true">
	<li>a</li>
	<li>b</li>
	<li>c</li>
	<li>d</li>
	<li>e</li>
</ul>
```

Slider (Number Input)
```
<form>
	<label for="slider-0">Input Slider: </label>
	<input type="range" name="slider" id="slider-0" value="25" min="0" max="100/>
</form>
```


Button 
```
<a href="#" data-role="button">Button</a>
```
jQuery Mobile provides a number of icons. For detail, refer to http://api.jquerymobile.com/icons/ .


## Reminder
jQuery 1.4.5 or below does not support jQuery 3.x. jQuery 2.x should be used instead.






