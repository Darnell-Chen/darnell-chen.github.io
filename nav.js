function navPage(currPage) {

    let index = document.getElementById("navHome");
    index.addEventListener("click", goIndex);

    function goIndex() {
        if (currPage !== "index.html") {
            var div = document.createElement("div");
            div.style.width = "100vw";
            div.style.height = "100vh";
            div.style.backgroundColor = "#C8D9F0";
            div.style.position = "fixed";
            div.style.transform = "translateY(100vh)";
            
            document.body.append(div);
            
            window.requestAnimationFrame(() => {
                div.style.transition = "transform 0.5s ease-in-out 0s";
                div.style.transform = "translateY(-100vh)";
            });

            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
        }
    }

    let projects = document.getElementById("navProjects");
    projects.addEventListener("click", goProjects);

    function goProjects() {
        console.log("hello world");
        if (currPage !== "projects.html") {
            var div = document.createElement("div");
            div.style.width = "100vw";
            div.style.height = "100vh";
            div.style.backgroundColor = "#C8D9F0";
            div.style.position = "fixed";
            div.style.transform = "translateY(100vh)";
            
            document.body.append(div);
            
            window.requestAnimationFrame(() => {
                div.style.transition = "transform 0.5s ease-in-out 0s";
                div.style.transform = "translateY(-100vh)";
            });

            setTimeout(() => {
                window.location.href = "projects.html";
            }, 1000);
        }
    }

    let resume = document.getElementById("navResume");
}