

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".navBar");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(navBar) {
        navBar.addEventListener("click", toggleMenu);
    }
)




let modalEle = document.querySelector(".modal");
let modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});

const list = document.querySelectorAll('.ImgThumbnail')
list.forEach(item =>{
    item.addEventListener('click', () =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})
