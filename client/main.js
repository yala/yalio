import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout.tpl.jade';

Template.publications.helpers({
	'papers' : function(){		
		return Papers.find({})

	}
})

Template.paperCard.helpers({
	'has_code' : function(){		
		return this.code != nil
	}
})



