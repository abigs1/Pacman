//Fer abre y cierra la boca:
const abierto = document.getElementById("abierto");
const cerrado = document.getElementById("cerrado");
const intro = new Audio("intro.mp3");

abierto.style.display = "none"; //modifica css desde js

setInterval(()=>{if(abierto.style.display == "none"){
    abierto.style.display = "block";
    cerrado.style.display = "none";
}else{
    abierto.style.display = "none";
    cerrado.style.display = "block";
}}, 400)


//Abi se refleja
const fantasmas = document.getElementsByClassName("fantasmas");


setInterval(() => {
  for(let i = 0; i<fantasmas.length; i++){
    if(fantasmas[i].style.transform == ""){
        fantasmas[i].style.transform = "scaleX(-1)";
    }else{fantasmas[i].style.transform = "";}

}
}, 160);



function play(){
    window.location.replace("index.html")
}
function playIntro(){
    intro.play();
}
