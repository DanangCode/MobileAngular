angular.module('AngularUIApp', [
    'ngRoute',
    'mobile-angular-ui',
    'AngularUIApp.controllers.Main',
    'ngResource',
    'services.resources',
    'services.session'
])

    .config(function ($routeProvider) {
        //$routeProvider.when('/', {templateUrl: 'home.html'});
        $routeProvider.when('/', {
            templateUrl: "about.html",
            reloadOnSearch: false
        });

        $routeProvider.when('/about', {
            templateUrl: 'about.html',
            reloadOnSearch: false
        });
        $routeProvider.when('/signIn', {
            templateUrl: "signIn.html",
            reloadOnSearch: false
        });
        $routeProvider.when('/authFail', {
            templateUrl: 'authFail.html',
            reloadOnSearch: false
        });

        $routeProvider.when('/paymentTypes', {
            templateUrl: 'paymentTypes.html',
            reloadOnSearch: false
        });

    }).run(function ($rootScope, SessionService, $location) {

        $rootScope.$on("$locationChangeStart", function (event, next, current) {

                    if (!SessionService.getUserAuthenticated()) {
                        //alert("You need to be authenticated to see this page!");
                        //event.preventDefault();
                        $location.path('/signIn');
                    }


        });

    });



