Ext.onReady(function(){
	Ext.create('shengmin.ui.Timeline', {
		eventsData: shengmin.mock.TimelineData,
		renderTo: 'timeline-container'
	});
});

