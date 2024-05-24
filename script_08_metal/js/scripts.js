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

for (j = 0; j < anchor.length; j++) {
  anchor[j].addEventListener("click", function() {
        /* Toggle between hiding and showing the active panel */
      var panel = document.getElementById("headerPanel");
      panel.style.display = "none";
    });
}



