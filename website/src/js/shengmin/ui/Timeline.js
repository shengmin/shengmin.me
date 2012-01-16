(function() {
	var monthMapping = [
		'',
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december'
	];
	
	var ROW_TEMPLATE = new Ext.Template(
		'<tr>',
			'<td class="timeline-date-cell-{dateType}">{date}</td>',
			'<td class="timeline-content-cell-{dateType}">{events}</td>',
		'</tr>'
	).compile();
	
	var EVENT_TEMPLATE = new Ext.Template(
		'<div id="{id}" class="timeline-content-container">',
			'<div class="timeline-picture-container"><img class="profile-picture" src="{picUrl}" /></div>',
			'<div class="timeline-title-container">',
				'<div class="timeline-title-left">{title}</div>',
				'<div class="timeline-title-right">{location}</div>',
			'</div>',
		'</div>'
	).compile();
	
	var HIGHLIGHT_TEMPLATE = new Ext.Template(
		'<div class="timeline-highlight-wrapper">',
			'<div class="timeline-highlight-container">{highlights}</div>',
		'</div>'
	).compile();
	
	Ext.define('shengmin.ui.Timeline', {
		extend : 'Ext.Component',

		config : {
			/**
			 * @property {Object[]}
			 */
			eventsData : []
		},
		
		getEventCellId: function(iRow, iEvent) {
			return this.id + '-event-' + iRow + '-' + iEvent;
		},

		onRender : function() {
			this.autoEl = {
				tag: 'div',
				cls: 'timeline-container'
			};
			this.callParent(arguments);
			var el = this.getEl();
			var eventsBuffer = [];
			var buffer = ['<table style="width: 100%;">'];
			
			var data = this.eventsData;
			for(var i = 0, len = data.length; i < len; i++) {
				var time = data[i];
				var dateType = '';
				var date = '';
				
				if(time.month) {
					dateType = 'month';
					date = monthMapping[time.month];
				} else {
					dateType = 'year';
					date = time.year;
				}
				
				var events = time.events;
				
				for(var j = 0, nEvent = events.length; j < nEvent; j++) {
					var evt = events[j];
					var eventCellId = this.getEventCellId(i, j);
					
					eventsBuffer[eventsBuffer.length] = EVENT_TEMPLATE.apply({
						picUrl: evt.pictureUrl,
						title: evt.title,
						location: evt.location,
						id: eventCellId
					});
				}
				
				buffer[buffer.length] = ROW_TEMPLATE.apply({
					dateType: dateType,
					date: date,
					events: eventsBuffer.join('')
				});
				
				eventsBuffer.length = 0;
			}
			
			buffer[buffer.length] = '</table>';
			
			el.update(buffer.join(''));
			
			var timers = [];
			
			// adding popup for displaying highlights
			for(var i = 0, nTime = data.length; i < nTime; i++) {
				var time = data[i];
				var events = time.events;
				timers[i] = [];
				
				for(var j = events.length - 1; j >= 0; j--) {
					var evt = events[j];
					var eventCellId = this.getEventCellId(i, j);
					var highlights = evt.highlights;
					
					if(highlights && highlights.length !== 0) {
						buffer.length = 0;
						buffer[buffer.length] = '<ul class="timeline-highlight">';
						for(var k = 0, len = highlights.length; k < len; k++) {
							buffer[buffer.length] = '<li class="timeline-highlight">';
							buffer[buffer.length] = highlights[k];
							buffer[buffer.length] = '</li>';
						}
						buffer[buffer.length] = '</ul>';
						
						(function() {
							var timer = null;
							var eventCellEl = Ext.fly(eventCellId);
							var highlightEl = HIGHLIGHT_TEMPLATE.insertAfter(eventCellEl, { highlights: buffer.join('') }, true);
						
							eventCellEl.on('mouseenter', function(){
								if(timer) {
									clearTimeout(timer);
									timer = null;
								}
								if(!highlightEl.isVisible()) highlightEl.show(true);
							});
							
							eventCellEl.on('mouseleave', function(){
								if(timer) clearTimeout(timer);
								timer = setTimeout(function(){
									highlightEl.hide(true);
								}, 500);
							});
							
							highlightEl.on('mouseenter', function(){
								if(timer) {
									clearTimeout(timer);
									timer = null;
								}
							});
							
							highlightEl.on('mouseleave', function(){
								if(timer) clearTimeout(timer);
								timer = setTimeout(function(){
									highlightEl.hide(true);
								}, 500);
							});
						})();
						
						
// 						
						// (function(){
							// var timer = null;
// 						
// 							
// 							
							// eventCellEl.on('mouseleave', function(e, dom){
								// var nextElement = Ext.fly(dom).next();
								// if(timer) clearTimeout(timer);
								// timer = setTimeout(function(){
									// nextElement.hide(true);
								// }, 1500);
							// });
// 							
							// highlightEl.on('mouseenter', function(e, dom){
								// if(timer) {
									// clearTimeout(timer);
									// timer = null;
								// }
							// });
// 							
							// highlightEl.on('mouseleave', function(e, dom){
								// var el = Ext.get(dom);
								// if(timer) clearTimeout(timer);
								// timer = setTimeout(function(){
									// el.hide(true);
								// }, 1500);
							// });
						// })();
						
						
					}
				}
			}
			
		}
	});
})();
