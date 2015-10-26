  angular.module('MuSoft').controller("firebaseBlogController", function($scope, $firebaseArray, $interval) {
	  
    var ref = new Firebase("https://intense-heat-9971.firebaseio.com/blog");
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
		   "blog" : {
		  	title: $scope.newBlogTitle,
		  	author: $scope.newBlogAuthor,
		  	body: $scope.newBlogBody,
		  	dateTime: $scope.clock	  	  
			}
			
		  });
		
  	};

	  
	  
	  
  });  
