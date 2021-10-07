"use strict"

// Variabler
let coursesEl = document.getElementById("courses");
let addButton = document.getElementById("addCourse");
let codeInput = document.getElementById("code");
let nameInput = document.getElementById("name");
let progInput = document.getElementById("prog");
let syllabusInput = document.getElementById("syllabus");

// Händelsehanterare
window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse);

// Funktioner

// Funktion för att hämta kurser från API
function getCourses() {
    // Återställer vid laddning av sidan
    coursesEl.innerHTML = "";

    fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(course=> {
            // Utskrift till DOM
            coursesEl.innerHTML += 
            `<li>
                <span>${course.code}</span>
                <span>${course.name}</span>
                <span>${course.prog}</span>
                <span>${course.syllabus}</span>
                <button id="${course.id}" onClick="deleteCourse(${course.id})">Radera</button>
            </li>`
        })
    })
}

// Funktion för att ta bort kurser
function deleteCourse(id) {
    fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php?id=' + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        getCourses();
    })
    .catch(error => {
        console.log('Error: ', error);
    })
}


// Funktion för att lägga till kurser
function addCourse() {
    // Deklarerar värden från formulär till variabler
    let code = codeInput.value;
    let name = nameInput.value;
    let prog = progInput.value;
    let syllabus = syllabusInput.value;

    let course = {'code': code, 'name': name, 'prog': prog, 'syllabus': syllabus};

    fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php', {
        method: 'POST',
        body: JSON.stringify(course),
    })
    .then(response => response.json())
    .then(data => {
        getCourses();
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}