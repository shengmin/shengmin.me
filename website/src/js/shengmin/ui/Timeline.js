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
			'<td class="{dateClass}">{date}</td>',
			'<td id="{id}" class="timeline-content-cell">{events}</td>',
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
	
	Ext.define('shengmin.ui.Timeline', {
		extend : 'Ext.Component',

		config : {
			/**
			 * @property {Object[]}
			 */
			eventsData : []
		},

		getContentCellId: function(iRow){
			return this.id + '-content-' + iRow;
		},
		
		getEventCellId: function(iRow, iEvent) {
			return this.id + '-event-' + iRow + '-' + iEvent;
		},

		onRender : function() {
			this.autoEl = {
				tag: 'table',
				style: 'width: 100%'
			};
			this.callParent(arguments);
			var tableEl = this.getEl();
			var eventsBuffer = [];
			var buffer = [];
			
			var data = this.eventsData;
			for(var i = 0, len = data.length; i < len; i++) {
				var time = data[i];
				var dateClass = '';
				var date = '';
				
				if(time.month) {
					dateClass = 'timeline-date-cell-month';
					date = monthMapping[time.month];
				} else {
					dateClass = 'timeline-date-cell-year';
					date = time.year;
				}
				
				var contentCellId = this.getContentCellId(i);
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
					id: contentCellId,
					dateClass: dateClass,
					date: date,
					events: eventsBuffer.join('')
				});
				
				eventsBuffer.length = 0;
			}
			
			tableEl.update(buffer.join(''));
			
			// adding popup
			for(var i = 0, nTime = data.length; i < nTime; i++) {
				var time = data[i];
				var events = time.events;
				
				for(var j = events.length - 1; j >= 0; j--) {
					var evt = events[j];
					var eventCellId = this.getEventCellId(i, j);
					var highlights = evt.highlights;
					
					if(highlights) {
						buffer.length = 0;
						buffer[buffer.length] = '<ul class="timeline-highlight">';
						for(var k = 0, len = highlights.length; k < len; k++) {
							buffer[buffer.length] = '<li class="timeline-highlight">';
							buffer[buffer.length] = highlights[k];
							buffer[buffer.length] = '</li>';
						}
						buffer[buffer.length] = '</ul>';
						
						(function(evt) {
							Ext.create('Ext.tip.ToolTip', {
								target: eventCellId,
								html: buffer.join(''),
								showDelay: 100,
								dismissDelay: 100000,
								hideDelay: 10,
								trackMouse: true,
								anchor: 'top'
							});
						})(evt);
					}
				}
			}
			
			Ext.QuickTips.init();
		}
	});
})();
