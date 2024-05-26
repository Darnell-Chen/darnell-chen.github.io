$(document).ready(function() {
    const mySection = document.getElementById("first-section");
    const myImage = document.getElementsByClassName("#polaroidPadding");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("intersecting");
                let myDiv = entry.target.querySelector("#polaroidPadding");
                myDiv.classList.add("intersectionAnim");
                myDiv.classList.remove("leaveIntersectionAnim");
            } else {
                console.log("not intersecting");
                let myDiv = entry.target.querySelector("#polaroidPadding");
                myDiv.classList.add("leaveIntersectionAnim");
                myDiv.classList.remove("intersectionAnim");
            }
        })
    }, {
        threshold: 0.2
    });

    observer.observe(mySection);
});