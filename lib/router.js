Router.configure( {
	layoutTemplate: 'layout'
});

// Router.route('/', function () {
// 	this.render('projectCard', {
// 		data: function() {
// 			return Projects.findOne({"title":"Interpretablity"})
// 		}
// 	});
// });

Router.route('/', function () {
	this.render('projectCard', {
			data: function() {
				return Projects.findOne({"title":"Mammography"})
			}
		});
});

Router.route('/pathology', function () {
	this.render('projectCard', {
			data: function() {
				return Projects.findOne({"title":"Pathology"})
			}
		});
});


