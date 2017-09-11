/**
 * It use platformBrowserDynamic().bootstrapModule to call moudle specified in app.module.js
 * to bootstrap the applcation 
 */
(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));
