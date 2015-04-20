//create first controller and populare some date to have students to list
//calling the method on studentRoster app, creates a controller
//function holds the controller's logic
bestRestaurant.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
    $scope.restaurants = [];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({ name: $scope.restName, type: $scope.restType, location: $scope.restLocation, price: $scope.restPrice });
        $scope.restName = null;
        $scope.restType = null;
        $scope.restLocation = null;
        $scope.restPrice = null;
    };
    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index,1);
    };



});
