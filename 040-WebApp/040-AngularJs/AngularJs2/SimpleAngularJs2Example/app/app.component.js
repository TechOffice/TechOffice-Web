/**
 * It chains Component and Class
 *  selector: It specifies a simple selector for the HTML Element (Tag name) 
 *  template: The template for the Selector 
 *  
 */
(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
