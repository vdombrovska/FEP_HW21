class TodosListView {
    static LIST_TEMPLATE = `<div id="taskList" class="task-list u-full-width"></div>`;
    static LIST_ITEM_TEMPLATE = `<div class="task-item u-full-width {{doneClass}}" data-id="{{id}}">
        {{title}}
        <span class="delete-btn">✘</span>
    </div>`;

    static TASK_SELECTOR = '.task-item';
    static TASK_DELETE_SELECTOR = '.delete-btn';
    static TASK_DONE_CLASS = 'done';
    static todo = {};

    static createItemElement(todo) {
        return $(
            TodosListView.LIST_ITEM_TEMPLATE.replace('{{id}}', todo.id)
                .replace('{{title}}', todo.title)
                .replace(
                    '{{doneClass}}',
                    todo.isDone ? TodosListView.TASK_DONE_CLASS : '',
                ),
        );
    }

        
    static addTodo (val){
       $('#addBtn').on('click', onAddNoteBtnClick);
       this.todo.title= $("input:text").val();
    }
     
    constructor(config = {}) {
        this.$el = $(TodosListView.LIST_TEMPLATE)
            .on(
                'click',
                TodosListView.TASK_SELECTOR,
                (e) =>
                    config.onToggle && config.onToggle($(e.target).data('id')),
            )
            .on('click', TodosListView.TASK_DELETE_SELECTOR, (e) => {
                e.stopPropagation();
                config.onDelete &&
                    config.onDelete(
                        $(e.target)
                            .closest(TodosListView.TASK_SELECTOR)
                            .data('id'),
                    );
            });
    }

    renderList(list) {
        this.$el.empty();
        this.$el.append(list.map(TodosListView.createItemElement));
    }
}