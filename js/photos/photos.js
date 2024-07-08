import photoList from "./photoList.js";

$(document).ready(function() {

    let listPhotos = genImageList();
    setPhotos(listPhotos);

    $(".photo").click(function() {
        $(this).animate({  borderSpacing: (-360 * 4) }, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
              $(this).css('-moz-transform','rotateY('+now+'deg)');
              $(this).css('transform','rotateY('+now+'deg)');
            },
            duration: 1000
        },'linear');

        const newPhoto = Math.floor(Math.random() * photoList.length);
        const newSrc = '../../images/myPics/' + photoList[newPhoto].photo;

        const currImage = $(this).find("img")[0];

        $(currImage).fadeOut(750, function() {
            // Fade out the current image slowly
            $(currImage).attr("src", newSrc); // Set the src attribute to load the new image
            $(currImage).fadeIn(400)
        });



        
    });


    // we need to delete alt-intro slide after the duration of its anim

})

const genImageList = () => {
    const numPhotos = photoList.length;

    // our list that will hold which photos to get. 
    // We'll go ahead and instantiate with one num
    const genPhotos = [Math.floor(Math.random() * numPhotos)];

    while (genPhotos.length < 4) {
        let newPhoto = Math.floor(Math.random() * numPhotos);

        while (genPhotos.includes(newPhoto)) {
            newPhoto = Math.floor(Math.random() * numPhotos);
        }

        genPhotos[genPhotos.length] = newPhoto;
    }

    return genPhotos;
}

const setPhotos = (listPhotos) => {
    // we'll create a for loop for each photo. They will each be in a col-md div. 

    let replacedText = "";


    for (let i = 0; i < listPhotos.length; i++) {
        const currPhoto = photoList[listPhotos[i]];

        let start = '<div class="photo col-md p-3">' +
                    '<div class="photo-polaroid-padding ' 
                    + (i % 2 == 0 ? 'even-photo ' : 'odd-photo ' ) + '">'; 
                    // ^^^ This adds the onclick function for setting photo

        start += '<img src="../../images/myPics/' + currPhoto.photo +'">' +
                 '<p class="photo-text">' +
                 '<span class="photo-left-text">' + currPhoto.where + '</span>' +
                 '<span class="photo-right-text">' + currPhoto.date + '</span>'



        start += '</p></div></div>';

        // thoughts for future self:
        // we can give each image a unique id to conditionally change onclick function arguments
        // so that each click is a unique picture

        replacedText +=start
    }

    $(".photo-wrapper").append(replacedText);
}