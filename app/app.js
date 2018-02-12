var myApp = angular.module('myApp', ['ngRoute'])
//ng-route config.config(function ($routeProvider, $locationProvider){  $routeProvider    .when('/Home', {      templateUrl: 'default.html',    })
    .when('/contact-info/:contact_index', {      templateUrl: 'contact_info.html',      controller: 'contactInfoCtrl'    })
    .when('/Add', {      templateUrl: 'contact_form.html',      controller: 'addContactCtrl'    })
    .when('/edit/:contact_index', {      templateUrl: 'contact_form.html',      controller: 'editContactCtrl'    })    .otherwise({redirectTo: '/Home'});})
// controllers.controller('navCtrl', function ($scope) {  $scope.nav = {    navItems: ['Home', 'Add'],    selectedIndex: 0,    navClick: function ($index) {      $scope.nav.selectedIndex = $index;    }  };})
.controller('homeCtrl', function ($scope, ContactService){  $scope.contacts = ContactService.getContacts();
  $scope.removeContact = function (item) {    var index = $scope.contacts.indexOf(item);
	// Use SweetAlert css library here for a prettier confirmation alert.	if (confirm('You are about to delete a contact. Proceed?' )) {		// Delete contact record		$scope.contacts.splice(index, 1);		$scope.removed = 'Contact deleted.';	} else {
		// Do nothing!	}  };  })
.controller('contactInfoCtrl', function ($scope, $routeParams){  var index = $routeParams.contact_index;  $scope.currentContact = $scope.contacts[index];})
.controller('addContactCtrl', function ($scope, $location) {  $scope.path = $location.path();  $scope.addContact = function () {    var contact = $scope.currentContact;    contact.id = $scope.contacts.length;    $scope.contacts.push(contact);  };})
.controller('editContactCtrl', function ($scope, $routeParams){  $scope.index = $routeParams.contact_index;  $scope.currentContact = $scope.contacts[$scope.index];})
// directives.directive('contact', function () {  return {    restrict: 'E',    replace: true,    templateUrl: 'contact.html'  }})
// services.factory('ContactService', [function () {  var factory = {};  factory.getContacts = function () {    return contactList;  }
  // The contact list is stored in a separate, included Javascript file called 'contacts.js'
  return factory;}]);