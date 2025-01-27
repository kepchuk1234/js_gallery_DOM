"use strict";
const gallery = document.querySelector(".gallery");
const mainPicture = gallery.querySelector("#largeImg");
const buttons = [
    ...gallery.querySelectorAll(".list-item")
];
for (const button of buttons)button.addEventListener("click", onClick);
function onClick(eventObject) {
    eventObject.preventDefault();
    const buttonSrc = this.querySelector(".list-item__link").getAttribute("href");
    mainPicture.setAttribute("src", buttonSrc);
}

//# sourceMappingURL=index.f75de5e1.js.map
