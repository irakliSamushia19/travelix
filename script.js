var navbar = document.querySelector(".navjs")

window.addEventListener("scroll", function(){
    console.log("lasha123")
    if(window.scrollY > 50) {
        navbar.style.height = "90px"  
    }else{
        navbar.style.height = "130px"
    }
} )

