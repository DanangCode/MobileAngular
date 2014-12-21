//var app = angular.module('AngularUIApp.controllers.Main2', [
//    "services.resources",
//    "ngRoute",
//    "mobile-angular-ui",
//    "ngResource"
//]);
//
////app.factory('auth', function ($resource) {
////    return $resource('http://t001-005-001-02a.elasticbeanstalk.com/api');
////});
//
//
//app.controller('MainController', ['$scope', '$location',
//    function ($scope, $location, $resource, loginService) {
//
//        loginService.login();
//        //var auth = $resource('http://t001-005-001-02a.elasticbeanstalk.com/api');
//
//        // Initialized the user object
//        $scope.user = {
//            username: "",
//            password: ""
//        };
//
//        $scope.logout = function () {
//            $scope.loggedIn = false;   // to toggle display of SignUp/Logout
//            $scope.user = {            // re init the user object
//                username: "",
//                password: ""
//            };
//            $location.path('/');       // redirect to home page after logout
//        };
//
//
//        // Sign In auth function
//        $scope.signin = function () {
//
//            console.log('starting');
//            var credentials = {
//                username: $scope.username,
//                token: $scope.password
//            };
//
//            var success = function () {
//                var token = $scope.token;
//
//                $cookieStore.put('token', token);
//                console.log('me in');
//                $location.path('/about');
//            };
//
//            var error = function () {
//                console.log('auth fail');
//                $location.path('/authFail');       // redirect to home page after logout
//
//                // TODO: apply user notification here..
//            };
//
//
//           // var session = Authentication.post();
//            var res = Authentication.login(credentials);
//            console.log(res);
//            //session.post();
//            //console.log(auth);
//
//            //$scope.login(credentials).execute.success(success).error(error);
//
//        }
//
//
//        //$scope.login = function (credentials) {
//        //    console.log();
//        //    return Auth.post(credentials);
//        //    //return $http.post(url + '/api', credentials);
//        //
//        //};
//
//    }
//]);
//
//
//
//
//
//
//
