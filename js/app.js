	// create the module and name it scotchApp
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
		$scope.message = 'A Simple Tip Calculator and Bill Splitter';
	});
	
	MuSoft.controller('blogController', function($scope) {
		$scope.message = 'This will be our blog';
	});
	
	MuSoft.controller('blogEntryController', function($scope) {
		$scope.message = 'This is how you post a blog entry';
	});
	
  MuSoft.controller("firebaseController", function($scope, $firebaseArray, $interval) {
  		var ref = new Firebase("https://intense-heat-9971.firebaseio.com/");
  // create a synchronized array
  	$scope.blogs = $firebaseArray(ref);
	  
	//$scope.newBlogDateTime = document.getElementById("lblTime").innerHTML = Date();  
	
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick,1000);
	
  // add new items to the array
  // the message is automatically added to our Firebase database!
  	$scope.addBlog = function() {			
		$scope.blogs.$add({

		  title: $scope.newBlogTitle,
		  author: $scope.newBlogAuthor,
		  body: $scope.newBlogBody,
		  dateTime: $scope.clock
		  
		  });
  	};
  });
  MuSoft.controller("carouselController", function($scope) {
	  $scope.myInterval = 5000;
  	  $scope.noWrapSlides = false;
  	  var slides = $scope.slides = [];
  	  $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
      image: '/../img/' + newWidth,
      text: ['Logo','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  });

          