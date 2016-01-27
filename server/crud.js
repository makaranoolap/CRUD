Meteor.methods({
	insertCrud:function(obj){
		crud.insert(obj);
	},
	update:function(id,obj){
		crud.update({_id:id},{$set:obj});
	}
})