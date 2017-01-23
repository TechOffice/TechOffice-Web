/*jshint esversion: 6 */

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      title: "Ember Hello World Example"
    });
  }
});
