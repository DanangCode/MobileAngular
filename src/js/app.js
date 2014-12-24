angular.module('AngularUIApp', [
    'ngRoute',
    'mobile-angular-ui',
    'AngularUIApp.controllers.Main',
    'ngResource',
    'services.resources',
    'services.session',
    'ngLoggly'
])

    .config(function ($routeProvider, LogglyLoggerProvider) {
        LogglyLoggerProvider.inputToken('216a3ed7-8fe0-4046-93b4-097fe714b9ef');

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

    }).run(function ($rootScope, SessionService, $location, $log) {

        $rootScope.$on("$locationChangeStart", function (event, next, current) {

            if (!SessionService.getUserAuthenticated()) {
                $log.info("You need to be authenticated to see this page!");
                //event.preventDefault();
                $location.path('/signIn');
            }


        });

    });



