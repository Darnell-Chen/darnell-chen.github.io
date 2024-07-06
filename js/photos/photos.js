import photoList from "./photoList.js";

$(document).ready(function() {
    const numPhotos = photoList.length;

    // our list that will hold which photos to get. 
    // We'll go ahead and instantiate with one num
    const genPhotos = [Math.floor(Math.random() * numPhotos.length)];

    while (genPhotos.length < 3) {
        const newPhoto = Math.floor(Math.random() * numPhotos.length);

        let add = true;
        for (let i = 0; i < genPhotos.length; i++) {
            if (genPhotos[i] == newPhoto) {
                add = false;
                break;
            }
        }

        add ? genPhotos[genPhotos.length] = newPhoto : null;
    }

    
})