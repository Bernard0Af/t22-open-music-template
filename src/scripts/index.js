import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDataBase.js";
import { dark } from "./theme.js";


function routine() {
    applyInputRangeStyle()
    renderCard(albumList);
    dark();
    inputValue();  
    filterEvents()
}

routine()

function createCard(card) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");

    const albumInfo = document.createElement("div");
    const albumTitle = document.createElement("h4");
    const genre = document.createElement("h4");

    const albumBuy = document.createElement("div");
    const albumValue = document.createElement("h4");
    const button = document.createElement("button");

    li.classList.add("album_card");
    img.classList.add("album_card--img");
    p.classList.add("album_card--paragraph");

    albumInfo.classList.add("album_card--info");

    albumBuy.classList.add("album_card--buy");
    albumValue.classList.add("album_card--value");
    button.classList.add("album_card--button");
    genre.classList.add("album_card-genre");

    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(albumInfo);
    li.appendChild(albumBuy);

    albumInfo.appendChild(albumTitle);
    albumInfo.appendChild(genre);

    albumBuy.appendChild(albumValue);
    albumBuy.appendChild(button);

    p.innerText = card.title;
    img.src = card.img
    albumTitle.innerText = card.band;
    genre.innerText = card.genre;
    albumValue.innerText = `R$ ${card.price}`;
    button.innerText = "Comprar"

    return li
}

function renderCard(albumList) {
    const ul = document.querySelector("ul");
    
    ul.innerText = ""

    albumList.forEach(card => {
        ul.append(createCard(card))
    })      
}

function inputValue() {
    const input = document.querySelector(".section_filter--input");
    const h3 = document.querySelector(".section_filter--color");
  
    input.addEventListener("input", (e) => {
        const inputValue = e.target.value;
        h3.innerHTML = `R$ ${inputValue}`;
    })
    
  }

function filterEvents() {
    const input = document.querySelector(".section_filter--input");
    const buttons = document.querySelectorAll(".type_gender--button");
    
    let filterGenre = "Todos";
    let filterPrice = Number(input.value);
    
    input.addEventListener("input", ()=> {
        filterPrice = Number(input.value)
        const albumFilter = filter(albumList, filterGenre, filterPrice);
        renderCard(albumFilter)
    })

    buttons.forEach((btn) => 
        btn.addEventListener("click", (event) => {
            filterGenre = event.target.innerText;
            const albumFilter = filter(albumList, filterGenre, filterPrice);
            renderCard(albumFilter)
        })
    )
}

function filter(albumList, filterGenre = "Todos", filterPrice) {
    return albumList.filter(
        (album) =>
          (album.genre === filterGenre || filterGenre === "Todos") &&
          album.price <= filterPrice
      );
}














