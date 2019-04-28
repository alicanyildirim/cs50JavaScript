document.addEventListener("DOMContentLoaded", function() {
    setInterval(count,1000);
});

let counter = 0;

function count() {
    counter++;
    document.querySelector("#counter").innerHTML = counter;
}
