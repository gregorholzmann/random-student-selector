var students = [
    {
        name: 'Kyle B.'
    },
    {
        name: 'Dana G.'
    },
    {
        name: 'Tricia L.'
    },
    {
        name: 'Jonathan N.'
    },
    {
        name: 'Matt P.'
    },
    {
        name: 'Stefan P.'
    },
    {
        name: 'Brad S.'
    },
    {
        name: 'James W.'
    }
]

var studentsClone = students.slice();

function selectStudent() {
    var selectedStudent = document.getElementById('selectedStudent');
    if (studentsClone.length <= 0) {
        selectedStudent.textContent = 'That\'s everyone! Let\'s start over!';
		studentsClone = students.slice();
    } else {
        var randIndex = Math.floor(Math.random() * studentsClone.length);
        var rand = studentsClone[randIndex];
        studentsClone.splice(randIndex, 1);
        selectedStudent.textContent = 'Selecting human sacrifice...';
        setTimeout(function() {selectedStudent.textContent = rand.name;}, 1000);
    }
}
