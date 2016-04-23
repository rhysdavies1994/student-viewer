import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      students: this.store.findAll('student'),
    });
  }
});
