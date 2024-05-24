$(document).ready(function(){
    const myDraggable = document.getElementById("draggableDiv");

    myDraggable.addEventListener('dblclick', () => {

        // I'll just increase max by 1 every time I add an audio
        let x = getRandomInt(0, 4);

        switch (x) {
            case 1:
                var audio = new Audio('audio/patience.mp3');
                break;
            case 2:
                var audio = new Audio('audio/seek-yoda.mp3');
                break;
            case 3:
                var audio = new Audio('audio/you-fail.mp3');
                break;
            case 4:
                var audio = new Audio('audio/yes-mmm.mp3');
                break;
        }

        audio.volume = 0.2;
        audio.play();
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}