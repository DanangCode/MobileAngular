var app = angular.module('AngularUIApp.controllers.Main',
    ['services.resources']);

app.controller('MainController', function($scope, $log, $location, loginService){
    _LTracker.push('Hello World');
  //car.start();



    //loginService.save({}, {"email":"demo.sipree@gmail.com.mmh","password":"ABCD1234a"},
    var res = loginService.save({}, {email:"demo.sipree@gmail.com",password:"ABCD1234"},

        //success
        function( value ){
            //alert('success');
            console.log("code " + res.code);
            console.log("success " + value.success);
            console.log('value ' + value.code);
            $scope.success = value.success;
            $scope.code = value.code;
        },
        function( reason ){
            // alert('failure ' + error);

            reason.error();
            console.log('error ' + reason );
        }
    );

    console.log(res);
    console.log("test");
    //console.log("code " + res.code());
    //console.log("success " + res.success());

  //loginService.login().$promise.then(
  //    //success
  //    function( value ){
  //        //alert('success');
  //        console.log('value ' + value);
  //    },
  //    function( reason ){
  //       // alert('failure ' + error);
  //        reason.error();
  //        console.log('error ' + reason );
  //    }
  //)


});


