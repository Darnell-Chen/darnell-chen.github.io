$(document).ready(function() {
    const animElements = document.getElementsByClassName("skills");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.parentNode.classList.add("backAnim");
                entry.target.classList.add("skillAnim");
            } else {
                // entry.target.parentNode.classList.remove("backAnim");
                // entry.target.classList.remove("skillAnim");
                null;
            }
        })
    }, {
        threshold: 0
    });

    for (let i = 0; i < animElements.length; i++) {
        const currSkill = animElements[i];

        observer.observe(currSkill);
    }
})