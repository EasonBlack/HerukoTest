import 'angular';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', function ($scope,$http) {
        $scope.message = 'xxxd fd fdf';

        $http.get('/getitems', function(err, res){
            console.log(res);
            $scope.items = res;
        });

        $scope.add = ()=> {
            console.log($scope.content);
            $http.post('/add',{text: $scope.content}, function(err, res){
                console.log(res);
            });
        }

    }]);
