(function() {
    angular.module('thank.controllers.signupCtrl', [])
        .controller('signupCtrl', ['$scope','$rootScope','$timeout','$stateParams','$ionicHistory','$state','todoService','loginService',SignupCtrl]);

function SignupCtrl($scope,$rootScope,$timeout,$stateParams,$ionicHistory,$state,todoService,loginService) {
    //login 
    $scope.signupData = {};


    // Perform the login action when the user submits the login form
    $scope.doSignUp = function() {
    
        loginService.signUp($scope.signupData).then(function SUCCESS(resp){

            $rootScope.currentUser=resp.data;
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go($rootScope.default_page, {}, {location:'replace'});
        },function(resp) {
            $scope.lastError=resp.data.errorMsg;
        });
    
    };// do signUp
/*
    $scope.goBack=function() {
        $state.go("login");
    }*/
}//SignUpCtrl

})();



