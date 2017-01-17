# EmberJS Concept

## Class
```
Person = Ember.Object.extend({
	say(something) {
		alert(this);
	}
});
```
Create a Class, "Person" with "say()" method

### Create an instance
var person = Person.create();
person.say("Hello!");