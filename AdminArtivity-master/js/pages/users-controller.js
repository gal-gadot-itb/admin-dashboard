app.controller('UsersController', function($scope, UsersService) {
    $scope.users = [];

    var getUsers = function() {
        UsersService.getUsers()
        .then(function(response) {
            $scope.users = response;
            console.log($scope.users);
        })
        .catch(function(err) {
            alert(err.message);
        });
    }

    getUsers();
});