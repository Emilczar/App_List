
(function(){

    const app = angular.module('routerApp', ['ngRoute','ContrList']);
    
    app.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    
        $routeProvider
            .when('/lists', {
                controller: 'ContrList',
                templateUrl: '/views/lists.html'
            })
            .when('/lists/:id', {
                controller: 'ContrIdList',
                templateUrl: '/views/list_id.html'
            })
            .when('/lists/zm/:id', {
                controller: 'ContrIdEdit',
                templateUrl: '/views/edycja_id.html'
    
            })
            .when('/new', {
                controller: 'ContrNew',
                templateUrl: '/views/new.html'
    
            })
            .when('/inne', {
                templateUrl: '/views/inne.html',
            })
    
            .otherwise({
                redirectTo: '/inne'
            })
    
        $locationProvider
            .html5Mode(true);
    
    }])
    

})();
