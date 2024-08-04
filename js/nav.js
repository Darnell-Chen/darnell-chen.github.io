$(document).ready(function() {
    $("#project-section").hide();
    $("#photoSection").hide();

    const slideUpSpeed = 700;
    // make sure slide down speed is always greater than slide up
    const slideDownSpeed = 850;

    // index-wrapper is what wraps around every section on the first page
    const myPages = ['#index-wrapper','#project-section','#photoSection'];

    const changePage = (nextPage) => {
        // same thing as 'for (String pages: myPages)' loop in Java
        $('#myImage').hide();
        $('#secondary-body').slideUp(slideUpSpeed);

        setTimeout(function() {
            for (const page of myPages) {
                $(page).hide();
            }
        }, slideUpSpeed + 100);
        
        setTimeout(function() {
            for (const page of myPages) {
                $(page).hide();
            }

            $(nextPage).show();

            setTimeout(function() {
                $('#secondary-body').slideDown(slideUpSpeed);

                // SPECIFICALLY TO PREVENT JUMPING OF THE INDEX IMAGE
                setTimeout(() => {
                    $('#myImage').show();
                }, 200);
            }, 100)
        }, slideDownSpeed);

    }

    $("#navHome").click(function() {
        // SPECIFICALLY TO PREVENT IMAGE JUMPING ON INDEX PAGE
        changePage('#index-wrapper');
    })

    $("#navProjects").click(function() {
        changePage('#project-section');
    })

    $("#navPhotos").click(function() {
        changePage('#photoSection');
    })
})