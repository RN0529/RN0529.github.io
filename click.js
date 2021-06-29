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
    elmntToView = document.getElementById("about");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
function upbtnonclick(){
    elmntToView = document.getElementById("home");
    elmntToView.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("navbar").style.width = "15%";
    document.getElementById("body").style.paddingLeft = "15%";

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("navbar").style.width = "0px";
    document.getElementById("body").style.paddingLeft = "0px";
    document.getElementById("navbar").style.paddingLeft = "0px";
  }