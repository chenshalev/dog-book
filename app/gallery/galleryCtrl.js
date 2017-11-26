
dogsApp.controller("galleryCtrl", function ($scope, $log, $http, $location) {
    $scope.test = "ewewew";
    // http call to get data 
    $scope.breeds=[];
    $http.get("https://dog.ceo/api/breeds/list").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.breeds=response.data.message;
    }

        for (var index = 0; index < response.data.message.length; index++) {
            var element = array[index];
            $scope.breeds[index]=element
            
        }
        $scope.breeds = response.data;
        alert(JSON.stringify(response.data));
        ;
    }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
    });






})
