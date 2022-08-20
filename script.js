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
        <audio src="mp3/${song.Play}" id="audio" class="audio"></audio>
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
            <button id="volume" class = "volume">
                <i class="fa-solid fa-volume-off"></i>
            </button>
        </div>
            
      </div>
      </div>
    `
  }

function wrapper(){
const playBtn = document.querySelectorAll('.play-btn')
const audio = document.querySelectorAll('.audio')
const progress = document.querySelectorAll('.progress-bar')
const musicContainer = document.querySelectorAll('.music-container')
const progressWrapper = document.querySelector('.progress-wrapper')
const volume = document.querySelectorAll('.volume')
const volumeWrapper = document.querySelector('.volume-wrapper')

  


for(let i = 0; i < playBtn.length; i++){
  audio[i].volume = 0.2
  playBtn[i].addEventListener('click', () => {
    if(playBtn[i].querySelector('i.fas').classList.contains('fa-play')){
    playBtn[i].querySelector('i.fas').classList.remove('fa-play')
    playBtn[i].querySelector('i.fas').classList.add('fa-pause')
    
    audio[i].play()
    }else {
    playBtn[i].querySelector('i.fas').classList.add('fa-play')
    playBtn[i].querySelector('i.fas').classList.remove('fa-pause')
    audio[i].pause()
    }
  })
}


  for(let i = 0; i < volume.length; i++){
    volume[i].addEventListener('click', () => {
      if(volume[i].querySelector('i.fa-solid').classList.contains('fa-volume-off')){
        volume[i].querySelector('i.fa-solid').classList.add('fa-volume-low')
        volume[i].querySelector('i.fa-solid').classList.remove('fa-volume-off')
        audio[i].volume = 0.7
      }else if(volume[i].querySelector('i.fa-solid').classList.contains('fa-volume-low')){
        volume[i].querySelector('i.fa-solid').classList.add('fa-volume-high')
        volume[i].querySelector('i.fa-solid').classList.remove('fa-volume-low')
        audio[i].volume = 1
      }
      else if(volume[i].querySelector('i.fa-solid').classList.contains('fa-volume-high')){
        volume[i].querySelector('i.fa-solid').classList.add('fa-volume-off')
        volume[i].querySelector('i.fa-solid').classList.remove('fa-volume-high')
        audio[i].volume = 0.4
      }
    
    })
  }

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    bar = e.srcElement.parentElement.children[2].firstElementChild
    
    bar.style.width = `${progressPercent}%`
  
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    
    audio.currentTime = (clickX / width) * duration
}

  audio.forEach(item => {
    item.addEventListener('timeupdate', updateProgress)
  })


progressWrapper.addEventListener('click', setProgress)

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

topMV.addEventListener('click', slowDown)
myTop.addEventListener('click', slowDown)

backToTop.addEventListener('click',resetScroll )