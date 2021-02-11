
let contentP = document.querySelectorAll("#content > div p")

for(i=0;i < contentP.length;i++) {
    contentP[i].style.width = 6 + Math.floor(Math.random() * 24) + '%'
}

let sideContentP = document.querySelectorAll("#content section div p")

for(i=0;i < sideContentP.length;i++) {
    sideContentP[i].style.width = 10 + Math.floor(Math.random() * 60) + '%'
}

menuIsShown = true;

function togglePreviewMenu() {
    if(menuIsShown === true) {
        deviceMenu.style.marginTop = '-1.6rem'
        hideButton.style.transform = 'translateY(1.6rem)'
        hideButtonImg.style.transform = 'rotate(180deg)'

        menuIsShown = false;
    } else {
        deviceMenu.style.marginTop = '0'
        hideButton.style.transform = 'translateY(0)'
        hideButtonImg.style.transform = 'rotate(0)'

        menuIsShown = true;
    }
}

const deviceMenu = document.querySelector('#device_preview')
const hideButton = document.querySelector('#hide_preview_menu')
const hideButtonImg = document.querySelector('#hide_preview_menu img')

hide_preview_menu.addEventListener('click', togglePreviewMenu)