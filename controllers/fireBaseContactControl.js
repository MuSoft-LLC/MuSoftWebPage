  angular.module('MuSoft').controller("firebaseContactController", function($scope, $firebaseArray, $interval) {
	  
    var ref = new Firebase("https://intense-heat-9971.firebaseio.com/contacts");
    // create a synchronized array
  	$scope.contacts = $firebaseArray(ref);
	  
	//$scope.newBlogDateTime = document.getElementById("lblTime").innerHTML = Date();  	
	var tick = function() {
		$scope.clock = Date.now();
	}
	tick();
	$interval(tick,1000);
	  
	$scope.addContact = function() {			
		$scope.contacts.$add({	 
		   "contact" : {
			name: $scope.name,
		  	email: $scope.email,
		  	comment: $scope.comment,
		  	dateTime: $scope.clock	  
			}
		  });
  	}; 
  });  
