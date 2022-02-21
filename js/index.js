let buttons = document.querySelectorAll(".buttonLang");
let buttonEn = document.querySelector("#en").addEventListener("click", nameEn);
let buttonEs = document.querySelector("#es").addEventListener("click", nameEs);
let buttonFr = document.querySelector("#fr").addEventListener("click", nameFr);
let buttonGa = document.querySelector("#ga").addEventListener("click", nameGa);

let buttonBackToLang = document.querySelector(".buttonBackToLang");
buttonBackToLang.addEventListener("click", backToLang);

let writeName = document.querySelector(".writeName");
writeName.addEventListener("submit", submitName);

function hideButtonsLang() {
    buttons.forEach((button) => {
        button.classList.add("hidden");
    });
    buttonBackToLang.classList.remove("hidden");
}

function showButtonsLang() {
    buttons.forEach((button) => {
        button.classList.remove("hidden");
    });
}

function backToLang() {
    showButtonsLang();
    writeName.classList.add("hidden");
    buttonBackToLang.classList.add("hidden");
}

function submitName(event) {
    event.preventDefault();
    let playerName = writeName.children[1].value;
    localStorage.setItem("playerName", playerName);
    let lang = sessionStorage.getItem("lang");
    window.location.href = `index${lang}.html`;
}

function nameEn() {
    hideButtonsLang();
    writeName.classList.remove("hidden");
    buttonBackToLang.classList.remove("hidden");
    buttonBackToLang.textContent = "Choose another language";
    writeName.children[0].textContent = "Write your name";
    writeName.children[2].textContent = "Start";
    sessionStorage.setItem("lang", "en");
}

function nameEs() {
    hideButtonsLang();
    writeName.classList.remove("hidden");
    buttonBackToLang.classList.remove("hidden");
    buttonBackToLang.textContent = "Escoge otro idioma";
    writeName.children[0].textContent = "Escribe tu nombre";
    writeName.children[2].textContent = "Iniciar";
    sessionStorage.setItem("lang", "es");
}

function nameFr() {
    hideButtonsLang();
    writeName.classList.remove("hidden");
    buttonBackToLang.classList.remove("hidden");
    buttonBackToLang.textContent = "Choisir une autre langue";
    writeName.children[0].textContent = "Écris ton prénom";
    writeName.children[2].textContent = "Commencer";
    sessionStorage.setItem("lang", "fr");
}

function nameGa() {
    hideButtonsLang();
    writeName.classList.remove("hidden");
    buttonBackToLang.classList.remove("hidden");
    buttonBackToLang.textContent = "Escolle outro idioma";
    writeName.children[0].textContent = "Escribe o teu nome";
    writeName.children[2].textContent = "Comezar";
    sessionStorage.setItem("lang", "ga");
}