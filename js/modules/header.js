class Header {
    constructor() {
        this.selectors = {
            headerMain: "header__main",
            btn: "menu-trigger",
            menu: "menu",
            menuItem: "menu__item, .menu .btn"
        }

        this.$DOM = {
            headerMain: $(`.${this.selectors.headerMain}`),
            btn: $(`[${this.selectors.btn}]`),
            menu: $(`.${this.selectors.menu}`),
            menuItem: $(`.${this.selectors.menuItem}`)
        }

        this.$DOM.headerMain.scrollToFixed({
            zIndex: 2
        });

        this.$DOM.btn.click(this.toggleMenu);
        this.$DOM.menuItem.click(this.toggleMenu);
    }

    toggleMenu = () => {
        this.$DOM.menu.toggleClass(`${this.selectors.menu}--active`);
    }
}