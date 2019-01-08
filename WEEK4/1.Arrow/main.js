"use strict";

const main = {

    showResult(result) {
        document.getElementById("result").innerHTML += result + "<br>";
    },

    showTitle(title) {
        document.getElementById("result").innerHTML += "<h3>" + title + "</h3>";
    }
}