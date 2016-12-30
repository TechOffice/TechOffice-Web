#EmberJs Hello World Example

## Steps of Creating a new Ember Application

Step 1: Create a new Project
```
ember new HelloWorldExample
```

Step 2: Load Server for  Hellow World Example
```
ember server
```

Step 3: Create a route
```
ember generate route about
``

Step 4: Edit templates/about.hbs
```
<h1>{{model.title}}</h1>
```

Step 5: Edit routes/about.js
```
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      title: "Ember Hello World Example"
    });
  }
});

```

Step 6: Run Ember Server
```
ember server
``` 

Step 7: Visit http://localhost:4200/about

## Core Component

###Route
A Route is a mapper that maps URL to handler and then the handler would render a template and load model to the template.

###Template
It is the way for organizing Html in Ember Applicaiton

###Model
It is the presistent state of Data.

###Components
It is the reusable component including layout and behavior for Ember Application.


