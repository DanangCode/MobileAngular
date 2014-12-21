/**
 * Created by jaspergregory on 12/20/14.
 */
angular.module('services.resources', [])
    .factory('loginService', function ($log, $resource) {

        return $resource('http://t001-005-001-02a.elasticbeanstalk.com/api',{},{
            login: {method:'POST'}
        });


    })
;



