/*
Author: Dartanian Mills
Description: This script runs when on the Canvas Dashboard page. This script Changes the first Class Card to link to a new URL and have a new Title and Semester. To customize the new Class find each comment that says "Edit".
*/

//Finds and changes the link
var link = document.getElementsByClassName("ic-DashboardCard__link")[0];
link.href = "https://courses.hol.asu.edu/courses/beatles/"; //Edit link to external website

//Removes the original Title
var Title = document.getElementsByClassName("ic-DashboardCard__header-title ellipsis")[0];
Title.removeChild(Title.childNodes[0]);

//Creates a new Title in the original location
var newTitle = document.createElement("span"); 
Title.appendChild(newTitle); 
newTitle.innerText="MUS 354: The Beatles"; //Edit Title to new Class
newTitle.style.color = "rgb(60, 79, 54)"; //Edit Titles Color

//Locates the two subheaders for semesters
var Semester = document.getElementsByClassName("ic-DashboardCard__header-subtitle ellipsis")[0];
var Semester2 = document.getElementsByClassName("ic-DashboardCard__header-term ellipsis")[0];

//Creates a new subheader for the semester underneath the two previous subheaders
var newSemester = document.createElement("div"); 
Semester.parentElement.appendChild(newSemester); 
newSemester.innerText="2020 Spring"; //Edit Class Semester 
newSemester.style.color = "#6C757C";//Default Color for subheaders

//Removes the original two subheaders
Semester.parentElement.removeChild(Semester);
Semester2.parentElement.removeChild(Semester2);






