class Kit {
    constructor() {
        this.pads = document.querySelectorAll('.pad'); //grabs each individual pad
        this.playBtn = document.querySelector('.play');

        this.kickAudio = document.querySelector('.kick-sound'); //grabs audio tag/sound file for kick
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.percAudio = document.querySelector('.perc-sound');
        this.clapAudio = document.querySelector('.clap-sound');
        this.tomAudio = document.querySelector('.tom-sound');
        this.hornAudio = document.querySelector('.horn-sound');

        this.index = 0; //will track the tracks

        this.bpm = 150;

        this.isPlaying = null;
    }

    activePad() {
        // console.log(this); //ensuring its pad that's clicked
        this.classList.toggle('active');
    }

    repeat() {
        let step = this.index % 8; //from 0 index to last (8th) pad
        // console.log(`step: ${step} and index: ${this.index}`);
        const activeBars = document.querySelectorAll(`.b${step}`); //interpolates from each 'track' for their b0 to b7 classes
        activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if (bar.classList.contains('active')) { //check if pads are active; if so, play sound
                //but then, must check what sound to play; check each sound:
                if (bar.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0; //set current time of this audio back to 0; each time sound is played
                    this.kickAudio.play();
                    // this.classList.toggle('jump');
                }
                if (bar.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if (bar.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
                if (bar.classList.contains('perc-pad')) {
                    this.percAudio.currentTime = 0;
                    this.percAudio.play();
                }
                if (bar.classList.contains('clap-pad')) {
                    this.clapAudio.currentTime = 0;
                    this.clapAudio.play();
                }
                if (bar.classList.contains('tom-pad')) {
                    this.tomAudio.currentTime = 0;
                    this.tomAudio.play();
                }
                if (bar.classList.contains('horn-pad')) {
                    this.hornAudio.currentTime = 0;
                    this.hornAudio.play();
                }
            }
        });
        this.index++; //with above log, will see logs of 0 - 7 via 1 sec increments
    }

    start() {
        const interval = (60 / this.bpm) * 1000;
        //check if it's playing:
        if (!this.isPlaying) { //if NOT playing; if null, won't run this condition; if not null, interval is set
            this.isPlaying = setInterval(() => { //reminder: arrow function keeps this reference not going to Window object
                this.repeat();
            }, interval); //repeats every 1 sec
        } else { // remove/clear interval:
            clearInterval(this.isPlaying); //if already set, then clear isPlaying
            this.isPlaying = null; //after clearing, set isPlaying to null again; if not, it will not stop as intended
        }
    }
    updateBtn(){
        //again, if null, checking for reverse (good spot for console.log):
        // console.log(this.isPlaying); //initially null so will log null, but after hitting play no longer null so stop shows in inner text
        if(!this.isPlaying){
            this.playBtn.innerText = 'Stop'; //means it's playing currently so play show's 'stop' instead of 'play'
            this.playBtn.classList.add('active');
        } else {
            this.playBtn.innerText = 'Play';
            this.playBtn.classList.remove('active');
        }
    }
}

const drumKit = new Kit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
    pad.addEventListener('animationend', function () {
        this.style.animation = ""; //here, keyword this refers to actual pad
    }); //once animation finishes, its removed then added again
});

drumKit.playBtn.addEventListener('click', function () {
    drumKit.updateBtn();
    drumKit.start(); //invokes start function, as well as repeat inherited in it
});