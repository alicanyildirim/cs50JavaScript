document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").onClick = count;
});

let counter = 0;

function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
}
