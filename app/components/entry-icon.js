import Ember from 'ember';

export default Ember.Component.extend({
  iconUrl: function() {
    if (!this.get("type")) {
      return "";
    }
    return "assets/icon-"+this.get("type")+".png";
  }.property("type")
});
