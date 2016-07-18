//import 'angular';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'xxxd fd ddfdfd fdf';

        $http.get('/getitems')
            .then((res) => {
                $scope.items = res.data;
            })


        $scope.add = ()=> {
            console.log($scope.content);
            $http.post('/add', {text: $scope.content}, function (res) {
                console.log(res);
            });
        }

    }])
;
