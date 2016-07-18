//import 'angular';

angular.module('app', [])
    .controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.message = 'xxxd fd ddfdfd fdf';

        $http.get('/getitems')
            .then((res) => {
                $scope.items = res.data;
            })


        $scope.add = ()=> {
            $http.post('/additem', {text: $scope.content})
                .then((res)=> {
                    console.log(res);
                })
        }

    }])
;
