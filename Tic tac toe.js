//console.log("hello");

// X or O
// change X and O
// check if the person has won or not

let player = 'X';
let gameOver = false;

const changePlayer = () => {
    return player === "X" ? "0" : "X"; 
}

const ifWon = () => {
    // access the box text
    let boxTexts = document.getElementsByClassName("boxText");

    let winPos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
winPos.forEach((element) => {
    if(boxTexts[element[0]].innerText === boxTexts[element[1]].innerText && 
        boxTexts[element[1]].innerText === boxTexts[element[2]].innerText &&
        boxTexts[element[0]].innerText !== ""){
            document.getElementById("result").innerText = boxTexts[element[0]].innerText + " WON";
            gameOver = true;
            //document.querySelector("img").style.width = "100px";
        }
    });
};

const draw = () => {
    if(c==9){
        document.getElementById("result").innerText = "DRAW!! You Both are Losers :)";
        gameOver = true; 
    }
}

let boxes = document.getElementsByClassName("box");
var c = 0;
Array.from(boxes).forEach((box) => {
   let boxText = box.querySelector(".boxText");
   box.addEventListener("click", () => {
    if(boxText.innerText === "" && !gameOver){
        c++;
        boxText.innerText = player;
        player = changePlayer();
        draw();
        ifWon();
        if(!gameOver){
            document.getElementsByClassName("player")[0].innerText = player;  
        }
        // else {
        //     document.getElementsByClassName("player")[0].innerText = "Game is Over!!!!!"; 
        // }
    }
   });
});

// reset button
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");

    boxTexts.forEach((boxText) => {
        boxText.innerText = "";
    });
    player = "X";
    gameOver = false;
});