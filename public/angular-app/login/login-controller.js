angular.module('meanhotel').controller('LoginController', LoginController);

function LoginController($http, $location, $window, AuthFactory, jwtHelper) {

    var vm = this;


    var isLoggedIn = function() {
        if (AuthFactory.isLoggedIn) {
            return true;
        } else {
            return false;
        }
    };


    vm.login = function () {
        if (vm.username && vm.password) {
            var user = {
                username: vm.username,
                password: vm.password
            };

            $http.post('/api/users/login', user).then(function(response) {
                console.log(response);
                if(response.data.success) {
                    $window.sessionStorage.token = response.data.token;
                    AuthFactory.isLoggedIn = true;
                    var token = $window.sessionStorage.token;
                    var decodedToken = jwtHelper.decodeToken(token);
                    vm.loggedInUser = decodedToken.username;

                    console.log("Function isLoggedIn value is: " +isLoggedIn());
                    console.log("Logged in user name is : "+ vm.loggedInUser);
                }
            }).catch(function(error) {
                console.log(error);
            });
        }
    }

    vm.logout = function () {
        AuthFactory.isLoggedIn = false;
        console.log("Function isLoggedIn value is: " +isLoggedIn());
        console.log("isLoggedIn value is: " +AuthFactory.isLoggedIn);
        delete $window.sessionStorage.token;
        $location.path('/');
    }

    vm.isActiveTab = function (url) {
        var currentPath = $location.path().split('/')[1];
        return (url === currentPath ? 'active' : '');
    }
}