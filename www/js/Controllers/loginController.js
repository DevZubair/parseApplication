todoApp.controller('loginController',function($scope,login,$state){

    $scope.userName='';
    $scope.userPassword='';
    $scope.loginStatus=false;

    login.getAllUsers().success(function (data) {
        $scope.allUsers=data.results;
    });

    $scope.login= function () {

        for(var i=0;i<$scope.allUsers.length;i++)
        {
            if($scope.allUsers[i].username==$scope.userName && $scope.allUsers[i].password==$scope.userPassword)
            {
                $state.go('todos');
                $scope.loginStatus=true;

            }

        }
        if($scope.loginStatus==false){
            alert('Username and Password do not match!');
        }




    }

});