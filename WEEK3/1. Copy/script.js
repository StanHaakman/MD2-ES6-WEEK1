"use strict";
// Moved fruits out of the function scope
// Now we can use fruits on the console

let fruits = ['Apple', 'Banana'];

copyArray();
copyArrayWithSlice();
copyArrayWithSpread();

function copyArray() {
    // let fruits = ['Apple', 'Banana'];
    let fruitsCopy = fruits;

    main.showTitle("Kopieer fruits naar fruitsCopy");
    main.showResult("let fruitsCopy = fruits;");
    main.showResult("");
    main.showArrays(fruits, fruitsCopy);
    main.showResult("");
    fruitsCopy[0] = "Orange";
    main.showResult("Wijzig het eerste element van fruitsCopy[0]");
    main.showResult("fruitsCopy[0] = Orange;");
    main.showResult("");
    main.showArrays(fruits, fruitsCopy);
}

function copyArrayWithSlice() {
    let fruits = ['Apple', 'Banana'];
    let fruitsCopy = fruits.slice();
    main.showTitle("let fruitsCopy = fruits.slice();");
    main.showArrays(fruits, fruitsCopy);
    fruitsCopy[0] = "Orange";
    main.showResult("fruitsCopy[0] = 'Orange'");
    main.showArrays(fruits, fruitsCopy);
}

function copyArrayWithSpread() {
    let fruits = ['Apple', 'Banana'];
    let fruitsCopy = [...fruits];
    main.showTitle("let fruitsCopy = [...fruits];");
    main.showResult("fruits: " + fruits);
    main.showResult("fruitsCopy: " + fruitsCopy);
    fruitsCopy[0] = "Orange";
    main.showResult("fruitsCopy[0] = 'Orange'");
    main.showArrays(fruits, fruitsCopy);
}

