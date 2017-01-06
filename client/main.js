import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { jquery } from 'meteor/jquery';
import './main.html';
import './main.css';



Template.info.events({
    'click #add_eleve': function (event, template)
    {
        var new_eleve = template.find("#nom_eleve").value;
        eleves.insert({ name : new_eleve});
        template.find("#nom_eleve").value = "";
    },
    'click .delete_eleve': function (event, template)
    {
         eleves.remove({_id: this._id})
    },
    'click .eleve_li': function (event, template)
    {
        console.log(this);
        template.find(".eleve_li-"+this._id).style.display = 'none';
        template.find(".delete_eleve-"+this._id).style.display = 'none';
        template.find(".input_update-"+this._id).style.display = 'block';
        template.find(".input_update_accept-"+this._id).style.display = 'block';

    },
    'click .input_update_accept': function (event, template)
    {
        var update_eleve = template.find(".input_update-"+this._id).value;
        eleves.update( { _id : this._id }
            ,{
                name : update_eleve
            });
        template.find(".input_update-"+this._id).style.display = 'none';
        template.find(".input_update_accept-"+this._id).style.display = 'none';
        template.find(".eleve_li-"+this._id).style.display = 'block';
        template.find(".delete_eleve-"+this._id).style.display = 'block';
    }


});


Template.info.helpers({
    toutlemonde: function () 
    {
        return eleves.find();
    }
});


