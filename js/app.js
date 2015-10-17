	// create the module and name it scotchApp
	var MuSoft = angular.module('MuSoft', ['ngRoute']);

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
			});	
	});

	// create the controller and inject Angular's $scope
	MuSoft.controller('homeController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	MuSoft.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	MuSoft.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	MuSoft.controller('tipCalcController', function($scope) {
		$scope.message = 'Tip Calculator';
	});
	
	MuSoft.controller('blogController', function($scope) {
		$scope.message = 'This will be our blog';
	});
	



          