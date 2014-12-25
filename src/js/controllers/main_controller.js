var app = angular.module('AngularUIApp.controllers.Main',
    ['services.resources', 'services.session']);


app.controller('MainController', function($scope, $location, loginService, SessionService, $log){

    // Initialized the user object
    $scope.user = {
        username: "",
        password: ""
    };
    

    // Sign In auth function
    $scope.signin = function () {

        $log.info('starting');
        loginService.login({},
            {email:$scope.user.username, password:$scope.user.password},
            //success
            function( value ){

                $log.info('code ' + value.code);
                $scope.success = value.success;
                $scope.code = value.code;

                if (value.success===true) {
                    $log.info("Success");
                    $scope.signInMessage = "";
                    SessionService.setUserAuthenticated(true);
                        $location.path('/about');
                } else {
                    $log.info("AuthError: " + value.code);
                    $scope.signInMessage = "This user and password combination is unknown";
                    //$location.path('/signIn');
                }
            },
            errorCallback
        );

    };

    var errorCallback = function(response) {
        $log.info('failed http req!');
        $log.info('data: ' + response.data);
        $log.info('status: ' + response.status);
        $log.info('headers: ' + JSON.stringify(response.headers()));
        $log.info('config: ' + JSON.stringify(response.config));
    }



});


