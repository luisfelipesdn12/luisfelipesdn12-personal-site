import { USERNAME } from './constants.js';

export function getGithubLanguageSearchURL(language) {
    if (language == "C/C++") {
        return "https://github.com/luisfelipesdn12/Numeros-Primos";
    }
    return "https://github.com/search?l=" + language+ "&q=user%3A" + USERNAME;
}

export function hideClass(className) {
    const elements = document.getElementsByClassName(className);

    for (const element of elements) {
        element.classList.add("hidden");
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

export function addToProjectList(project) {
    const projectsList = document.getElementById("projects-list");

    const card = document.createElement("li");
    card.className = "project-card max-w-sm rounded overflow-hidden shadow mb-3";
    projectsList.appendChild(card);

    const cardLink = document.createElement("a");
    cardLink.href = project.href;
    cardLink.target = "_blank";
    card.appendChild(cardLink);

    const img = document.createElement("img");
    img.className = "w-full";
    img.src = project.image;
    cardLink.appendChild(img);

    const titleAndDescription = document.createElement("div");
    titleAndDescription.className = "px-6 py-4";
    cardLink.appendChild(titleAndDescription);

    const title = document.createElement("h1");
    title.className = "font-bold text-xl mb-2";
    title.innerHTML = project.name;
    titleAndDescription.appendChild(title);
    
    const description = document.createElement("p");
    description.className = "text-gray-700 text-base";
    description.innerHTML = project.description;
    titleAndDescription.appendChild(description);
}

export function addToCourseList(course) {
    const courseList = document.getElementById("courses-list");

    const card = document.createElement("li");
    card.className = "course-card max-w-sm rounded overflow-hidden shadow mb-3";
    courseList.appendChild(card);

    const cardLink = document.createElement("a");
    cardLink.href = course.href;
    cardLink.target = "_blank";
    card.appendChild(cardLink);

    const img = document.createElement("img");
    img.className = "w-full";
    img.src = course.image;
    cardLink.appendChild(img);

    const titleAndDescription = document.createElement("div");
    titleAndDescription.className = "px-6 py-4";
    cardLink.appendChild(titleAndDescription);

    const title = document.createElement("h1");
    title.className = "font-bold text-xl mb-2";
    title.innerHTML = course.name;
    titleAndDescription.appendChild(title);
    
    const description = document.createElement("p");
    description.className = "text-gray-700 text-base";
    description.innerHTML = course.description;
    titleAndDescription.appendChild(description);

    const divider =  document.createElement("hr");
    cardLink.appendChild(divider);

    const institutionAndHours = document.createElement("div");
    institutionAndHours.className = "flex justify-between px-6 py-4 text-blue-800 text-base";
    cardLink.appendChild(institutionAndHours);

    const institution = document.createElement("p");
    institution.innerHTML = course.institution;
    institutionAndHours.appendChild(institution);
    
    const hours = document.createElement("p");
    hours.innerHTML = `${course.hours} h`;
    institutionAndHours.appendChild(hours);
}

