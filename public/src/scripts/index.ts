import { nanoid } from "./external/nanoid.js";
import { IFilter, ITodo } from "./models/utils";

const newTodoEl = document.querySelector("#new-todo") as HTMLInputElement;
const todosList = document.querySelector("#todos-list") as HTMLElement;
let currentActiveFilterBtn: HTMLButtonElement | null = null;

const todos = [] as ITodo[];
let id = 1;

/**
 * @param todos {ITodo[]} The array of todos to be shown.
 * @param filter {IFilter} The filter criteria.
 */
function renderTodos(todos: ITodo[], filter: IFilter = "all") {
    let innerHTML = "";

    let filteredTodos = todos;

    switch (filter) {
        case "all":
            filteredTodos = todos;
            break;
        case "active":
            filteredTodos = todos.filter((todo) => !todo.completed);
            break;
        case "completed":
            filteredTodos = todos.filter((todo) => todo.completed);
            break;
    }

    filteredTodos.forEach((todo) => {
        innerHTML += `<li>
                <input type="checkbox" name="toggle-todo-${
                    todo.id
                }" class="toggle-completed-status" data-id="${todo.id}" ${
            todo.completed ? "checked" : ""
        } />
                <span>${todo.title}</span>
            </li>`;
    });

    todosList.innerHTML = innerHTML;

    // set check box input handlers (toggle completed status)
    const checkboxes = document.querySelectorAll(
        ".toggle-completed-status"
    ) as NodeListOf<HTMLInputElement>;

    // Listen for the change event
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function (event) {
            const target = event.target as HTMLInputElement;
            const id = +(target.getAttribute("data-id") as string);

            const todo = todos.find((todo) => todo.id === id) as ITodo;

            if (target.checked) {
                todo.completed = true;
            } else {
                todo.completed = false;
            }

            renderTodos(todos);
        });
    });
}

function addTodo(title: string) {
    console.log("add todo");
    todos.push({
        id: id,
        title,
        completed: false,
    });

    ++id;

    renderTodos(todos);
}

function onPageLoad() {
    // set up todo to be added when user presses Enter key
    newTodoEl.addEventListener("keydown", function (event: KeyboardEvent) {
        if (event.key === "Enter") {
            addTodo(newTodoEl.value);

            // clear the input
            newTodoEl.value = "";
        }
    });

    document.querySelectorAll(".btn-filter").forEach((btn) => {
        btn.addEventListener(
            "click",
            function (this: HTMLButtonElement, event) {
                const activeBtn = this;
                const filter = activeBtn.getAttribute("data-filter") as IFilter;

                if (currentActiveFilterBtn !== activeBtn) {
                    currentActiveFilterBtn?.classList.remove(
                        "btn-filter-active"
                    );
                }

                renderTodos(todos, filter);

                activeBtn.classList.add("btn-filter-active");

                currentActiveFilterBtn = activeBtn;
            }
        );
    });
}

onPageLoad();
