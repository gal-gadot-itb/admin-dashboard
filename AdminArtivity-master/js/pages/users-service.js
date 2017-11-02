app.factory('UsersService', function($http, $q) {
    var factory = {};
    var endPoint = "https://artivity-7e3c4.firebaseio.com/users.json?auth=Dobv2jeMK3d6Zwe3NGdcMeYIvQH0eucYr7XUnhpR";
    
    factory.getUsers = function() {
        var deferred = $q.defer();

        $http({
            method: 'GET',
            url: endPoint
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });

        return deferred.promise;
    }

    return factory;
});
