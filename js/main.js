import * as utils from './utils.js';
import * as content from './content.js';

const idiomSelect = document.getElementById("idiom-select");
let idiom;

document.body.onload = idiomSelect.onchange = function() {
    idiom = idiomSelect.value;
    fillPage();
};

function fillHeroSection() {
    const greeting = document.getElementById("hero-greeting");
    greeting.innerHTML = content.HERO[idiom].greeting;
    
    const sentence = document.getElementById("hero-sentence");
    sentence.innerHTML = content.HERO[idiom].sentence;
}

function fillLanguagesSection() {
    // Remove existing cards
    // (Else when the idiom changes, the existing
    // cards of the previous idiom would keep there)
    const languageCards = document.getElementsByClassName("language-card");

    for (const card of languageCards) {
        card.classList.add("hidden");
    }

    // Define title
    const languagesTitle = document.getElementById("languages-title");
    languagesTitle.innerHTML = content.LANGUAGES[idiom].title;

    // Define description
    const languagesDescription = document.getElementById("languages-description");
    languagesDescription.innerHTML = content.LANGUAGES[idiom].description;

    // Insert cards
    for (const language of content.LANGUAGES[idiom].unorderedList) {
        utils.addToLanguagesList(language);
    }

    // Hide mock cards
    utils.hideMockInLanguagesList();
}

function fillPage() {
    fillHeroSection();
    fillLanguagesSection();
}
