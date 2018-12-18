// Block scope is the scope between {}
// Using the variable outside the scope will result in an error

// Check it in the console

function blockScopeVar() {
    let functionScoped = "I am function scoped variable";
    let functionScopedToo = "I am function scoped variable too";


        let blockScoped = "I am block scoped variable";

        for(let i = 1; i < 10; i++) {
            console.log(i);
        }

        console.log("Dit is er buiten " + i);

    window.firstScope.textContent = functionScoped;
    window.secondScope.textContent = functionScopedToo;
    window.thirdScope.textContent = blockScoped;

    console.log(blockScoped);

}
blockScopeVar();

// window.firstScope.textContent = functionScoped;
// window.secondScope.textContent = functionScopedToo;
// window.thirdScope.textContent = blockScoped;
