var mainApp = angular.module('main', [
    'ngRoute',
    'controllers'
    
]);

mainApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/pro', {

                templateUrl: 'templates/projects.list.html',
                controller: 'ProjectsCtrl'
            })
            .otherwise({
                redirectTo: '/users'
            });



}]);

console.log('sup');
var controllers = angular.module('controllers', []);

controllers.controller('ProjectsCtrl',  ["$scope", "$http", "$window", function($scope, $http,  $window) {
	$http.get('api/projects')
	.success(function(data){
        $scope.projects = data;
        console.log('done');
        console.log(data);
    })
    .error(function(data){
		$scope.error = data;
    });
}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJuZy1yb3V0ZXMuanMiLCJjb250cm9sbGVycy9jb250cm9sbGVycy5qcyIsImNvbnRyb2xsZXJzL3Byb2plY3RzL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFpbkFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtYWluJywgW1xuICAgICduZ1JvdXRlJyxcbiAgICAnY29udHJvbGxlcnMnXG4gICAgXG5dKTtcbiIsIm1haW5BcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICAgICAkcm91dGVQcm92aWRlci5cbiAgICAgICAgICAgIHdoZW4oJy9wcm8nLCB7XG5cbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wcm9qZWN0cy5saXN0Lmh0bWwnLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQcm9qZWN0c0N0cmwnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm90aGVyd2lzZSh7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RUbzogJy91c2VycydcbiAgICAgICAgICAgIH0pO1xuXG5cblxufSk7XG5cbmNvbnNvbGUubG9nKCdzdXAnKTsiLCJ2YXIgY29udHJvbGxlcnMgPSBhbmd1bGFyLm1vZHVsZSgnY29udHJvbGxlcnMnLCBbXSk7IiwiXG5jb250cm9sbGVycy5jb250cm9sbGVyKCdQcm9qZWN0c0N0cmwnLCAgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgICR3aW5kb3cpIHtcblx0JGh0dHAuZ2V0KCdhcGkvcHJvamVjdHMnKVxuXHQuc3VjY2VzcyhmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgJHNjb3BlLnByb2plY3RzID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSlcbiAgICAuZXJyb3IoZnVuY3Rpb24oZGF0YSl7XG5cdFx0JHNjb3BlLmVycm9yID0gZGF0YTtcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==