document.getElementById("ColorScheme1").addEventListener("click", ColorScheme1);
document.getElementById("ColorScheme2").addEventListener("click", ColorScheme2);

function changeGlowColors(main, startEnd, Middle) {
    const root = document.documentElement;
    root.style.setProperty('--main-glow', main);
    root.style.setProperty('--pulse-glow-start-end', startEnd);
    root.style.setProperty('--pulse-glow-middle', Middle);
}

function ColorScheme1() {
    changeGlowColors(
        'rgb(26, 188, 23)',
        'rgb(27, 130, 25)',
        'rgb(22, 168, 63)'
    )
}

function ColorScheme2() {
        changeGlowColors(
        'rgb(0, 247, 255)',
        'rgb(0, 166, 172)',
        'rgb(0, 60, 255)'
    )
}

