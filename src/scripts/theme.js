export function dark() {
    if(JSON.parse(localStorage.getItem("@openMusic:theme"))){
        themeChange()
    }

    const button = document.querySelector(".header_button");
    button.addEventListener("click", themeChange)
    selectedGenre()
}

var darkMode = false;

function themeChange() {
    const darkModeClass = "dark_mode"
    const cards = document.querySelectorAll(".album_card");
    const img = document.querySelector(".header_button-img");
    const header = document.querySelector(".header_container");
    const button = document.querySelector(".header_button");

    document.body.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass)
    cards.forEach((card) => {
        card.classList.toggle(darkModeClass)
    });

    if(darkMode == false){
        img.src = "src/assets/icons/sun-icon.svg";

    }else if(darkMode == true){
        img.src = "src/assets/icons/moon-icon.svg"
    }

    darkMode = !darkMode;
    localStorage.setItem("@openMusic:theme", JSON.stringify(darkMode));
    darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));

}

function deselectGenres() {
    const buttonsSelected = [...document.querySelectorAll(".selected")];
    buttonsSelected.map((btn) => {
        btn.classList.remove("selected")
    })
}

export function selectedGenre() {
    const buttons = document.querySelectorAll(".type_gender--button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            deselectGenres()
            btn.classList.toggle("selected")
        })
    })
}

