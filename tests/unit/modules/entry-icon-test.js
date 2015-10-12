import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent("entry-icon");

test("empty type returns empty url", function(assert) {
  let component = this.subject();
  component.set("type", "");
  assert.equal(component.get("iconUrl"), "");
});

test("set type returns a url for an icon asset", function(assert) {
  let component = this.subject();
  let type = "someType";
  component.set("type", type);
  assert.equal(component.get("iconUrl"), component.get("assetsPrefix")+type+".png");
});
