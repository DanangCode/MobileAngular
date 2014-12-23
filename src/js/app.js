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
            templateUrl: "signIn.html"
        });
        $routeProvider.when('/signIn', {
            templateUrl: "signIn.html"
        });
        $routeProvider.when('/about', {
            templateUrl: 'about.html'
        });

        $routeProvider.when('/authFail', {
            templateUrl: 'authFail.html'
        });

        $routeProvider.when('/userHome', {
            templateUrl: 'userHome.html'
            //resolve: {
            //    auth: ["$q", "authenticationSvc", function ($q, authenticationSvc) {
            //        var userInfo = authenticationSvc.getUserInfo();
            //
            //        if (userInfo) {
            //            return $q.when(userInfo);
            //        } else {
            //            return $q.reject({authenticated: false});
            //        }
            //    }]
            //}
        });
        $routeProvider.when('/paymentTypes', {
            templateUrl: 'paymentTypes.html'
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



