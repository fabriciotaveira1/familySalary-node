const btnReports = document.getElementById("btnReports");
const btnElegibility = document.getElementById("btnElegibility");
const btnSignIn = document.getElementById("btnSignIn");
const btnBack = document.getElementById("btnBack");
const btnHamburguer = document.getElementById("btnHamburguer");
const btnSettings = document.getElementById("btnSettings");
const menuEmployer = document.getElementById("menuEmployer");
const menuSettings = document.getElementById("menuSettings");

btnHamburguer.addEventListener('click',()=>{
    if(menuEmployer.style.display === "none" || menuEmployer.style.display === ""){
        menuEmployer.style.display = "flex";
        menuSettings.style.display ="none";

    } else {
        menuEmployer.style.display ="none";
    }
    
})
btnSettings.addEventListener('click',()=>{
    if(menuSettings.style.display === "none" || menuSettings.style.display === ""){
        menuSettings.style.display = "flex";
        menuEmployer.style.display ="none";
    } else {
        menuSettings.style.display ="none";
    }
    
})