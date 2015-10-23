
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
  MuSoft.controller('contactController',
   function ($scope, $uibModal, $log) {

  $scope.message = 'Contact us! JK. This is just a demo.';
  
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'contactModal.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

MuSoft.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

          