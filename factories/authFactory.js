angular.module('MuSoft').factory("AuthFactory", function($firebaseAuth) {
	    var ref = new Firebase("https://intense-heat-9971.firebaseio.com/");
		return $firebaseAuth(ref);
	});
	