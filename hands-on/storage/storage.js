if(!localStorage.getItem('counter'))
    localStorage.setItem('counter',0);

//load current value of counter
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#counter").innerHTML = localStorage.getItem('counter');

    //count every time button is clicked.
    document.querySelector('button').onclick = () => {
        //increment current counter
        let counter = localStorage.getItem('counter');
        counter++;
        //update counter
        document.querySelector('#counter').innerHTML = counter;
        localStorage.setItem('counter',counter);
    };
});

