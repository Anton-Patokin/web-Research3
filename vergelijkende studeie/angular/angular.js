angular.module("myapp", []).controller("GrideController", function ($scope, $http) {

    $scope.list ={};
    $scope.list["0"] = {"name": "anton"};
    $scope.show_items=false;
    $scope.watch= 'list["0"]';

console.log($scope.list);

    $scope.add_to_the_list = function (min, max, step) {
        $scope.show_items=true;
        for (var i = 1; i < 5001; i++) {
            $scope.list[i] = {"name": i};
            console.log("add iems");
        }
    };
    $scope.chang_watcher = function (item_to_watch) {
        console.log(item_to_watch);
    };

});