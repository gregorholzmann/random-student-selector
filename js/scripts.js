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

var rand = students[Math.floor(Math.random() * students.length)];
var selectedStudent = document.getElementById('selectedStudent');
setTimeout(function() {selectedStudent.textContent = rand.name;}, 1000);
