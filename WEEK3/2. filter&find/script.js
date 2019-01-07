"use strict";
let fruits = ['Apple', 'Banana', 'Mango'];

filterArray();
findArray();

function smallFruit(value) {
    if (value.length <= 5) {
        return value;
    }
}

function filterArray() {
    let fruitsCopy =

        fruits.filter(smallFruit);

        // fruits.filter(
        // function (fruit) {
        //     return fruit.substr(2, 1) == "n";
        // }
    // );

    main.showTitle("Using filter");
    main.showArrays(fruits, fruitsCopy);
}

function findArray() {
    let fruitsCopy = fruits.find(
        function (fruit) {
            return fruit.substr(2, 1) == "n";
        }
    );
    main.showTitle("Using find");
    main.showArrays(fruits, fruitsCopy);
}