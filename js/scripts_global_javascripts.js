// script taken from w3schools
// https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 



// script to hide content active content panel in the header, 
// when a chapter/topic is choosen
 
var anchor = document.getElementsByClassName("hrefContent");
var j;
var panel = document.getElementById("headerPanel");

for (j = 0; j < anchor.length; j++) {
  anchor[j].addEventListener("click", function() {
        /* Toggle between hiding and showing the active panel */
      panel.style.display = "none";
    });
}

// script do toggle between dark and light mode
// starting with Bootstrap 5.3 (Feb 2023)

var htmlElement = document.getElementsByTagName("html")[0];
var currentTheme;

document.getElementById("switchDL").addEventListener("click", function() {
  currentTheme = htmlElement.getAttribute('data-bs-theme');
  if (currentTheme === 'dark' ) {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    document.getElementById("switchDL").style.filter = "invert(100)"
    panel.style.display = "none";
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    document.getElementById("switchDL").style.filter = "invert(0)"
    panel.style.display = "none";
  }
});
