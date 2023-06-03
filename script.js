let songIndex=1;
let audioElement= new Audio("songs/"+songIndex+".mp3")
let masterPlay= document.getElementById("masterplay")
let progress=document.getElementById("progress-el")
let previous=document.getElementById("ahead")
let next=document.getElementById("back")
// console.log(next,previous,masterPlay)
let songItem=Array.from(document.getElementsByClassName("design"))
let songInfo=document.querySelector("songInfo")

let songList=[
    {songName:"Never Fold", songPath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Mehrma", songPath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Chawal", songPath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Kajra Re", songPath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Malang Sajna", songPath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Downers At Dusk", songPath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Spain", songPath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Mi Amor", songPath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Cupid (Twin Version)", songPath:"songs/9.mp3", coverPath:"covers/8.jpg"},
    {songName:"Sadi Gali", songPath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

function plpau(n1)
{
    songIndex=n1
    makeAllPlays()
    let en1=document.getElementById(n1.toString())
    en1.classList.remove("fa-circle-play")
    en1.classList.add("fa-circle-pause")

}

songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songList[i].coverPath
    element.getElementsByClassName("name")[0].textContent=songList[i].songName
})  

masterPlay.addEventListener("click", ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        let mp=document.getElementById(songIndex)
        mp.classList.remove("fa-circle-pause","fa-circle-play")
        mp.classList.add("fa-circle-pause")
    }
    else
    {
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        let mp=document.getElementById(songIndex)
        mp.classList.remove("fa-circle-pause","fa-circle-play")
        mp.classList.add("fa-circle-play")
    }
    }
)

audioElement.addEventListener("timeupdate",()=>
{
    let time =parseInt((audioElement.currentTime/audioElement.duration)*100)
    progress.value=time
})

progress.addEventListener("change",()=>
{
    audioElement.currentTime=(progress.value*audioElement.duration)/100
})

const makeAllPlays= ()=>
{
    Array.from(document.getElementsByClassName("play")).forEach((element)=>
    {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName("play")).forEach((element)=>
    element.addEventListener("click",(e)=>
    {
        makeAllPlays()
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        songIndex=e.target.id
        audioElement.src="songs/"+songIndex+".mp3"
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        // songInfo.textContent=songList.songName[songIndex]
    }

    )
)

next.addEventListener("click",()=>
{
    if(songIndex<=10)
        songIndex+=1

    else
        songIndex=1

    plpau(songIndex)
    audioElement.src="songs/"+songIndex+".mp3"
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    // songInfo.textContent=songList.songName[songIndex]
})

previous.addEventListener("click",()=>
{
    if(songIndex>1)
        songIndex-=1

    else
        songIndex=10

    plpau(songIndex)
    audioElement.src="songs/"+songIndex+".mp3"
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
    // songInfo.textContent=songList.songName[songIndex]
})