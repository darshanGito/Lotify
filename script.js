console.log("Welcome to Lotify");
let songIndex = 0;
let audioEle = new Audio('songs/HuaMain.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {
    songName: "HuaMain",
    filePath: 'songs/HuaMain.mp3',
    coverPath: "img/cover2.jpg",
  },
  {
    songName: "Abrars entry",
    filePath: "songs/Abrars-Entry.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Dil Haareya",
    filePath: "songs/Dil Haareya.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Dil Tenu De Deta",
    filePath: "songs/Dil Tenu De Deta.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Heeriye",
    filePath: "songs/Heeriye.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Thumak Thumak Pahari",
    filePath: "songs/Thumak Thumak Pahari.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/HuaMain.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Thumak Thumak Pahari",
    filePath: "songs/Thumak Thumak Pahari.mp3",
    coverPath: "img/cover1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/HuaMain.mp3",
    coverPath: "img/cover1.jpg",
  },
]
songItems.forEach((element,i)=>{
  
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

})

  masterPlay.addEventListener('click',()=>{
  if(audioEle.paused || audioEle.currentTime<=0){
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioEle.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;


  }
})
audioEle.addEventListener('timeupdate',()=>{
  // console.log('timeupdate');
  progress = parseInt((audioEle.currentTime/audioEle.duration)*100);
  // console.log(progress);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
  audioEle.currentTime = myProgressBar.value * audioEle.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-cicle');
    element.classList.add('fa-play-cicle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', ()=>{
console.log(e.target);
makeAllPlays();
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
})
})