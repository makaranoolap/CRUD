Template.home.events({
	'submit form':function(e){
		e.preventDefault();
		var title=e.target.title.value;//get value from field title
		var description=e.target.description.value;//get value from field description
		var obj={
			title:title,
			description:description
		}
		if(this._id){
			
			Meteor.call('update',this._id,obj);
		}else{
			Meteor.call('insertCrud',obj);
		}
		e.target.title.value="";//clear form
		e.target.description.value="";//clear form
	},
	'click #remove':function(e){
		alert();
		e.preventDefault();
		crud.remove(this._id);
	}
})
Template.home.helpers({
	getData:function(){
		return crud.find();
	}
})