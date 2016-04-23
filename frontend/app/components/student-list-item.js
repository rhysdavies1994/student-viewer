import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  actions:{
    delete(){
      if(confirm("Are you sure?")){
        this.get('student').destroyRecord();
      }
    }
  }
});
