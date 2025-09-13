function windowHasFocus() {
    return document.hasFocus();
}



// let originalTitle = document.title;

// function updateTitle() {
//     document.title = document.hidden ? "Get on our site dumbass 😭" : originalTitle;
// }

// window.addEventListener("load", () => {
//     setTimeout(updateTitle, 10);
// })

// function updateTitleAfterTimeout() {
//     setTimeout(updateTitle, 10)
// }

// document.addEventListener("visibilitychange", updateTitleAfterTimeout);






// let title = "NILCIRCUIT V2"
// const length = title.length;
// let pos = 1;
// setInterval(() => {

//     do {
//         pos = pos % length + 1;
//     } while (title[pos - 1] === ' ');

//     document.title = title.substring(0, pos) || title;
// }, 1000);





const titles = ["🔥 NILCIRCUIT V2 🔥", "💧 NILCIRCUIT V2 💧"];
let index = 0;

setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}, 1000);


// const title = "NILCIRCUIT V2";
// let pos = 0;
// let blink = false;
// let reverse = false;
// let count = 0;
// let ticksToWait = 0;
// const tick = setInterval(() => {
//   if (!windowHasFocus()) {
//     document.title = "[UNFOCUSED] " + title;
//     return;
//   }

//   if (ticksToWait > 0) {
//     ticksToWait--;
//   } else {
//     if (reverse === false && pos >= title.length) {
//       pos = title.length;
//       reverse = true;
//       ticksToWait = 2;
//     } else if (reverse === true && pos <= 0) {
//       pos = 0;
//       reverse = false;
//       ticksToWait = 2;
//     } else {
//       pos += reverse ? -1 : 1;
//     }
//   }

//   if (count % 2 === 0) blink = !blink;
//   count++;

//   let temp = title.substring(0, pos);

//   if (blink) temp += "|";

//   document.title = temp;
// }, 250);



// let seconds = 0;

// function pad(num, size = 2) {
//     return String(num).padStart(size, '0');
// }

// setInterval(() => {
//     const years = Math.floor(seconds / (365 * 86400));
//     const days = Math.floor((seconds % (365 * 86400)) / 86400);
//     const hours = Math.floor((seconds % 86400) / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     const formatted = `${pad(years)}:${pad(days,3)}:${pad(hours)}:${pad(mins)}:${pad(secs)}`

//     document.title = `Time elapsed: ${formatted}`;

//     seconds++;
// }, 1000);