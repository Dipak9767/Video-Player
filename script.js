const btn2 = document.getElementById('btn2');
const btn1 = document.getElementById('btn1');
const videoContainer = document.getElementById('video-container');

function play(video) {
    videoContainer.innerHTML = `<video class="video"controls>
                                <source src=${video} type="video/mp4">
                                </video>`
}


let videoURL = "./video.mp4";

play(videoURL);

btn1.addEventListener('click', () => {
    videoURL = "./video1.mp4";
    play(videoURL);
    console.log(videoURL.duration)
})

btn2.addEventListener('click', () => {
    videoURL = "./video2.mp4";
    play(videoURL);
})