  angular.module('MuSoft').controller("firebaseBlogController", function($scope, $firebaseArray, $interval) {
	  
    var ref = new Firebase("https://intense-heat-9971.firebaseio.com/blogs");
    // create a synchronized array
  	$scope.blogs = $firebaseArray(ref);
	  
	//$scope.newBlogDateTime = document.getElementById("lblTime").innerHTML = Date();  	
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick,1000);

  // add new items to the array
  	$scope.addBlog = function() {			
		$scope.blogs.$add({
		   "blog" : {
		  	author: $scope.author,
			title: $scope.title,
		  	body: $scope.body,
		  	dateTime: $scope.clock	  	  
			}		
		  });
  	};
  });  
