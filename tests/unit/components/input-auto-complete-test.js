import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent("input-auto-complete");

test("a search on an empty set returns an empty set", function(assert) {
  let options = [];
  let component = this.subject();
  component.set("inputVal", "");
  component.set("nameProperty", "prop");
  component.set("options", options);
  assert.equal(component.get("suggestions").length, 0);
});

test("returns a suggestion with mismatching case", function(assert) {
  let options = [
    Ember.Object.extend({name:"I am an ITEM"}).create(),
    Ember.Object.extend({name:"I am also an item"}).create(),
    Ember.Object.extend({name:"I am shouldn't be found"}).create()
  ];
  let component = this.subject();
  component.set("inputVal", "item");
  component.set("nameProperty", "name");
  component.set("options", options);
  assert.equal(component.get("suggestions").length, 2);
  assert.equal(component.get("suggestions")[0], options[0]);
  assert.equal(component.get("suggestions")[1], options[1]);
});

test("searching by specific property: searching the wrong property returns no matches", function(assert) {
  let options = [
    Ember.Object.extend({name:"I am an ITEM", type:"hotel"}).create(),
    Ember.Object.extend({name:"I am also an item", type:"city"}).create(),
    Ember.Object.extend({name:"I am shouldn't be found", type:"hotel"}).create()
  ];
  let component = this.subject();
  component.set("inputVal", "hotel");
  component.set("nameProperty", "name");
  component.set("options", options);
  assert.equal(component.get("suggestions").length, 0);
});
test("searching by specific property: searching the correct property returns matches", function(assert) {
  let options = [
    Ember.Object.extend({name:"I am an ITEM", type:"hotel"}).create(),
    Ember.Object.extend({name:"I am also an item", type:"city"}).create(),
    Ember.Object.extend({name:"I am shouldn't be found", type:"hotel"}).create()
  ];
  let component = this.subject();
  component.set("inputVal", "hotel");
  component.set("nameProperty", "type");
  component.set("options", options);
  assert.equal(component.get("suggestions").length, 2);
  assert.equal(component.get("suggestions")[0], options[0]);
  assert.equal(component.get("suggestions")[1], options[2]);
});

