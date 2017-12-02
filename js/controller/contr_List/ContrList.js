(function(){
    
const app = angular.module('ContrList', ['dbService']);

// controler do pobrania calej listy TODO
app.controller('ContrList', ['$scope', 'dbList', function ($scope, dbList) {
    
        $scope.lists = {};
        dbList.getList((res) => {
            $scope.lists = res.data;
    
        })
        console.log("wynik ContrList " + $scope.lists);
    }])

})();