
controllers.controller('ProjectsCtrl',  function($scope, $http,  $window) {
	$http.get('api/projects')
	.success(function(data){
        $scope.projects = data;
        console.log('done');
        console.log(data);
    })
    .error(function(data){
		$scope.error = data;
    });
});