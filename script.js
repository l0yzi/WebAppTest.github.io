// screens
let mainScreen = document.getElementById('main_screen')
let storageScreen = document.getElementById('storage_screen')
let preloaderScreen = document.getElementById('preloader')
// Кнопки
let btnStorage = document.getElementById('storage_btn')



function getStorage () {
    mainScreen.classList.remove('visible_main_screen')
    mainScreen.classList.add('hide')
    storageScreen.classList.remove('hide')
    storageScreen.classList.add('visible_storage_screen')
}




function preloaderLoad() {
    setTimeout(function() {
        window.location.href = "main.html";
        preloaderScreen.classList.remove('visible_preloader')
        preloaderScreen.classList.add('hide')
    }, 4000); 
}

if(preloaderScreen.classList.contains('visible_preloader')){
    window.onload = preloaderLoad;
}