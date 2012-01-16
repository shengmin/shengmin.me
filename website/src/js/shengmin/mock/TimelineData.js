(function() {
	var mock = Ext.ns('shengmin.mock');
	var Event = shengmin.model.Event;
	var PIC_UW = 'img/content/uw.gif';
	
	mock.TimelineData = [{
		year: 2012,
		events: [
			new Event({
				title: 'Started using <a target="_blank" href="http://sass-lang.com/">Sass</a>',
				pictureUrl: 'img/content/sass.gif',
				highlights: [
					'The stylesheets of this website are written in Sass, then compiled into CSS'
				]
			})
		]
	}, {
		month: 1,
		events: [
			new Event({
				title: 'Started taking CS 350: Operating Systems',
				pictureUrl: PIC_UW,
				highlights: [
					'Group mates are <a target="_blank" href="http://www.facebook.com/aurickq">Aurick Qiao</a>, and <a target="_blank" href="http://www.facebook.com/profile.php?id=100000642110872">Edward Lee</a>'
				]
			}),
			new Event({
				title: 'Started taking CS 341: Algorithms',
				pictureUrl: PIC_UW
			}),
			new Event({
				title: 'Started taking CS 348: Introduction to Database Management',
				pictureUrl: PIC_UW
			}),
			new Event({
				title: 'Started taking CS 442: Principles of Programming Languages',
				pictureUrl: PIC_UW
			})
		]
	}, {
		year: 2011,
		events: [
			new Event({
				title: 'Started Internship at Oracle as a Software Engineer',
				location: 'Boston, MA',
				pictureUrl: 'img/content/oracle.jpg',
				highlights: [
					'hightlight 1',
					'hightlight 2',
					'hightlight 3'
				]
			}),
			new Event({
				title: 'Started Internship at Oracle as a Software Engineer',
				location: 'Boston, MA',
				pictureUrl: 'img/content/oracle.jpg',
				highlights: [
					'hightlight 1',
					'hightlight 2',
					'hightlight 3'
				]
			})
		]
	}, {
		month: 12,
		events: [
			new Event({
				title: 'Started Internship at Oracle as a Software Engineer',
				location: 'Boston, MA',
				pictureUrl: 'img/content/oracle.jpg',
				highlights: [
					'hightlight 1',
					'hightlight 2',
					'hightlight 3'
				]
			}),
			new Event({
				title: 'Started Internship at Oracle as a Software Engineer',
				location: 'Boston, MA',
				pictureUrl: 'img/content/oracle.jpg',
				highlights: [
					'hightlight 1',
					'hightlight 2',
					'hightlight 3'
				]
			})
		]
	}];
	
	return;
	mock.TimelineData = [
		
		new Event({
			title: 'Started Internship at Oracle as a Software Engineer',
			location: 'Boston, MA',
			pictureUrl: 'img/content/oracle.jpg',
			year: 2011,
			month: 1,
			highlights: [
				'hightlight 1',
				'hightlight 2',
				'hightlight 3'
			]
		}),
		new Event({
			title: 'Started Internship at Oracle as a Software Engineer',
			location: 'Boston, MA',
			pictureUrl: 'img/content/oracle.jpg',
			year: 2011,
			month: 1,
			highlights: [
				'hightlight 1',
				'hightlight 2',
				'hightlight 3'
			]
		})
	];
	
})();
