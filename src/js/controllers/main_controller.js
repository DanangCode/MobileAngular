var app = angular.module('AngularUIApp.controllers.Main',
    ['services.resources', 'services.session']);


app.controller('MainController', function($scope, $location, loginService, SessionService){

    // Initialized the user object
    $scope.user = {
        username: "",
        password: ""
    };




    // Sign In auth function
    $scope.signin = function () {

        console.log('starting');
        loginService.login({},
            {email:$scope.user.username, password:$scope.user.password},
            //success
            function( value ){

                console.log('code ' + value.code);
                $scope.success = value.success;
                $scope.code = value.code;

                if (value.success===true) {
                    console.log("Success");
                    $scope.signInMessage = "";
                    SessionService.setUserAuthenticated(true);
                        $location.path('/about');
                } else {
                    console.log("AuthError: " + value.code);
                    $scope.signInMessage = "This user and password combination is unknown";
                    //$location.path('/signIn');
                }
            },
            errorCallback
        );

    };

    var errorCallback = function(response) {
        console.log('failed http req!');
        console.log('data: ' + response.data);
        console.log('status: ' + response.status);
        console.log('headers: ' + JSON.stringify(response.headers()));
        console.log('config: ' + JSON.stringify(response.config));
    }



});


