var myApp = angular.module('myApp', ['ngRoute'])
//ng-route config
    .when('/contact-info/:contact_index', {
    .when('/Add', {
    .when('/edit/:contact_index', {
// controllers
.controller('homeCtrl', function ($scope, ContactService){
  $scope.removeContact = function (item) {
	// Use SweetAlert css library here for a prettier confirmation alert.
		// Do nothing!
.controller('contactInfoCtrl', function ($scope, $routeParams){
.controller('addContactCtrl', function ($scope, $location) {
.controller('editContactCtrl', function ($scope, $routeParams){
// directives
// services
  // The contact list is stored in a separate, included Javascript file called 'contacts.js'
  return factory;