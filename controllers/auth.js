angular.module('MuSoft').controller('authController', function($scope, AuthFactory) {
		 var ref = new Firebase("https://intense-heat-9971.firebaseio.com/");
		 
		 AuthFactory.$onAuth(function(authData){
			 $scope.authData = authData;
			 console.log(authData);
		 });
		 
		 
		 $scope.gitLogin = function() {
			 AuthFactory.$authWithOAuthPopup("github").then(function(authData) {
			 console.log(authData);		 
			 }).catch(function(error){
				 console.error(error);
			 });
		 }
		
		 
		$scope.twitterLogin = function() {
		ref.authWithOAuthPopup("twitter", function(error, authData) {
  			if (error) {
    		console.log("Login Failed!", error);
			console.log(authData);
  			} else {
    		console.log("Authenticated successfully with payload:", authData);
  				}
			});
		}
		
		$scope.fbLogin = function(){
		ref.authWithOAuthPopup("facebook", function(error, authData) {
  				if (error) {
    				console.log("Login Failed!", error);
  				} else {
    				console.log("Authenticated successfully with payload:", authData);
  				}
			});
		}
			
		 $scope.logout = function() {
			 AuthFactory.$unauth();
		 }
});
	