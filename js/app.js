
	var MuSoft = angular.module('MuSoft', ['ngRoute','firebase', 'ngAnimate', 'ui.bootstrap' ]);

	// configure our routes
	MuSoft.config(function($routeProvider) {
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'homeController'
			})	
				// route for the home page
			.when('/home', {
				templateUrl : 'templates/home.html',
				controller  : 'homeController'
			})	
			// route for the about page
			.when('/tipCalc', {
				templateUrl : 'templates/tipCalc.html',
				controller  : 'tipCalcController'
			})	
			// route for the about page
			.when('/blog', {
				templateUrl : 'templates/blog.html',
				controller  : 'blogController'
			})		
					
			// route for the about page
			.when('/about', {
				templateUrl : 'templates/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'templates/contact.html',
				controller  : 'contactController'
			})
			
			.when('/blogEntry', {
				templateUrl: 'templates/blogEntry.html',
				controller: 'blogEntryController'
			})	
			
			.when('/contactList', {
				templateUrl: 'templates/contactList.html',
				controller: 'contactController'
			})
			
			.when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'logInController'

			})
			
			.when('/logout', {
				templateUrl: 'templates/logout.html',
				controller: 'logOutController'

			})
			
			.when('/signup', {
				templateUrl: 'templates/signup.html',
				controller: 'signUpController'

			})
			
			.when('/profile', {
				templateUrl: 'templates/profile.html',
				controller: 'authController'

			})
			
			.when('/404', {
				templateUrl: 'templates/404.html',
				controller: '404Controller'
			})
			
			.otherwise('/404');		
	});


	

	


          