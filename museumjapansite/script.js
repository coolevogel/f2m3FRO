const button = document.getElementById("js--menu");

const navigation = document.getElementById("js--nav");

const body = document.getElementById("js--body");

button.onclick = function() {
    navigation.style.visibility = "visible";
    body.style.overflow = "hidden";
    navigation.style.opacity = 1;
}

function closeNav() {
    document.getElementById("js--nav").style.visibility = "hidden";
    navigation.style.opacity = 0;
    body.style.overflow = "visible";
}