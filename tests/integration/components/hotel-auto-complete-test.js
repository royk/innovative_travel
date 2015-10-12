import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hotel-auto-complete', 'Integration | Component | hotel auto complete', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hotel-auto-complete}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hotel-auto-complete}}
      template block text
    {{/hotel-auto-complete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
