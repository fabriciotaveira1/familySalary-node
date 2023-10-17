const btnReports = document.getElementById("btnReports");
const btnElegibility = document.getElementById("btnElegibility");
const btnSignIn = document.getElementById("btnSignIn");
const btnBack = document.getElementById("btnBack");
const btnHamburguer = document.getElementById("btnHamburguer");
const btnSettings = document.getElementById("btnBack");
const menuEmployer = document.getElementById("menuEmployer");


btnHamburguer.addEventListener('click',()=>{
    if(menuEmployer.style.display === "none" || menuEmployer.style.display === ""){
        menuEmployer.style.display = "flex";
    } else {
        menuEmployer.style.display ="none";
    }
    
})