Meteor.publish('crud', function (){ 
  return crud.find({});
});