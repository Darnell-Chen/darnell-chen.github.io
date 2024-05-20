function moveIntroScreen() {
    if (sessionStorage.getItem("played") !== null) {
        var introContainer = document.getElementById("intro-container");
        introContainer.style.opacity = "1";

        document.getElementById("intro-container").addEventListener("click", commenceIntro());
        sessionStorage.setItem("played", "true");   
        console.log(sessionStorage.getItem("played"));
    } else {
        var introContainer = document.getElementById("intro-container");
        introContainer.style.opacity = "1";
        commenceIntro();
    }
}

function commenceIntro(){
    var introContainer = document.getElementById("intro-container");

    // final color is the background color of default page
    const colors = ["#C8D9F0", "#BBCFEB", "#AFC5E7", "#A2BCE3", "#96B2DF", "#89A8DB", "#7D9ED7", "#7094D3", "#648ACF", "#5780CB", "#4B76C7", "#5780CB", "#648ACF", "#7094D3", "#7D9ED7", "#89A8DB", "#96B2DF", "#A2BCE3", "#AFC5E7", "#BBCFEB", "#C8D9F0"];



    // this is the z-index of the initial intro screen
    var myZ = 200;

    for (var i = 0; i < colors.length; i++) {
        var div = document.createElement("div");
        div.style.width = "100vw";
        div.style.height = "100vh";
        div.style.backgroundColor = colors[i];
        div.style.position = "fixed";
        div.style.transform = "translateY(0)";

        let currZIndex = myZ - i;
        div.style.zIndex = currZIndex;

        introContainer.append(div);
    }

    // a forced repaint - basically allows the divs time to render before this executes
    setTimeout(() => {
        var introScreens = introContainer.children;

        let seconds = .75;

        for (var i = 0; i < introScreens.length; i++) {
            introScreens[i].style.transition = `transform ${seconds}s ease-in 0s`;
            introScreens[i].style.transform = "translateY(100vh)";
            seconds += .05;
        }
    }, 100);
}
