"use strict";

const main = {

  showResult(result) {
    document.getElementById("result").innerHTML += result + "<br>";
  },

  showTitle(title) {
    document.getElementById("result").innerHTML += "<h3>" + title + "</h3>";
  },

  showArrays(fruits, fruitsCopy) {
    main.showResult("fruits: " + fruits);
    main.showResult("fruitsCopy: " + fruitsCopy);
    main.showResult("Zijn de objecten gelijk: " + (fruits == fruitsCopy));
  },

  showArrayProperties(array){
    main.showResult("array: " + array + " with length of " + array.length);
  console.log(array);
  }

};
