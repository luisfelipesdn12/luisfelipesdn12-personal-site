import { USERNAME } from './constants.js';

export function getGithubLanguageSearchURL(language) {
    if (language == "C/C++") {
        return "https://github.com/luisfelipesdn12/Numeros-Primos";
    }
    return "https://github.com/search?l=" + language+ "&q=user%3A" + USERNAME;
}

export function hideMockInLanguagesList() {
    const mockCards = document.getElementsByClassName("mock-language-card");

    for (const mockCard of mockCards) {
        mockCard.classList.add("hidden");
    }
}

export function addToLanguagesList(language) {
    const languagesList = document.getElementById("languages-list");

    const card = document.createElement("li");
    card.className = "language-card rounded bg-indigo-100 bg-opacity-0 overflow-hidden shadow p-3 mb-3 md:w-1/2";
    card.style = "margin-right: -5px; margin-left: -5px;";
    languagesList.appendChild(card);

    const cardLink = document.createElement("a");
    cardLink.href = getGithubLanguageSearchURL(language.name);
    cardLink.target = "_blank";
    card.appendChild(cardLink);

    const imageAndName = document.createElement("div");
    imageAndName.className = "flex";
    cardLink.appendChild(imageAndName);

    const image = document.createElement("img");
    image.src = language.image;
    image.className = "rounded-full w-10 mr-6 mb-3 shadow p-1";
    imageAndName.appendChild(image);

    const name = document.createElement("p");
    name.innerHTML = language.name;
    name.className = "text-gray-700 font-semibold";
    imageAndName.appendChild(name);

    const iDoWith = document.createElement("p");
    iDoWith.innerHTML = language.iDoWith;
    iDoWith.className = "text-gray-700";
    cardLink.appendChild(iDoWith);
}
