todoApp.controller('signupController',function($scope,login,$state){

    $scope.newUserName='';
    $scope.newPassword='';
    $scope.newPasswordMatch='';

    $scope.signupUser= function () {
        if($scope.newPassword==$scope.newPasswordMatch){
            if($scope.newUserName!='')
            {
                login.createUser({username:$scope.newUserName,password:$scope.newPassword}).success(function (data) {

                    $state.go('todos');
                })
            }
            else{
                alert('UserName field can not be empty');
            }
        }
        else{
            alert('Password Do not Match!');
        }
    }

});