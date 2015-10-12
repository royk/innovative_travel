import Ember from 'ember';

  export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        model: Ember.Object.extend({name:""}).create(),
        hotels: this.store.find("hotel")
      });
    },
    setupController(controller, hash) {
      controller.set("model", hash.model);
      controller.set("hotels", hash.hotels);
    }
});
