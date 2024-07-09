$(document).ready(function() {
    $("#project-section").hide();
    $("#photoSection").hide();

    const slideUpSpeed = 700;
    const slideDownSpeed = 850;

    let curr = '#index-wrapper';

    $("#navHome").click(function() {
        if (curr != '#index-wrapper') {
            $('#secondary-body').slideUp(slideUpSpeed);
            $('#myImage').slideUp();

            setTimeout(function() {
                $('#index-wrapper').show();

                $('#project-section').hide();
                $('#photoSection').hide();
                
                setTimeout(function() {
                    $('#secondary-body').slideDown(slideDownSpeed);

                    setTimeout(function() {
                        $('#myImage').slideDown();
                    }, 200);
                }, 300);
            }, 700)

            curr = '#index-wrapper';
        }
    })

    $("#navProjects").click(function() {
        if (curr != '#project-section') {

            $('#secondary-body').slideUp(slideUpSpeed);

            setTimeout(function() {
                $('#project-section').show();

                $('#index-wrapper').hide();
                $('#photoSection').hide();

                setTimeout(function() {
                    $('#secondary-body').slideDown(slideDownSpeed);
                }, 300);
            }, 700)
            

            curr = '#project-section';
        }
    })

    $("#navPhotos").click(function() {
        if (curr != '#photoSection') {

            $('#secondary-body').slideUp(slideUpSpeed);

            setTimeout(function() {
                $('#project-section').hide();
                $('#index-wrapper').hide();

                $('#photoSection').show();

                setTimeout(function() {
                    $('#secondary-body').slideDown(slideDownSpeed);
                }, 300);
            }, 700)

            curr = '#photoSection';
        }
    })
})