import Ember from 'ember';

export default Ember.Controller.extend({
  searchFilter: null,
  filteredStudents: Ember.computed('searchFilter', function () {
    let students = this.get('model.students');
    let searchFilter = this.get('searchFilter');
    let filteredStudents = students.filter(function (student) {
      if (searchFilter == null || searchFilter.length === 0) {
        return true;
      }

      searchFilter = searchFilter.toLowerCase();
      let firstName = student.get('firstName').toLowerCase();
      let lastName = student.get('lastName').toLowerCase();
      let email = student.get('email').toLowerCase();
      if (firstName.indexOf(searchFilter) >= 0 ||
        lastName.indexOf(searchFilter) >= 0 ||
        email.indexOf(searchFilter) >= 0) {
        return true;
      }
      else {
        return false;
      }
    });
    return filteredStudents;
  })
});
