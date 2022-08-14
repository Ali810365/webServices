const playBtn = document.querySelector('#play')
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