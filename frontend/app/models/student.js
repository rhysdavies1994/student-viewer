import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  birthDate: DS.attr(),
  address: DS.attr('string'),
  suburb: DS.attr('string'),
  state: DS.attr('string'),
  postcode: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  updatedAt: DS.attr(),
  createdAt: DS.attr()
});
