let count = 1;
function getData(query) {
    console.log(`API Call ${count++} : Fetching query ${query}`);
}

function debounce(fx, delay) {
    let timerId = null;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fx.apply(this, args);
            timerId = null;
        }, delay);
    };
}


let debouncedSearch = debounce(getData, 2000);


const textBox = document.getElementById('text-input');
const paraData = document.getElementById('text-output');

textBox.addEventListener(
    'keyup',
    debounce(function (e) {
        const query = e.target.value;
        paraData.innerText = query;
        getData(query);
    }, 1000)
);