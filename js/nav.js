function navPage(currPage) {

    markCurrPage(currPage);

    let index = document.getElementById("navHome");
    index.addEventListener("click", goIndex);

    function goIndex() {
        if (currPage !== "index.html") {
            divAnimation();

            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        }
    }

    let projects = document.getElementById("navProjects");
    projects.addEventListener("click", goProjects);

    function goProjects() {
        if (currPage !== "projects.html") {
            divAnimation();

            setTimeout(() => {
                window.location.href = "projects.html";
            }, 500);
        }
    }

    let resume = document.getElementById("navResume");
    resume.addEventListener("click", goResume);

    function goResume() {
        if (currPage !== "resume.html") {
            divAnimation();

            console.log("wtf");

            setTimeout(() => {
                window.location.href = "resume.html";
            }, 500);
        }
    }
}

function divAnimation() {
    const BASECOLOR = "#87b9ff";

    var div = document.createElement("div");
    div.style.width = "100vw";
    div.style.height = "150vh";
    div.style.backgroundColor = BASECOLOR;
    div.style.position = "fixed";
    div.style.transform = "translateY(100vh)";
    
    document.body.append(div);
    
    window.requestAnimationFrame(() => {
        div.style.transition = "transform 0.5s ease-in-out 0s";
        div.style.transform = "translateY(-100vh)";
    });
}

function markCurrPage(currPage) {

    const colorGrad = "linear-gradient(transparent, #c9fdff)";

    switch(currPage) {
        case "index.html":
            document.getElementById("navHome").innerHTML = "&#12298 Home &#12299";
            document.getElementById("navHome").style.fontWeight = "bold";
            break;
        case "projects.html":
            document.getElementById("navProjects").innerHTML = "&#12298 Projects &#12299";
            document.getElementById("navProjects").style.fontWeight = "bold";
            break;
        case "resume.html":
            document.getElementById("navResume").innerHTML = "&#12298 Resume &#12299";
            document.getElementById("navResume").style.fontWeight = "bold";
            break;
    }
}