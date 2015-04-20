//create first controller and populare some date to have students to list
//calling the method on studentRoster app, creates a controller
//function holds the controller's logic
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
    $scope.students = [];
    $scope.addStudent = function() {
        //push the name entered into the list of students
        $scope.students.push({ name: $scope.studentName });
        $scope.studentName = null;
    };
    //pass in the student as an argument to the method
    $scope.deleteStudent = function(student) {
        var index = $scope.students.indexOf(student);
        $scope.students.splice(index,1);
    };
});
