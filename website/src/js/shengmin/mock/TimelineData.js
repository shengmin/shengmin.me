(function() {
	var mock = Ext.ns('shengmin.mock');
	var Event = shengmin.model.Event;
	var PIC_UW = 'img/content/uw.gif';
	
	mock.TimelineData = [{
		year: 2012,
		events: [
			new Event({
				title: 'Taking CS 350: Operating Systems',
				pictureUrl: PIC_UW,
				highlights: [
					'Group mates are <a target="_blank" href="http://www.facebook.com/aurickq">Aurick Qiao</a>, and <a target="_blank" href="http://www.facebook.com/profile.php?id=100000642110872">Edward Lee</a>'
				]
			}),
			new Event({
				title: 'Taking CS 341: Algorithms',
				pictureUrl: PIC_UW
			}),
			new Event({
				title: 'Taking CS 348: Introduction to Database Management',
				pictureUrl: PIC_UW
			}),
			new Event({
				title: 'Taking CS 442: Principles of Programming Languages',
				pictureUrl: PIC_UW
			}),
			
			new Event({
				title: 'Started using Vim on Linux',
				pictureUrl: 'img/content/vim.jpg'
			})
		]
	}, {
		month: 1,
		events: [
			new Event({
				title: 'Started using Sass',
				pictureUrl: 'img/content/sass.gif',
				highlights: [
					'The stylesheets of this website are written in Sass, then compiled into CSS'
				]
			})
		]
	}, {
		year: 2011,
		events: [
			new Event({
				title: 'Started doing <a target="_blank" href="http://www.interviewstreet.com">Interviewstreet</a> programming challenges during leisure time',
				pictureUrl: 'img/content/interview_street.png',
				highlights: [
					'Currently ranked 186th place out of 3760 participants'
				]
			}),
			
			new Event({
				title: 'Started using Google App Engine',
				pictureUrl: 'img/content/google_app_engine.jpg',
				highlights: [
					'This website is hosted on Google App Engine'
				]
			}),
			
			new Event({
				title: 'Started Android application development',
				pictureUrl: 'img/content/android.jpg'
			})
			
		]
	}, {
		month: 9,
		events: [
			new Event({
				title: 'Started internship at Oracle as Software Engineering Intern',
				location: 'Boston, MA',
				pictureUrl: 'img/content/oracle.jpg',
				highlights: [
					'Implemented a cross-browser LQL (a SQL-like language for querying MDEX search engine) query editor with content assist support (similar to what Eclipse offers) using pure JavaScript and HTML',
					'Implemented a LQL query tokenizer and parser as part of the LQL query editor project',
					'Designed and implemented a set of Java APIs for retrieving and updating MDEX configuration files',
					'Implemented a Java portlet that allows users to edit the configuration files in the browser using ExtJS form controls',
					'Utilized JAXB for marshalling and unmarshalling XML configuration files'
				]
			})
		]
	}, {
		month: 6,
		events: [
			new Event({
				title: 'Achieved 6th place in ACM local programming contest',
				location: 'Waterloo, ON',
				pictureUrl: 'img/content/acm.jpg'
			})
		]
	}, {
		month: 5,
		events: [
			new Event({
				title: 'Achieved 2nd place in Google Puzzle Challenge',
				location: 'Waterloo, ON',
				pictureUrl: 'img/content/google.jpg'
			})
		]
	}, {
		month: 1,
		events: [
			new Event({
				title: 'Started internship at NexJ Systems as Framework Developer Intern',
				pictureUrl: 'img/content/nexj.jpg',
				location: 'Toronto, ON',
				highlights: [
					'Grasped the codebase of more than million lines of code in a very short time period',
					'Fixed and resolved many NexJ CRM framework bugs and performance issues on both client side(written in JavaScript), and on server side(written in Java and Scheme)',
					'Rewrote the schedule control based on Google Calendar for better performance and usability',
					'Optimized the performance of string template parser',
					'Developed a JavaScript tool on top of Google Closure Compiler that can batch insert logger statements to the specified functions to aid debugging',
					'Proposed many practical ideas and design patterns for improving code maintainability'
				]
			})
		]
	}, {
		year: 2010,
		events: [
			new Event({
				title: 'Started using Git for source control',
				pictureUrl: 'img/content/git.jpg',
				highlights: [
					'Familiar with Git workflow and commonly-used commands'
				]
			}),
			
			new Event({
				title: 'Started using Linux and bash script',
				pictureUrl: 'img/content/linux.gif'
			}),
			new Event({
				title: 'Started using Apache Ant for build automation',
				pictureUrl: 'img/content/apache.jpg',
				highlights: [
					'Able to write Ant build scripts from scratch',
					'Able to create new Ant Task in Java'
				]
			}),
			new Event({
				title: 'Started using Google Closure tools',
				pictureUrl: 'img/content/google.jpg'
			}),
			
			new Event({
				title: 'Started using ExtJS as the main JavaScript library',
				pictureUrl: 'img/content/extjs.jpg'
			}),
			
			new Event({
				title: 'Started developing web applications with Google Data API',
				pictureUrl: 'img/content/google.jpg'
			}),
			
			new Event({
				title: 'Started learning algorithms',
				pictureUrl: 'img/content/graph_theory.jpg'
			}),
			
			new Event({
				title: 'Worked with VB.NET',
				pictureUrl: 'img/content/vb_dot_net.jpg'
			}),
			
			new Event({
				title: 'Worked with SQL Server',
				pictureUrl: 'img/content/sql_server.jpg'
			})
		]
	}, {
		month: 12,
		events: [
			new Event({
				title: 'Started NotesRender project with <a target="_blank" href="http://www.linkedin.com/pub/wei-nan-wen/21/561/774">Peter Wen</a> and <a target="_blank" href="http://www.linkedin.com/pub/hanson-wang/21/a66/186">Hanson Wang</a>',
				highlights: [
					'A website for sharing course materials',
					'Java back end, JavaScript front end, currently built on top of ExtJS 4, and MySQL as the database',
					'Heavy integration with Google Documents List API 3.0',
					'Adopt OAuth 2.0 as the authorization mechanism for accessing Google Data API',
					'Utilize FreeMarker for source code generation'
				]
			})
			
		]
	}, {
		month: 9,
		events: [
			new Event({
				title: 'Achieved 11th place in ACM local programming contest',
				pictureUrl: 'img/content/acm.jpg',
				location: 'Waterloo, ON'
			})
		]
	}, {
		month: 5,
		events: [
			new Event({
				title: 'Started internship at Roadpost as Software Developer Intern',
				location: 'Mississauga, ON',
				pictureUrl: 'img/content/roadpost.jpg',
				highlights: [
					'Implemented the GeoPro admin website using ASP.NET and ExtJS',
					'Implemented a TCP/IP web service consumer in VB.NET for updating device states',
					'Developed a diagnostic program in C# that tests if a GeoPro satellite device functions properly',
					'Proposed and implemented many ideas for improving user experience and performance of the GeoPro client website(written in C# and JavaScript)'
				]
			})
		]
	}, {
		month: 3,
		events: [
			new Event({
				title: 'Achieved 3rd place in WL compiler optimization contest',
				location: 'Waterloo, ON'
			})
		]
	}, {
		year: 2009,
		events: [
			new Event({
				title: 'Started programming in Java',
				pictureUrl: 'img/content/java.jpg',
				highlights: [
					'Very strong knowledge and experience in Java',
					'Primary language for algorithm contests and non-GUI hobby projects'
				]
			}),
		
			new Event({
				title: 'Started programming in Scheme',
				pictureUrl: 'img/content/racket.jpg'
			}),
			
			new Event({
				title: 'Started programming in C/C++',
				pictureUrl: 'img/content/cpp.jpg'
			}),
			
			new Event({
				title: 'Started using Eclipse for Java development',
				pictureUrl: 'img/content/eclipse.jpg'
			}),
			
			new Event({
				title: 'Started developing web applications with Facebook API',
				pictureUrl: 'img/content/fb.jpg'
			})
		]
	}, {
		year: 2008,
		events: [
			new Event({
				title: 'Started using MySQL',
				pictureUrl: 'img/content/mysql.jpg'
			})
		]
	}, {
		month: 12,
		events: [
			new Event({
				title: 'Started AppRender.NET project',
				highlights: [
					'A set of fast, easy-to-use, and extendable ASP.NET server-side components for combining JavaScripts, and handling caching, GZip compression and JSON serialization/deserialization automatically using HTTP handlers and HTTP modules',
					'Source codes hosted at <a target="_blank" href="http://apprender.codeplex.com/">http://apprender.codeplex.com/</a>'
				]
			})
		]
	}, {
		year: 2007,
		events: [
			new Event({
				title: 'Started programming in JavaScript',
				pictureUrl: 'img/content/js.png',
				highlights: [
					"I'm a JavaScript Ninja",
					'Google Dart is a nice alternative, but lacks native browser support and an efficient Dart-to-JavaScript compiler'
				]
			}),
			
			new Event({
				title: 'Started programming in C#',
				pictureUrl: 'img/content/csharp.png',
				highlights: [
					'Very strong knowledge and experience in C#',
					'Aware of and experienced with almost all language features',
					'Personal opinion: C# is a nicer language than Java'
				]
			}),
			
			new Event({
				title: 'Started developing .NET applications, ASP.NET in particular',
				pictureUrl: 'img/content/dot_net.jpg',
				highlights: [
					'I would have sticked with .NET for developing web applications if Mono were mature enough'
				]
			}),
			
			new Event({
				title: 'Started using Visual Studio for .NET application development',
				pictureUrl: 'img/content/visual_studio.jpg'
			}),
			
			new Event({
				title: 'Started using jQuery as the main JavaScript library for hobby projects',
				pictureUrl: 'img/content/jquery.jpg'
			})
			
			
		]
	}, {
		year: 2005,
		events: [
			new Event({
				title: 'Started using HTML',
				pictureUrl: 'img/content/html.jpg'
			}),
			
			new Event({
				title: 'Started using CSS',
				pictureUrl: 'img/content/css.jpg'
			})
			
			
		]
	}];
	
	
})();
