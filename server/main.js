import { Mongo } from 'meteor/mongo'
var fs = require('fs');

Meteor.startup(function() {
    
    Papers.remove({})
    if (Papers.find().count() === 0) {

        var papers = JSON.parse(Assets.getText("papers.json"));

        for (var ind in papers) {
            Papers.insert(papers[ind]);
        }
    }
    
    Projects.remove({})
    if (Projects.find().count() === 0) {

        var projects = JSON.parse(Assets.getText("projects.json"));

        for (var proj in projects) {
            Projects.insert(projects[proj]);
        }
    }


    console.log("Papers has " + Papers.find().count() + " documents.");
    console.log("Projects has " + Projects.find().count() + " documents."); 



});
