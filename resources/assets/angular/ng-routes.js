mainApp.config(function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/pro', {

                templateUrl: 'templates/projects.list.html',
                controller: 'ProjectsCtrl'
            })
            .otherwise({
                redirectTo: '/users'
            });



});

console.log('sup');