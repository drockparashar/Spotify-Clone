let songIndex=1;
let audioElement= new Audio("songs/"+songIndex+".mp3")
let masterPlay= document.getElementById("masterplay")
let progress=document.getElementById("progress-el")
let next=document.getElementById("forward")
let previous=document.getElementById("backward")
let songItem=Array.from(document.getElementsByClassName("design"))



let songList=[
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo - Huma-Huma", songPath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]", songPath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]", songPath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Janji - Heroes Tonight [NCS Release]", songPath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/9.mp3", coverPath:"covers/8.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", songPath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

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
    }
    else
    {
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
    }
})

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
        console.log(e)
        makeAllPlays()
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        let songId=e.target.id
        console.log(songId)
        audioElement.src="songs/"+songId+".mp3"
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
    }

    )
)
// next.addEventListener("click",()=>
// {
//     console.log("HII")
//     if(songIndex<=10)
//     {
//         songIndex+=1
//         audioElement.duration=0
//         audioElement.play()
        
//     }
//     else
//     {
//         songIndex=1
//         audioElement.duration=0
//         audioElement.play()
//     }
// })