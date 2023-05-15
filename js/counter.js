
// Connect controls //
const app__counter = document.querySelector('.app__counter');
const app__timer = document.querySelector('.app__timer');
const btn_plus = document.querySelector('#btn_plus');
const btn_reset = document.querySelector('#btn_reset');
const btn_start = document.querySelector('#btn_start');
const btn_stop = document.querySelector('#btn_stop');
const tbl_body = document.querySelector('.app__table tbody');

// Initial Application //

const COUNT_INITIAL_VALUE = 0;
let counter = COUNT_INITIAL_VALUE;
let seconds = COUNT_INITIAL_VALUE;
let timer;

// TODO //

counter = parseInt(localStorage.getItem('count')) || counter;
app__counter.innerHTML = counter;

seconds = parseInt(localStorage.getItem('sec')) || seconds;
app__timer.innerText = seconds;

tbl_body.innerHTML = localStorage.getItem('table') || tbl_body.innerHTML;

btn_plus.addEventListener('click', () => {
    const add_tr = document.createElement('tr');
    const add_td_lap = document.createElement('td');
    const add_td_time = document.createElement('td');

    counter += parseInt(btn_plus.dataset.up);
    app__counter.innerHTML = counter;
    localStorage.setItem('count', counter);

    add_td_lap.innerText = counter;
    add_td_time.innerText = seconds;
    add_tr.appendChild(add_td_lap);
    add_tr.appendChild(add_td_time);
    tbl_body.appendChild(add_tr);
    localStorage.setItem('table', tbl_body.innerHTML);

    seconds = COUNT_INITIAL_VALUE;
} );

btn_reset.addEventListener('click', () => {
    localStorage.clear();
    location = '';
})

function updateTimer() {
    seconds++;
    app__timer.innerText = seconds;
}

btn_start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
});

btn_stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});
