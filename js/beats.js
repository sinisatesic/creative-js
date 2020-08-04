class Kit {
    constructor() {
        this.pads = document.querySelectorAll('.pad'); //grabs each individual pad

        this.playBtn = document.querySelector('.play');
        this.muteBtns = document.querySelectorAll('.mute');

        this.currentKick = './sounds/kick-classic.wav';
        this.currentSnare = './sounds/snare-808.wav';
        this.currentHihat = './sounds/hihat-analog.wav';
        this.currentPerc = './sounds/perc-808.wav';
        this.currentClap = './sounds/clap-808.wav';
        this.currentTom = './sounds/tom-808.wav';
        this.currentHorn = './sounds/horn-1.mp3';
        this.currentString = './sounds/string1.mp3';

        this.kickAudio = document.querySelector('.kick-sound'); //grabs audio tag/sound file for kick
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.percAudio = document.querySelector('.perc-sound');
        this.clapAudio = document.querySelector('.clap-sound');
        this.tomAudio = document.querySelector('.tom-sound');
        this.hornAudio = document.querySelector('.horn-sound');
        this.stringAudio = document.querySelector('.string-sound');

        this.index = 0; //will track the tracks

        this.bpm = 150;

        this.isPlaying = null;

        this.selects = document.querySelectorAll('select');

        this.tempoChange = document.querySelector('.tempo-change');
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
                if (bar.classList.contains('string-pad')) {
                    this.stringAudio.currentTime = 0;
                    this.stringAudio.play();
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
    changeSound(e){ //want to grab event
        // console.log(e); //will log event
        const selectionName = e.target.name;
        const selectionValue = e.target.value; //will return actual source (sound file in sounds directory)
        // console.log(selectionName); //ensuring selection of proper track
        switch(selectionName){ //checking which track is clicked on, then ensure source is whatever value is in that input
            case "kick-select":
                this.kickAudio.src = selectionValue;
                break;
            case "snare-select":
                this.snareAudio.src = selectionValue;
                break;
            case "hihat-select":
                this.hihatAudio.src = selectionValue;
                break;
            case "perc-select":
                this.percAudio.src = selectionValue;
                break;
            case "clap-select":
                this.clapAudio.src = selectionValue;
                break;
            case "tom-select":
                this.tomAudio.src = selectionValue;
                break;
            case "horn-select":
                this.hornAudio.src = selectionValue;
                break;
            case "string-select":
                this.stringAudio.src = selectionValue;
                break;
        }
    }
    mute(e){
        // console.log(e);
        const muteIndex = e.target.getAttribute('data-track');
        e.target.classList.toggle('active');
        if(e.target.classList.contains('active')){ // depending on data-track number set in html, mute target audio; if active, mute it
            switch(muteIndex) {
                case "0":
                    this.kickAudio.volume = 0;
                    break;
                case "1":
                    this.snareAudio.volume = 0;
                    break;
                case "2":
                    this.hihatAudio.volume = 0;
                    break;
                case "3":
                    this.percAudio.volume = 0;
                    break;
                case "4":
                    this.clapAudio.volume = 0;
                    break;
                case "5":
                    this.tomAudio.volume = 0;
                    break;
                case "6":
                    this.hornAudio.volume = 0;
                    break;
                case "7":
                    this.stringAudio.volume = 0;
                    break;
            }
        } else {
            switch(muteIndex){ // if muted, change target audio to have value
                case "0":
                    this.kickAudio.volume = 1;
                    break;
                case "1":
                    this.snareAudio.volume = 1;
                    break;
                case "2":
                    this.hihatAudio.volume = 1;
                    break;
                case "3":
                    this.percAudio.volume = 1;
                    break;
                case "4":
                    this.clapAudio.volume = 1;
                    break;
                case "5":
                    this.tomAudio.volume = 1;
                    break;
                case "6":
                    this.hornAudio.volume = 1;
                    break;
                case "7":
                    this.stringAudio.volume = 1;
                    break;
            }
        }
    }
    changeTempo(e){
        // console.log(e);
        const tempoText = document.querySelector('.tempo-nr');
        this.bpm = e.target.value; //change value of bpm
        tempoText.innerText = e.target.value; //change text of selected tempo
    }
    updateTempo(){
        clearInterval(this.isPlaying); //resetting
        this.isPlaying = null; // if interval not cleared and restarted, bpm will not update
        const playBtn = document.querySelector('.play');
        if (playBtn.classList.contains('active')){ // if play button NOT active, tracks will not start even if tempo being changed
            this.start(); // runs again after reset
        }
    }
}

const drumKit = new Kit();

// Event Listeners:

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

drumKit.selects.forEach(select => {
    select.addEventListener('change', function(e){ //need call-back function here otherwise it will automatically be invoked
        drumKit.changeSound(e);
    });
});

drumKit.muteBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        drumKit.mute(e);
    })
});

drumKit.tempoChange.addEventListener('input', function(e){ //'input' if logged will show multiple times; 'change' will only show when click is let go
    drumKit.changeTempo(e);
});

drumKit.tempoChange.addEventListener('change', function(e){ //'input' if logged will show multiple times; 'change' will only show when click is let go
    drumKit.updateTempo(e);
});