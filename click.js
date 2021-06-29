
var elmntToView;
function homeOnClick(){
    elmntToView = document.getElementById("home");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function projectsOnClick(){
    elmntToView = document.getElementById("projects2");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function contactOnClick(){
    elmntToView = document.getElementById("bottom");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function aboutOnClick(){
    elmntToView = document.getElementById("projects1");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function upbtnonclick(){
    elmntToView = document.getElementById("home");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("navbar").style.width = "250px";
    document.getElementById("body").style.paddingLeft = "250px";

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navbar").style.width = "0px";
    document.getElementById("body").style.paddingLeft = "0px";
  }