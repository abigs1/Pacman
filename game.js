let pacmanMatrix = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],
  [0,4,0,5,5,0,2,0,5,5,5,0,2,0,0,2,0,5,5,5,0,2,0,5,5,0,4,0],
  [0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],
  [0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],
  [0,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,2,2,0],
  [0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0],
  [5,5,5,5,5,0,2,0,0,0,0,0,1,0,0,1,0,0,0,0,0,2,0,5,5,5,5,5],
  [5,5,5,5,5,0,2,0,0,1,1,1,1,1,1,1,1,1,1,0,0,2,0,5,5,5,5,5],
  [5,5,5,5,5,0,2,0,0,1,0,0,0,1,1,0,0,0,1,0,0,2,0,5,5,5,5,5],
  [0,0,0,0,0,0,2,0,0,1,0,9,6,9,6,9,9,0,1,0,0,2,0,0,0,0,0,0],
  [7,1,1,1,1,1,2,1,1,1,0,9,9,9,9,9,9,0,1,1,1,2,1,1,1,1,1,7],
  [0,0,0,0,0,0,2,0,0,1,0,9,6,9,6,9,9,0,1,0,0,2,0,0,0,0,0,0],
  [5,5,5,5,5,0,2,0,0,1,0,0,0,0,0,0,0,0,1,0,0,2,0,5,5,5,5,5],
  [5,5,5,5,5,0,2,0,0,1,1,1,1,1,1,1,1,1,1,0,0,2,0,5,5,5,5,5],
  [5,5,5,5,5,0,2,0,0,1,0,0,0,0,0,0,0,0,1,0,0,2,0,5,5,5,5,5],
  [0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],
  [0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],
  [0,4,2,2,0,0,2,2,2,2,2,2,2,3,1,2,2,2,2,2,2,2,0,0,2,2,4,0],
  [0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],
  [0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],
  [0,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,2,2,0],
  [0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0],
  [0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
const mapaOriginal = JSON.parse(JSON.stringify(pacmanMatrix));

const wall = 0;
const free = 1;
const dot = 2;
const fers = 3;
const superdot = 4;
const black = 5;
const fantasma = 6;
const portal = 7;
const portal2 = 8;
const casafantasma = 9;



let ghosts = [];

var canvas = document.getElementById("canva");
var ctx = canvas.getContext("2d"); //for the
var showScore = document.getElementById("actualScore");
var showVidas = document.getElementById("actualLives");
let normalState = true; //cuando esté true. los fantasmas matan

var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var abierto =document.getElementById("open");
var cerrado =document.getElementById("closed");
var texto = document.getElementById("presiona");
var boton = document.getElementById("bat");
var gameover = document.getElementById("gameover");
var tux = document.getElementById("tux");
const inicio = new Audio("inicio.mp3");
const waka = new Audio("waka.mp3");
const gameoveraudio = new Audio("gameover.mp3");
const pierdevida = new Audio("pierdeVida.wav");
let fantasmas = [f1, f2, f3, f4];
let fIndex = 0;
let perdio = false;

var tamañoCuadrado = 24;
var tamañoFer = 35;
var filas = 30;
var columnas = 27;

let canMove = null;
let vidas = 3;
let score = 0;

let ferAbierto = true; // bandera para toggle

setInterval(() => {
showScore.textContent = ": " + score.toString();
}, 200);
setInterval(() => {
showVidas.textContent = ": " + vidas.toString();
}, 200);

let inicioPlayed = false;
let showLetras = true; //bandera para que se muestre el primer texto

document.addEventListener("keydown", () => {
    showLetras = false;
    
    if (!inicioPlayed) {
        inicio.play();
        inicioPlayed = true;
    }
});

//inicio sonido
function playInicio() {
  inicio.play();

}

function primerTexto() {
  if(showLetras == true){
    texto.style.display = "block";
  }else{
        texto.style.display = "none";
  }
    
}

function gameOver(){
      if(perdio== true){
    gameover.style.display = "block";
    boton.style.display ="block"
    gameoveraudio.play();
  }else{
        texto.style.display = "none";
        boton.style.display = "none";
  }
   
}

function wakaPlay() {
  waka.play();
}

setTimeout(() => {
        canMove = true;
        console.log("empieza el juego"); //timeout para que fer se pueda mover solo después de la música
    }, 7000);

window.onload = function () {
    encuentraFantasmas();
    playInicio();
    findFer();
    
    requestAnimationFrame(gameLoop);
};


//vamos a iterar las filas y col y dibujar un grid para practicar
function dibuja(){
    for(let fila = 0; fila < pacmanMatrix.length ; fila++){
    for(let col = 0; col <pacmanMatrix[fila].length ;col++){
        let valor = pacmanMatrix[fila][col];
        let x = col * tamañoCuadrado;
        let y = fila * tamañoCuadrado;
          
        if (valor == 0){
            ctx.strokeRect(x, y, 12, 12);
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "blue";       // set fill color
            ctx.fillRect(x, y, 9, 9);
        }
    }
}
    //dibuja puntos
    for(let fila = 0; fila < pacmanMatrix.length ; fila++){
    for(let col = 0; col <pacmanMatrix[fila].length ;col++){
        let valor = pacmanMatrix[fila][col];
        let puntosx = col * tamañoCuadrado;
        let puntosy = fila * tamañoCuadrado+10;
          
        if (valor == 2){
            ctx.font = "30px Arial";
            ctx.fillStyle = "yellow";
            ctx.fillText(".", puntosx, puntosy);
        }
    }  }
        //dibuja tux (powerpellet)
     for(let fila = 0; fila < pacmanMatrix.length ; fila++){
    for(let col = 0; col <pacmanMatrix[fila].length ;col++){
        let valor = pacmanMatrix[fila][col];
        let tuxx = col * tamañoCuadrado;
        let tuxy = fila * tamañoCuadrado;
          
        if (valor == 4){
            ctx.drawImage(tux, tuxx-6, tuxy-6, tamañoCuadrado+5, tamañoCuadrado+5);
            
        }
    }  }
    dibujaFantasmas();

     

}


//encontremos a fer
var filaFer = 0;
var colFer = 0;
function findFer(){
    for(let fila = 0; fila < pacmanMatrix.length ; fila++){
        for(let col = 0; col <pacmanMatrix[fila].length ;col++){
        let valor = pacmanMatrix[fila][col];
        if(valor == 3){
            filaFer = fila;
            colFer = col;

        }

        }}}

function dibujaFer(){
                console.log(colFer, filaFer, "pedo");
                let x = colFer * tamañoCuadrado-15;
                let y = filaFer * tamañoCuadrado-15;

                // redraw FER
                ctx.drawImage(
                    ferAbierto ? abierto : cerrado,
                    x, y,
                    tamañoFer,
                    tamañoFer
                );
            
        }


var direction = null;
let ferDireccion = "izquierda";
let lastTime = 0;
let animTimer = 0;
let moveTimer = 0;
const moveDelay = 150; 


//cuando se presiona una letra, la dirección cambia
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        direction = "izquierda";
        ferDireccion = "izquierda";
    }
    if (event.key === "ArrowRight") {
        direction = "derecha";
        ferDireccion = "derecha";
    }
    if (event.key === "ArrowUp") direction = "arriba";
    if (event.key === "ArrowDown") direction = "abajo";
});
function update() {
    
    if (!direction) return;
    if(!canMove) return;

    let nuevaFila = filaFer;
    let nuevaCol = colFer;

    if (direction === "izquierda") nuevaCol--;
    if (direction === "derecha") nuevaCol++;
    if (direction === "arriba") nuevaFila--;
    if (direction === "abajo") nuevaFila++;

   if (pacmanMatrix[nuevaFila][nuevaCol] !== wall) {
    
    //fer se teletransporta
    if (pacmanMatrix[nuevaFila][nuevaCol] === portal) {

        for (let i = 0; i < pacmanMatrix.length; i++) { 
            for (let j = 0; j < pacmanMatrix[0].length; j++) { 

                if (pacmanMatrix[i][j] === portal &&
                    (i !== nuevaFila || j !== nuevaCol)
                ) {
                    if(j==0){ //fer está entrando por portal2(derecha) y saliendo por izqueda 
                    filaFer = i;
                    colFer = j+1;
                    pacmanMatrix[filaFer][colFer] = fers; 
                    
                    return;
                    }else{//entra por la izquierda, j es el portal 2, entonces se aparece
                    filaFer = i;
                    colFer = j-1;
                    pacmanMatrix[filaFer][colFer] = fers; 

                    }} }}
        return;
    }
    pacmanMatrix[filaFer][colFer] = free;
    if(pacmanMatrix[nuevaFila][nuevaCol] == dot)
        score += 10;
   ;
    if(pacmanMatrix[nuevaFila][nuevaCol] == superdot)
        score += 50;
        normalState= false;
        goCrazy();
        console.log("normal state" + normalState);
   ;
   if(pacmanMatrix[nuevaFila][nuevaCol] != fantasma){
    filaFer = nuevaFila;
    colFer = nuevaCol;
    pacmanMatrix[filaFer][colFer] = fers;
    wakaPlay();//reproduce sonido después de avanzar
   }else{
    normalState = false;
    vidas--;
    pierdeVidas();
   }
}

    }

function pierdeVidas(){
    if(vidas > 0){
        pierdevida.play();
        restart();

    }else{
        perdio = true;
        gameOver();
    }
    
}

function dibujaFerFinal(){
    let x = colFer * tamañoCuadrado - 15;
    let y = filaFer * tamañoCuadrado - 15;

    if (ferDireccion === "derecha") {
        ctx.save();
        ctx.translate(x + tamañoFer, y);
        ctx.scale(-1, 1);
        ctx.drawImage(ferAbierto ? abierto : cerrado, 0, 0, tamañoFer, tamañoFer);
        ctx.restore();
    } else {
        ctx.drawImage(ferAbierto ? abierto : cerrado, x, y, tamañoFer, tamañoFer);
    }
}
function gameLoop(time) {
    const delta = time - lastTime;
    lastTime = time;

   
    animTimer += delta;
    if (animTimer > 300) {
        ferAbierto = !ferAbierto;
        animTimer = 0;
    }

    
    moveTimer += delta;
    if (moveTimer > moveDelay && perdio == false) {
        update();
        mueveFantasmas();
        moveTimer = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fIndex = 0;
    primerTexto();
    dibuja();
    dibujaFerFinal();
    


    requestAnimationFrame(gameLoop);
}

function restart() {
    pacmanMatrix = JSON.parse(JSON.stringify(mapaOriginal));

    direction = null;
    canMove = false;
    normalState = true;
    ferAbierto = true;

    moveTimer = 0;
    animTimer = 0;

    perdio = false;

    findFer();             
    encuentraFantasmas();   

    setTimeout(() => {
        canMove = true;
    }, 800);
}

function volverInicio(){
    window.location.replace("home.html")
}

function goCrazy(){
    if(normalState == false){
        //implementar
    }
}




//vamos a seleccionar una celda para que vaya en fantasma
function encuentraTarget() {
    let fila, col;

    do {
        fila = Math.floor(Math.random() * pacmanMatrix.length);
        col = Math.floor(Math.random() * pacmanMatrix[0].length);
    } while (
        pacmanMatrix[fila][col] !== free &&
        pacmanMatrix[fila][col] !== dot
    );

    return { fila, col };
}function encuentraFantasmas() {
    ghosts = [];
    let i = 0;
    for (let fila = 0; fila < pacmanMatrix.length; fila++) {
        for (let col = 0; col < pacmanMatrix[fila].length; col++) {
            if (pacmanMatrix[fila][col] === fantasma ) {
                ghosts.push({
                    y: fila,
                    x: col,
                    debajo: free,
                    tipo: "random",
                    direccionActual: null,
                });
                i++;
            }
        }
    }
}

function avanzaFantasma(ghost) {
    let currentPos = { fila: ghost.y, col: ghost.x };
    const valorActual = pacmanMatrix[currentPos.fila][currentPos.col];

    const movimientos = [
        { fila: currentPos.fila - 1, col: currentPos.col, dir: "arriba" },
        { fila: currentPos.fila + 1, col: currentPos.col, dir: "abajo" },
        { fila: currentPos.fila, col: currentPos.col - 1, dir: "izquierda" },
        { fila: currentPos.fila, col: currentPos.col + 1, dir: "derecha" }
    ];

    let movValidos = movimientos.filter(m => 
        m.fila >= 0 && m.fila < pacmanMatrix.length &&
        m.col >= 0 && m.col < pacmanMatrix[0].length &&
        pacmanMatrix[m.fila][m.col] !== wall &&
        pacmanMatrix[m.fila][m.col] !== portal &&
        pacmanMatrix[m.fila][m.col] !== fantasma 
    );

    if (movValidos.length === 0) return;

    let nextMove;

    if (valorActual === casafantasma || currentPos.fila === 13) {
        let targetExit = { fila: 11, col: 13 }; 
        nextMove = movValidos.reduce((prev, curr) => {
            let distPrev = Math.abs(prev.fila - targetExit.fila) + Math.abs(prev.col - targetExit.col);
            let distCurr = Math.abs(curr.fila - targetExit.fila) + Math.abs(curr.col - targetExit.col);
            return distCurr < distPrev ? curr : prev;
        });
    } else {
        let forwardMoves = movValidos.filter(m => m.dir !== getOppositeDir(ghost.direccionActual));
        let choices = forwardMoves.length > 0 ? forwardMoves : movValidos;
        nextMove = choices[Math.floor(Math.random() * choices.length)];
    }

    pacmanMatrix[ghost.y][ghost.x] = ghost.debajo; 
    ghost.debajo = pacmanMatrix[nextMove.fila][nextMove.col]; 
    
    if (ghost.debajo === fers) {
        vidas--;
        pierdeVidas();
        return;
    }

    ghost.y = nextMove.fila;
    ghost.x = nextMove.col;
    ghost.direccionActual = nextMove.dir;
    pacmanMatrix[ghost.y][ghost.x] = fantasma;
}
function getOppositeDir(dir) {
    if (dir === "arriba") return "abajo";
    if (dir === "abajo") return "arriba";
    if (dir === "izquierda") return "derecha";
    if (dir === "derecha") return "izquierda";
    return null;
}

function mueveFantasmas() {
    for (let ghost of ghosts) {
        avanzaFantasma(ghost);
    }
}
function dibujaFantasmas() {
    for (let i = 0; i < ghosts.length; i++) {
        let ghost = ghosts[i];
        let ghostImg = fantasmas[i % fantasmas.length]; 
        let x = ghost.x * tamañoCuadrado;
        let y = ghost.y * tamañoCuadrado - 6;
        ctx.drawImage(ghostImg, x, y, tamañoCuadrado + 5, tamañoCuadrado + 5);
    }
}
