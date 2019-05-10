class Hero {
    constructor() {
        this.selectors = {
            btnTrigger: "hero__btn-hover-trigger",
            message: "hero__btn-hover-message"
        }

        this.$DOM = {
            btnTrigger: $(`.${this.selectors.btnTrigger}`),
            message: $(`.${this.selectors.message}`)
        }

        this.$DOM.btnTrigger.hover(() => {
            this.$DOM.message.addClass(`${this.selectors.message}--active`);
        }, () => {
            this.$DOM.message.removeClass(`${this.selectors.message}--active`);
        });
    }
}