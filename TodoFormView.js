class TodoFormView {
    static FORM_TEMPLATE = `    <form id="addTaskForm">
    <div class="row">
        <div class="ten columns">
            <input
                type="text"
                name="title"
                id="taskNameInput"
                class="u-full-width"
            />
            <span id="errorContainer" class="error hidden"></span>
        </div>
        <div class="two columns">
            <button type="submit" id="addBtn" class="u-full-width">
                Add
            </button>
        </div>
    </div>
</form>`;

    static TASK_NAME_IN = '#taskNameInput';

    constructor(value) {
        this.value = value;
        this.$el = $(TodoFormView.FORM_TEMPLATE).on('submit', (elem) => this.onFormSubmit(elem),
        );
    }

    onFormSubmit(elem) {
        elem.preventDefault();
        const taskName = this.$el.find(TodoFormView.TASK_NAME_IN).val();
        this.value.onAdd && this.value.onAdd({ title: taskName });
    }
}