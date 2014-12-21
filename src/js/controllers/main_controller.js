var app = angular.module('AngularUIApp.controllers.Main',
    ['services.resources']);

app.controller('MainController', function($scope, $log, $location, loginService){
    //_LTracker.push('Hello World');
  //car.start();

    // Initialized the user object
    $scope.user = {
        username: "",
        password: ""
    };


    //loginService.save({}, {"email":"demo.sipree@gmail.com.mmh","password":"ABCD1234a"},

    //console.log(res);

    // Sign In auth function
    $scope.signin = function () {

        console.log('starting');
        //var credentials = {
        //    username: $scope.username,
        //    password: $scope.password
        //};

        var res = loginService.save({},
            {email:$scope.user.username,password:$scope.user.password},
            //success
            function( value ){
                //alert('success');

                console.log("success " + value.success);
                console.log('code ' + value.code);
                $scope.success = value.success;
                $scope.code = value.code;
                $location.path('/about');
            },
            function( reason ){
                console.log('error ' + reason );
                //$location.path('/authFail');
            }
        );

        console.log(res);

    }



});


