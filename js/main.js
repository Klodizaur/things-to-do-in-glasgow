/* Collapsible navigation for mobile devices */

/* Get navigation icon and menu list from HTML document */
var navMenu = document.getElementById('navbar-menu');
var navToggle = document.getElementById('navbar-toggle');

/* Function which will toggle class .active which is responsible for displaying the navigation */
function naviToggle() {
  
    navMenu.classList.toggle('active');
    /*console.log(navMenu.classList);*/

}

/* Event listener - the function works when the user clicks the navigation icon */
navToggle.addEventListener('click', naviToggle);