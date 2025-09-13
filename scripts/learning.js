

const colorSchemeButton = document.getElementById('colorSchemeButton');
const backButton = document.getElementsByClassName('back-button');

const darkModeButton = document.getElementById('colorSchemeDarkMode');
const lightModeButton = document.getElementById('colorSchemeLightMode');
const strobeModeButton = document.getElementById('colorSchemeStrobeMode');


const submenu = document.getElementsByClassName('submenu')[0];
const toolbarMainMenu = document.getElementsByClassName('main-menu')[0];

colorSchemeButton.addEventListener('click', () => {
    toolbarMainMenu.style.transform = "translateX(-250px)";
    submenu.style.transform = "translateX(0%)";
});

for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener("click", () => {
        toolbarMainMenu.style.transform = "translateX(0%)";
        submenu.style.transform = "translateX(350px)";
    });
};

lightModeButton.addEventListener('click', () => {
    document.body.classList = "light-mode";
    document.body.style.backgroundColor = "white";
});

darkModeButton.addEventListener('click', () => {
    document.body.classList = "dark-mode";
    document.body.style.backgroundColor = "black";
});

let strobeToggled = false;
let STROBE_EVENT;
let currTheme = document.body.classList;
strobeModeButton.addEventListener('click', () => {
    if (!strobeToggled) {
        strobeToggled = true;
        STROBE_EVENT = setInterval(() => {
            if (currTheme == "dark-mode") {
                currTheme = "light-mode";
                document.body.classList = "light-mode";
                document.body.style.backgroundColor = "white";
            } else {
                currTheme = "dark-mode";
                document.body.classList = "dark-mode";
                document.body.style.backgroundColor = "black";
            }
        }, 100)
    } else {
        strobeToggled = false;
        clearInterval(STROBE_EVENT);
    }
})