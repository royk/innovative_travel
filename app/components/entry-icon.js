import Ember from 'ember';

export default Ember.Component.extend({
  assetsPrefix: "assets/icon-",
  iconUrl: function() {
    if (!this.get("type")) {
      return "";
    }
    return this.get("assetsPrefix")+this.get("type")+".png";
  }.property("type")
});
