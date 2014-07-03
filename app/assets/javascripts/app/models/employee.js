App.Employee = Ember.Resource.extend({
  resourceUrl:        '/employees',
  resourceName:       'employee',
  resourceProperties: ['first_name', 'last_name','city','experience','skills'],

  validate: function() {
    if (this.get('first_name') === undefined || this.get('first_name') === '' ||
        this.get('last_name') === undefined  || this.get('last_name') === '') {
      return 'Employee require a first and a last name.';
    }
  },

  fullName: Ember.computed(function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  }).property('first_name', 'last_name')
});
