$(document).ready(function(){

    let skillDiv = document.getElementById('skill-div');

    function addAnim() {
        skillDiv.classList.add('skillAnim')
        console.log("hereeeee");
        skillDiv.removeEventListener('mouseover', addAnim);
    };

    skillDiv.addEventListener('mouseover', addAnim);
  
});