import photoList from "./photoList.js";

$(document).ready(function() {


    let listPhotos = genImageList();
    setPhotos(listPhotos);

    // we need to delete alt-intro slide after the duration of its anim

})

const genImageList = () => {
    const numPhotos = photoList.length;

    // our list that will hold which photos to get. 
    // We'll go ahead and instantiate with one num
    const genPhotos = [Math.floor(Math.random() * numPhotos)];

    while (genPhotos.length < 4) {
        const newPhoto = Math.floor(Math.random() * numPhotos);

        let add = true;
        for (let i = 0; i < genPhotos.length; i++) {
            if (genPhotos[i] == newPhoto) {
                add = false;
                break;
            }
        }

        add ? genPhotos[genPhotos.length] = newPhoto : null;
    }

    return genPhotos;
}

const setPhotos = (listPhotos) => {
    // we'll create a for loop for each photo. They will each be in a col-md div. 

    let replacedText = "";


    for (let i = 0; i < listPhotos.length; i++) {
        const currPhoto = photoList[listPhotos[i]];

        let start = '<div class="photo col-md">' +
                    '<div class="photo-polaroid-padding">';

        start += '<img src="../../images/myPics/' + currPhoto.photo +'">' +
                 '<p class="photo-text">' +
                 '<span class="photo-left-text">' + currPhoto.where + '</span>' +
                 '<span class="photo-right-text">' + currPhoto.date + '</span>'



        start += '</p></div></div>';

        replacedText +=start
    }

    $(".photo-wrapper").append(replacedText);
}