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
    }

    activePad() {
        // console.log(this); //ensuring its pad that's clicked
        this.classList.toggle('active');
    }

    repeat() {
        let step = this.index % 8; //from 0 index to last (8th) pad
        // console.log(`step: ${step} and index: ${this.index}`);
        const activeBars = document.querySelectorAll(`.b${step}`); //interpolates from each 'track' for their b0 to b7 classes
        this.index++; //with above log, one will see logs of 0 - 7 via 1 sec increments
    }

    start() {
        const interval = (60/this.bpm) * 1000;
        setInterval(() => { //reminder: arrow function keeps this reference not going to Window object
            this.repeat();
        }, interval); //repeats every 1 sec
    }
}

const drumKit = new Kit();

drumKit.pads.forEach(pad => {
    pad.addEventListener('click', drumKit.activePad);
});

drumKit.playBtn.addEventListener('click', function() {
    drumKit.start(); //invokes start function, as well as repeat inherited in it
});