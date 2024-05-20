function moveIntroScreen() {
    console.log("moving intro");

    var introContainer = document.getElementById("intro-container");

    const colors = ["#cadafe", "#aac4fe", "#92b3fd", "#79a3fd"];

    for (var i = 0; i < colors.length; i++) {
        var div = document.createElement("div");
        div.style.width = "100vw";
        div.style.height = "100vh";
        div.style.backgroundColor = colors[i];
        div.style.position = "fixed";
        div.style.opacity = "1";

        introContainer.append(div);
    }

    var introScreens = introContainer.children;

    let seconds = 10.0;

    for (var i = 0; i < introScreens.length; i++) {
        introScreens[i].style.transition = "transform " + seconds.toString() + "s linear 0s";
        introScreens[i].style.transform = "translateY(100vh)";
        seconds += 1;
    }
}
