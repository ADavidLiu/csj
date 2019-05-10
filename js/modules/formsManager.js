class FormsManager {
    constructor() {
        this.selectors = {
            form: "form"
        }

        this.$DOM = {
            form: $(`.${this.selectors.form}`)
        }

        this.$DOM.form.submit(this.sendForm);
    }

    sendForm(e) {
        e.preventDefault();
        const _$this = $(this);
        $.post(_$this.attr("action"), _$this.serialize());
        _$this.parents(".popup").addClass("popup--sent");
    }
}