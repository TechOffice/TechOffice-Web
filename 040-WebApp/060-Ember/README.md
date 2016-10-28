
# EmberJs Installation

Install Ember
```
npm install -g ember-cli@2.8
```

Create a New Application
```
ember new  <Application Name>
```

start a local server for test
```
cd <Application Name>
ember server
``
Visit http://localhost:4200


## Template

EmberJs Template is a layout which would be loaded in application 

Using Ember Cli to create a template
```
ember generate tempalte <Template Name>
```

## Route 
EmberJs define a model and a template for the application.

```
ember generate route <Route Name>
```

app/routes/<Route Name>.js
```
import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
});
```

app/tempalte/<Roulte Name>.hbs
```
<h2>List of Scientists</h2>
<ul>
    {{#each model as |scientist| }}
        <li>{{scientist}}</li>
    {{each}
</ul>
``

## UI Component
```
ember generate componet <Component Name>
```

app/template/components/<Componennt Name>.hbs
```
<h2>{{title}}</h2>
<ul>
  {{#each people as |person|}}
    <li>{{person}}</li>
  {{/each}}
</ul>
```

After defining this component, this component can be reused in other template
```
{{<Component Name> title="<Title>" people=model}}
```


## Build for production
```
ember build --env production 
```