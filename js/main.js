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
    utils.hideClass("language-card");

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
    utils.hideClass("mock-language-card");
}

function fillProjectsSection() {
    // Remove existing cards
    // (Else when the idiom changes, the existing
    // cards of the previous idiom would keep there)
    utils.hideClass("project-card");

    // Define title
    const projectsTitle = document.getElementById("projects-title");
    projectsTitle.innerHTML = content.PROJECTS[idiom].title;

    // Define description
    const projectsDescription = document.getElementById("projects-description");
    projectsDescription.innerHTML = content.PROJECTS[idiom].description;

    // Insert cards
    for (const project of content.PROJECTS[idiom].unorderedList) {
        utils.addToProjectList(project);
    }

    // Hide mock cards
    utils.hideClass("mock-project-card");
}

function fillPage() {
    fillHeroSection();
    fillLanguagesSection();
    fillProjectsSection();
}
