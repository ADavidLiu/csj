//@prepros-prepend "./modules/header.js";
//@prepros-prepend "./modules/hero.js";
//@prepros-prepend "./modules/popupManager.js";
//@prepros-prepend "./modules/scrollManager.js";
//@prepros-prepend "./modules/formsManager.js";

$(document).ready(() => {
    
    const header = new Header();
    const hero = new Hero();
    const popupManager = new PopupManager();
    const scrollManager = new ScrollManager();
    const formsManager = new FormsManager();

    new WOW().init();
});