//create first controller and populare some date to have students to list
//calling the method on studentRoster app, creates a controller
//function holds the controller's logic
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [
        { name: "Sam Schmidt" },
        { name: "Jessica Martin"},
        { name: "Sandy Smith" },
        { name: "Ryan Samuels"},
        { name: "Brentwood Davis"}

    ]
});
