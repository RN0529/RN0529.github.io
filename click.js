var parts = document.querySelectorAll('section');
var navBtns = document.querySelectorAll('nav div .navbtn');
console.log(parts);
console.log(navBtns);
window.addEventListener('scroll',()=>{
    let current ='';
    
    parts.forEach( section=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop -sectionHeight/3){
            current = section.getAttribute('id');
        }
        
    })
    console.log(current)
    navBtns.forEach(button =>{
        button.classList.remove('active');
        if(button.classList.contains(current)){
            button.classList.add('active');
        }

    })
})






var elmntToView;
function homeOnClick(){
    elmntToView = document.getElementById("home");
    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "0%";
    }
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    
}
function projectsOnClick(){
    elmntToView = document.getElementById("projects2");

    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "0%";
    }
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function contactOnClick(){
    elmntToView = document.getElementById("bottom");
    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "0%";
    }
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function aboutOnClick(){
    elmntToView = document.getElementById("about");
    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "0%";
    }
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function upbtnonclick(){
    elmntToView = document.getElementById("home");
    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "0%";
    }
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


function openNav() {
    if(window.screen.width < 1000){
      document.getElementById("navbar").style.width = "100%";
      document.getElementById("navbar").style.height = "100%";
      document.getElementById("buttonsHome").style.flexDirection = "column"; 
      document.getElementById("buttonsHome").style.height = "100%"; 
    }

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navbar").style.width = "0px";
  }

  function closeDivOnClick() {
    document.getElementById("holoenexpand").style.display = "none";
    closeNav();
  }
  function closeDivOnClick2(){
      document.getElementById("EsportsLookoutDiv").style.display = "none";
    closeNav();
  }
  function closeDivOnClick3(){
    document.getElementById("todoListDiv").style.display = "none";
  closeNav();
}
function closeDivOnClick4(){
  document.getElementById("LightandSound").style.display = "none";
closeNav();
}
function closeDivOnClick5(){
  document.getElementById("wasteland2Div").style.display = "none";
closeNav();
}

  function holoEnOnclick() {
    document.getElementById("holoenexpand").style.display = "flex";
    closeNav();
  }
  function esportsLookoutClick() {
    document.getElementById("EsportsLookoutDiv").style.display = "flex";
    closeNav();
  }
  
  function todoOnClick() {
    document.getElementById("todoListDiv").style.display = "flex";
    closeNav();
  }

  
  function LightAndSoundOnClick() {
    document.getElementById("LightandSound").style.display = "flex";
    closeNav();
  }
  function wasteland2OnClick(){
    
    document.getElementById("wasteland2Div").style.display = "flex";
    closeNav();
  }