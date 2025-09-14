
const ipEl = document.getElementById('ip');
const dateEl = document.getElementById('date');
const countryEl = document.getElementById('country');

function currentDateFormatted() {
    const date = new Date();
    const formattedDate = date.toLocaleString();
    return formattedDate;
}

fetch("http://ip-api.com/json")
    .then(res => res.json())
    .then(data => {
        ipEl.textContent = `IP: ${data.query}`;
        countryEl.textContent = `Country: ${data.country}`;
    });

setInterval(() => {
    dateEl.textContent = `Date: ${currentDateFormatted()}`;
}, 1000);