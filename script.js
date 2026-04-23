const text = "Happy Birthday My pookie piggy🎉🔥";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text[i];
        i++;
        setTimeout(typeEffect, 60);
    } else {
        document.getElementById("cake").classList.remove("hidden");
    }
}
typeEffect();

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function cutCake() {
    document.getElementById("knife").style.left = "100px";
    document.getElementById("gift").style.display = "block";
}

document.getElementById("gift").onclick = function () {
    document.getElementById("final").classList.remove("hidden");
};
