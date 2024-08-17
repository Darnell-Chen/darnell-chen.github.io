$(document).ready(
    function() {
        // we'll store whether or not the intro screen was played inside of session storage
        if (sessionStorage.getItem("played") === null) {
            document.getElementById("intro-screen").addEventListener("click", commenceIntro);
            sessionStorage.setItem("played", "true");
        } else {
            deleteIntroMsg();
            var introContainer = document.getElementById("intro-container");
            introContainer.style.opacity = "1";
            commenceIntro();
            sessionStorage.setItem("played", null);
        }
    }
)

function deleteIntroMsg() {
    $(".intro-p").remove();
    $(".intro-p2").remove();
    $(".intro-p3").remove();
}

function commenceIntro(){
    var introContainer = document.getElementById("intro-container");

    // final color is the background color of default page
    const colors = ["#87b9ff", "#8fc2f8", "#98cbf1", "#a0d4ea", "#a8ddeb", "#b0e5e1", "#b9eee2", "#c1f6db", "#c9ffdc", "#c9ffe8", "#c9ffdc", "#c1f6db", "#b9eee2", "#b0e5e1", "#a8ddeb", "#a0d4ea", "#98cbf1", "#8fc2f8", "#87b9ff"];



    // this is the z-index of the initial intro screen
    var myZ = 200;

    for (var i = 0; i < colors.length; i++) {
        var div = document.createElement("div");
        div.style.width = "100vw";
        div.style.height = "100vh";
        div.style.backgroundColor = colors[i];
        div.style.position = "fixed";
        div.style.transform = "translateY(0)";
        div.style.margin = "0px;"

        let currZIndex = myZ - i;
        div.style.zIndex = currZIndex;

        introContainer.append(div);
    }

    // a forced repaint - basically allows the divs time to render before this executes
    setTimeout(() => {
        var introScreens = introContainer.children;

        let seconds = .25;

        for (var i = 0; i < introScreens.length; i++) {
            introScreens[i].style.transition = `transform ${seconds}s ease-in 0s`;
            introScreens[i].style.transform = "translateY(100vh)";
            seconds += .025;
        }
    }, 100);
}


