class PopupManager {
    constructor() {
        this.selectors = {
            trigger: "data-popup-trigger",
            backdrop: "backdrop",
            popup: "popup",
            popupInner: "popup__inner",
            popupContent: "popup__content",
            btnSubmit: "popup [type='submit']"
        }

        this.$DOM = {
            trigger: $(`[${this.selectors.trigger}]`),
            backdrop: $(`.${this.selectors.backdrop}`),
            popup: $(`.${this.selectors.popup}`),
            popupInner: $(`.${this.selectors.popupInner}`),
            popupContent: $(`.${this.selectors.popupContent}`),
            btnSubmit: $(`.${this.selectors.btnSubmit}`)
        }

        this.$DOM.trigger.click(this.togglePopup);
        this.$DOM.popupInner.click(this.closePopups);
        this.$DOM.popupContent.click(e => { e.stopPropagation(); });
        this.$DOM.btnSubmit.click(this.validateForm);
        this.checkPopupURL();
    }

    togglePopup = e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const target = $this.attr(`${this.selectors.trigger}`);
        const $target = $(`[data-popup-target="${target}"]`);
        $target.toggleClass(`${this.selectors.popup}--active`);
        this.$DOM.backdrop.toggleClass(`${this.selectors.backdrop}--active`);
    }

    closePopups = () => {
        this.$DOM.popup.removeClass(`${this.selectors.popup}--active`);
        this.$DOM.backdrop.removeClass(`${this.selectors.backdrop}--active`);
    }

    openPopup = $target => {
        $target.toggleClass(`${this.selectors.popup}--active`);
        this.$DOM.backdrop.toggleClass(`${this.selectors.backdrop}--active`);
    }

    validateForm = e => {
        const $this = $(e.currentTarget);
        const $form = $this.parents(".form");
        const $inputs = $form.find("input, textarea, select");
        $inputs.each(function() {
            const $this = $(this);
            if ($this.is(":invalid")) {
                $this.parents(".form").find(".form__message").fadeIn("fast");
            } else {
                $this.parents(".form").find(".form__message").fadeOut("fast");
            }
        });
    }

    checkPopupURL = () => {
        const hash = window.location.hash;
        if (hash != "") {
            const $target = $(`[data-popup-target="${hash.split("#")[1]}"]`);
            this.openPopup($target);
        }
    }
}