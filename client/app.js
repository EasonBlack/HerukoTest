import 'angular';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', function ($scope,$http) {
        $scope.message = 'xxxd fd fdf';

        $scope.add = ()=> {
            $http.post('/add',{text: $scope.content}, function(err, res){
               console.log(res);
            });
        }

    }]);
