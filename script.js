const topMV = document.querySelector('#top')
const myTop = document.querySelector('#myTop')
const backToTop = document.querySelector('#mainMenu')

function musicTemplate(song){
    
    return `
    <div class="song-wrapper">
        <div class="song">
            <div class="pic"><img src="thumbnails/${song.Image}" /></div>
            <div class="song-details">
            <b>Title</b>: ${song.Title} <br />
            <b>Artist</b>: ${song.Artist}<br />
            <b>Year</b>: ${song.Year} <br />
            <b>Views</b>: ${song.Views} <br />
            </div>
            <div class="music-container">
        <audio src="mp3/${song.Play}" id="audio"></audio>
        <div class="buttons">
            <button id="play" class="play-btn">
                <i class="fas fa-play"></i>
            </button>
        </div>
        
        <div class="progress-wrapper">
            <div class="progress-bar">
        </div>
        </div>

        <div class="volume-wrapper">
            <button id="volume">
                <i class="fa-solid fa-volume-off"></i>
            </button>
        </div>
            
      </div>
      </div>
  
    `
  
  }


function wrapper(){
const playBtn = document.querySelector('.play-btn')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress-bar')
const musicContainer = document.querySelector('.music-container')
const progressWrapper = document.querySelector('.progress-wrapper')
const volume = document.querySelector('#volume')
const volumeWrapper = document.querySelector('.volume-wrapper')


function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.volume = 0.2
    audio.play()
}

volumeWrapper.classList.add('low')

function volumeMid(){
    volumeWrapper.classList.add('medium')
    volume.querySelector('i.fa-solid').classList.add('fa-volume-low')
    volume.querySelector('i.fa-solid').classList.remove('fa-volume-off')
    volumeWrapper.classList.remove('low')
    audio.volume = 0.5
}

function volumeHigh(){
    volume.querySelector('i.fa-solid').classList.add('fa-volume-high')
    volume.querySelector('i.fa-solid').classList.remove('fa-volume-low')
    volumeWrapper.classList.remove('medium')
    audio.volume = 0.8
}

function volumeLow(){
    
    volume.querySelector('i.fa-solid').classList.add('fa-volume-off')
    volume.querySelector('i.fa-solid').classList.remove('fa-volume-high')
    volumeWrapper.classList.add('low')
    audio.volume = 0.2
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else {
        playSong()
    }
})

audio.addEventListener('timeupdate', updateProgress)

progressWrapper.addEventListener('click', setProgress)

volume.addEventListener('click', () => {
    const lowAudio = volumeWrapper.classList.contains('low')
    const medAudio = volumeWrapper.classList.contains('medium')


    if(lowAudio){
        volumeMid()
    }else if (medAudio){
        volumeHigh()
    }else {
        volumeLow()
    }
})



}
window.onscroll = function() {BtnDisplay()};
function BtnDisplay(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function resetScroll(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function slowDown(){
  setTimeout(wrapper, 1000)
}

topMV.addEventListener('click', slowDown);
myTop.addEventListener('click', slowDown);

backToTop.addEventListener('click',resetScroll );