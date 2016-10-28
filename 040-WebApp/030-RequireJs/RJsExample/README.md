# r.js Example

## r.js
It is a optimization tool for NodeJs and Nashorn (Javascript runtime) for building and packaging.

### Install r.js in NodeJs
npm install -g requirejs


* main.js
* one.js
* two.js

one.js
```
define(function () {
    one = 1;
    return one;
});

```

two.js
```
define(function () {
    three = 2;
    return three;
});

```

main.js
```
require(["one", "two"], function (one, two) {
    console.log(one);
    console.log(two);
});

```

```
node r.js -o name=main out=main-built.js baseUrl=.
```

the main-built.js would be generated.