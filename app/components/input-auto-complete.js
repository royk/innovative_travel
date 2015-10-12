import Ember from 'ember';
import AutoComplete from "ember-cli-auto-complete/components/auto-complete";

export default AutoComplete.extend({
  suggestions: function() {
    let options = this.get("options");
    let input = this.get("inputVal") || "";
    let list = options.filter((item)=> {
      return item.get(this.get("nameProperty")).toLowerCase().indexOf(input.toLowerCase()) > -1;
    });
    return Ember.A(list);
  }.property("options.@each", "inputVal")
});
