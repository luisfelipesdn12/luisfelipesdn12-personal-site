import { USERNAME, HERO, LANGUAGES } from './constants.js';

export function getGithubLanguageSearchURL(language) {
    if (language == "C/C++") {
        return "https://github.com/luisfelipesdn12/Numeros-Primos";
    }
    return "https://github.com/search?l=" + language+ "&q=user%3A" + USERNAME;
}

export function addToLanguagesList(language) {
    const languagesList = document.getElementById("languages-list");

    const card = document.createElement("li");
    card.className = "rounded bg-indigo-100 bg-opacity-0 overflow-hidden shadow p-3 mb-3 md:w-1/2";
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

export function hideMockInLanguagesList() {
    const mockCards = document.getElementsByClassName("mock-language-card");

    for (const mockCard of mockCards) {
        mockCard.classList.add("hidden");
    }
}

export function fillLanguageHead() {
    const languagesTitle = document.getElementById("languages-title");
    const mockLanguagesTitle = document.getElementById("mock-languages-title");
    languagesTitle.innerHTML = LANGUAGES.title;
    languagesTitle.classList.remove("hidden");
    mockLanguagesTitle.classList.add("hidden");

    const languagesDescription = document.getElementById("languages-description");
    const mockLanguagesDescription = document.getElementById("mock-languages-description");
    languagesDescription.innerHTML = LANGUAGES.description;
    languagesDescription.classList.remove("hidden");
    mockLanguagesDescription.classList.add("hidden");
}


export function fillLanguageList() {
    for (const language of LANGUAGES.unorderedList) {
        addToLanguagesList(language);
    }

    setInterval(hideMockInLanguagesList, 100);
}

export function fillHeroSection() {
    const greeting = document.getElementById("hero-greeting");
    const mockGreeting = document.getElementById("mock-hero-greeting");
    greeting.innerHTML = HERO.greeting;
    mockGreeting.classList.add("hidden");
    greeting.classList.remove("hidden");
    
    const sentence = document.getElementById("hero-sentence");
    const mockSentence = document.getElementById("mock-hero-sentence");
    sentence.innerHTML = HERO.sentence;
    mockSentence.classList.add("hidden");
    sentence.classList.remove("hidden");
}


export function fillLanguageSection() {
    fillLanguageHead();
    fillLanguageList();
}
