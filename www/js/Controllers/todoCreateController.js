todoApp.controller('TodoCreationController',['$scope','Todo','$state',function($scope,Todo,$state){

    $scope.todo={};

    $scope.create=function(){
        Todo.create({content:$scope.todo.content}).success(function(data){
            $state.go('todos');
        });
    }


}]);
