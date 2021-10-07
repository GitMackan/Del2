"use strict"; // Variabler

var coursesEl = document.getElementById("courses");
var addButton = document.getElementById("addCourse");
var codeInput = document.getElementById("code");
var nameInput = document.getElementById("name");
var progInput = document.getElementById("prog");
var syllabusInput = document.getElementById("syllabus"); // Händelsehanterare

window.addEventListener('load', getCourses);
addButton.addEventListener('click', addCourse); // Funktioner
// Funktion för att hämta kurser från API

function getCourses() {
  // Återställer vid laddning av sidan
  coursesEl.innerHTML = "";
  fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (course) {
      // Utskrift till DOM
      coursesEl.innerHTML += "<li>\n                <span>".concat(course.code, "</span>\n                <span>").concat(course.name, "</span>\n                <span>").concat(course.prog, "</span>\n                <span><a href=\"").concat(course.syllabus, "\" target=\"_blank\">L\xE4nk</a></span>\n                <button id=\"").concat(course.id, "\" onClick=\"deleteCourse(").concat(course.id, ")\">Radera</button>\n            </li>");
    });
  });
} // Funktion för att ta bort kurser


function deleteCourse(id) {
  fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php?id=' + id, {
    method: 'DELETE'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    getCourses();
  })["catch"](function (error) {
    console.log('Error: ', error);
  });
} // Funktion för att lägga till kurser


function addCourse() {
  // Deklarerar värden från formulär till variabler
  var code = codeInput.value;
  var name = nameInput.value;
  var prog = progInput.value;
  var syllabus = syllabusInput.value;
  var course = {
    'code': code,
    'name': name,
    'prog': prog,
    'syllabus': syllabus
  };
  fetch('https://studenter.miun.se/~many2005/dt173g/moment5/api.php', {
    method: 'POST',
    body: JSON.stringify(course)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    getCourses();
  })["catch"](function (error) {
    console.log('Error: ', error);
  });
}