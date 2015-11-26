angular.module('MuSoft').controller('authController', function($scope, AuthFactory) {
		 var ref = new Firebase("https://intense-heat-9971.firebaseio.com/");
		 
		 AuthFactory.$onAuth(function(authData){
			 $scope.authData = authData;
			 console.log(authData);
		 });
		 
		 //github login name needs refactoring
		 $scope.login = function() {
			 AuthFactory.$authWithOAuthPopup("github").then(function(authData) {
			 console.log(authData);		 
			 }).catch(function(error){
				 console.error(error);
			 });
		 }
		 //github logout name needs refactoring
		 $scope.logout = function() {
			 AuthFactory.$unauth();
		 }
		 
		//creates users
			ref.createUser({
  				email    : "nickmuscara@gmail.com",
  				password : "1234"
	    	}, function(error, userData) {	
				  if (error) {
    				console.log("Error creating user:", error);
  				} else {
    				console.log("Successfully created user account with uid:", userData.uid);
  				}
				  
				  remember: "sessionOnly"
		}); 
		
		//logs users in
		ref.authWithPassword({
  			email    : "bobtony@firebase.com",
 			 password : "correcthorsebatterystaple"
			}, function(error, authData) {
  				if (error) {
  				  console.log("Login Failed!", error);
 			 	} else {
  				 console.log("Authenticated successfully with payload:", authData);
 				 }
			});
});
	