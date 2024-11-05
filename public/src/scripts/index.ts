function addTodo() {
    console.log("add todo");
}

function onPageLoad() {
    // set up todo to be added when user presses Enter key
    document
        .querySelector("#new-todo")
        ?.addEventListener("keydown", function (event) {
            console.log(event);

            addTodo();
        });
}

onPageLoad();
