$(document).ready(function() {
    const mySection = document.getElementById("first-section");
    const myImage = document.getElementsByClassName("polaroid-div");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let myDiv = entry.target.querySelector(".polaroid-div");
                myDiv.classList.add("intersectionAnim");
                myDiv.classList.remove("leaveIntersectionAnim");
            } else {
                let myDiv = entry.target.querySelector(".polaroid-div");
                myDiv.classList.add("leaveIntersectionAnim");
                myDiv.classList.remove("intersectionAnim");
            }
        })
    }, {
        threshold: 0.4
    });

    observer.observe(mySection);
});