import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  hotelCount: DS.attr(),
  type: DS.attr(),
  subtype: DS.attr()
});
