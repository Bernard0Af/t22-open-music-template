import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDataBase.js";

function routine() {
    applyInputRangeStyle()
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
    });
}

renderCard(albumList);
