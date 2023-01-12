const iconMenu = document.querySelector(".nav_mobile")
const menu = document.querySelector(".menu_desktop")

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("active")
})

const contentMenu = document.querySelectorAll("#content_menu ul li" )
for (const li of contentMenu) { 
    li.addEventListener("click", function(){
        menu.classList.toggle("active")
    })
    
}