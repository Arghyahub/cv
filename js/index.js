let strArr = ["Developer","Student","Engineer"] ;
let i=0;
document.addEventListener("DOMContentLoaded",()=>{
    setInterval(() => {
        document.getElementById("homeDev").innerText = strArr[i] ;
        i++;
        if (i>=3){
            i=0;
        }
    }, 500);
})

function changeColor() {
    var nav = document.getElementById("navbar") ;
    var scrollVal = window.scrollY;
    if (scrollVal>=130){
        nav.classList.add("whiteBg") ;
    }
    else{
        nav.classList.remove("whiteBg") ;
    }
}

window.addEventListener("scroll",changeColor) ;


const projects = document.querySelectorAll(".projectBox") ;

projects.forEach(divBox => {
    const data = divBox.querySelector("a") ;
    divBox.addEventListener("click", () => {
        data.click() ;
    })
});
