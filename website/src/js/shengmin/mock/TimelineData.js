(function() {
	var mock = Ext.ns('shengmin.mock');
	var Event = shengmin.model.Event;
	
	mock.TimelineData = [{
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
