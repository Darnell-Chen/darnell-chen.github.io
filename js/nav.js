$(document).ready(function() {
    $("#project-section").hide();
    $("#photoSection").hide();

    const slideUpSpeed = 700;
    // make sure slide down speed is always greater than slide up
    const slideDownSpeed = 850;

    // index-wrapper is what wraps around every section on the first page
    const myPages = ['#index-wrapper','#project-section','#photoSection'];

    const changePage = (nextPage) => {
        $('#secondary-body').slideUp(slideUpSpeed);

        setTimeout(function() {
            for (const page of myPages) {
                $("#myImage").css("visibility", "hidden");
            }
            $(page).hide();
        }, slideUpSpeed + 100);
        
        setTimeout(function() {
            for (const page of myPages) {
                $(page).hide();
            }

            $(nextPage).show();

            setTimeout(function() {
                $('#secondary-body').slideDown(slideUpSpeed);

                // SPECIFICALLY TO HIDE THE JUMPING OF THE PHOTO
                setTimeout(() => {
                    $("#myImage").css("visibility", "visible");
                }, 200);
            }, 100)
        }, slideDownSpeed);

    }

    $("#navHome").click(function() {
        changePage('#index-wrapper');
    })

    $("#navProjects").click(function() {
        changePage('#project-section');
    })

    // $("#navPhotos").click(function() {
    //     changePage('#photoSection');
    // })
})