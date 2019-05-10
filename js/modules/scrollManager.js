class ScrollManager {
    constructor() {
        this.selectors = {
            window: window,
            header: "header",
            menu: "menu",
            trigger: "data-scroll-to",
            target: "data-scroll-target"
        }

        this.$DOM = {
            window: $(this.selectors.window),
            header: $(`.${this.selectors.header}`),
            menu: $(`.${this.selectors.menu}`),
            trigger: $(`[${this.selectors.trigger}]`),
            target: $(`[${this.selectors.target}]`)
        }

        this.$DOM.trigger.click(this.scroll);
    }

    scroll = e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr("data-scroll-to");
        const $target = $(`[data-scroll-target="${target}"]`);
        $.scrollTo($target, 500, {
            offset: {
                top: -this.$DOM.header.innerHeight() + 40
            }
        });
        if (this.$DOM.window.width() < 768) {
            this.$DOM.menu.removeClass(`${this.selectors.menu}--active`);
        }
    }
}