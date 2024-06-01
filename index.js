window.onload = function() {
    const audio = document.getElementById("moodsetter");

    const random = Math.floor(Math.random() * 10);

    switch (random) {
        case 1:
            audio.src = "audio/song1.mp3";
            break;
        case 2:
            audio.src = "audio/song2.mp3";
            break;
        case 3:
            audio.src = "audio/song3.mp3";
            break;
        case 4:
            audio.src = "audio/song4.mp3";
            break;
        case 5:
            audio.src = "audio/song5.mp3";
            break;
        case 6:
            audio.src = "audio/song6.mp3";
            break;
        case 7:
            audio.src = "audio/song7.mp3";
            break;
        case 8:
            audio.src = "audio/song8.mp3";
            break;
        case 9:
            audio.src = "audio/song9.mp3";
            break;
        default:
            audio.src = "audio/song10.mp3";
            break;
    }

    audio.load();
}