/*$(function() {
	$("body").css("background","blue");
});

var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="test123";
*/



var link = document.getElementsByClassName("ic-DashboardCard__link")[0];
link.href = "https://courses.hol.asu.edu/courses/beatles/";

var Title = document.getElementsByClassName("ic-DashboardCard__header-title ellipsis")[0];
Title.removeChild(Title.childNodes[0]);

var newTitle = document.createElement("span"); 
Title.appendChild(newTitle); 
newTitle.innerText="MUS 354: The Beatles";
newTitle.style.color = "rgb(60, 79, 54)";

var Semester = document.getElementsByClassName("ic-DashboardCard__header-subtitle ellipsis")[0];
var Semester2 = document.getElementsByClassName("ic-DashboardCard__header-term ellipsis")[0];


var newSemester = document.createElement("div"); 
Semester.parentElement.appendChild(newSemester); 
newSemester.innerText="2020 Spring";
newSemester.style.color = "#6C757C";

Semester.parentElement.removeChild(Semester);
Semester2.parentElement.removeChild(Semester2);






