# Diff Lib Test

## Unified Format
```
--- {file 1 name}
+++ {file 2 name}
@@ -{start line number of file 1}, {number of line of file 1} + {start line number of file 2}, {number of line of file 2} @@
{
  Content
  - line content of file 1
  + line content of file 2
}
```

## Example List
* DiffLibTest.js
	* Test for DiffLib.js
* SimpleViewDiffArrConvertorTest.js
	* Test for converting unified format output of DiffLibTest into SimpleDiffViewObject

## SimpleDiffViewObject
It is an array of String and Map
e.g.
```
""
""
Map
""
""
```

The map contain two key. One is "left" and another is "right". The value is a array of String. SimpleViewViewer would read it for visualization.
