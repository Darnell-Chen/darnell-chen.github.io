function navPage(currPage) {

    const deleteTransitionDiv = () => {
        console.log("transitionDivDeleted");
        document.getElementById("transitionDiv").remove();
    }

    deleteTransitionDiv;

    // this part simply adds brackets and boldens the nav item we're currently on
    markCurrPage(currPage);


    // these will create the anims that slides the divs up
    let index = document.getElementById("navHome");
    index.addEventListener("click", goIndex);

    function goIndex() {
        if (currPage !== "index.html") {
            divAnimation();

            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 550);
        }
    }

    let projects = document.getElementById("navProjects");
    projects.addEventListener("click", goProjects);

    function goProjects() {
        if (currPage !== "projects.html") {
            divAnimation();

            setTimeout(() => {
                window.location.href = "projects.html";
            }, 550);
        }
    }

    let photos = document.getElementById("navPhotos");
    photos.addEventListener("click", goPhotos);

    function goPhotos() {
        if (currPage !== "photos.html") {
            divAnimation();

            setTimeout(() => {
                window.location.href = "photos.html";
            }, 550);
        }
    }
}

function divAnimation() {
    const BASECOLOR = "#87b9ff";

    var div = document.createElement("div");
    div.style.width = "100vw";

    // better safe than sorry w/ height
    div.style.height = "150vh";
    div.style.backgroundColor = BASECOLOR;
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.zIndex = "1000"
    div.setAttribute("id", "transitionDiv")
    div.style.transform = "translateY(100vh)";
    
    document.body.appendChild(div);


    window.requestAnimationFrame(() => {
        // Apply the transition style
        div.style.transition = "all 0.5s ease-in-out";

        div.style.transform = "translateY(0)";
    });
}

function markCurrPage(currPage) {

    switch(currPage) {
        case "index.html":
            document.getElementById("navHome").innerHTML = "&#12298 Home &#12299";
            document.getElementById("navHome").style.fontWeight = "bold";
            break;
        case "projects.html":
            document.getElementById("navProjects").innerHTML = "&#12298 Projects &#12299";
            document.getElementById("navProjects").style.fontWeight = "bold";
            break;
        case "photos.html":
            document.getElementById("navPhotos").innerHTML = "&#12298 Photos &#12299";
            document.getElementById("navPhotos").style.fontWeight = "bold";
            break;
    }
}