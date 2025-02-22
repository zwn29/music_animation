// start playing the music when animation plays on the website

const audio = document.querySelector('audio');
// auto play the music when the animation plays
// loop the music
audio.loop = true;
document.addEventListener('animationstart', () => {
    audio.play();
}
);

