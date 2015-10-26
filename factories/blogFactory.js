angular.module('MuSoft').factory('blogFactory', ['FBMSG','$firebaseArray', '$http', '$q', ])
	function(FBMSG, $firebaseArray,$http, $q);
	var eventFactory = {};
	var ref = new Firebase(FBMSG);
	
	blogFactory.getAllEvents = function() {
		
		return $http.post('api/events/new', event);
	}