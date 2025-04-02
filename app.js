let userSeq = [];
let gameSeq = [];

let btns = ["one","two","three","four"];
let started = false;
let level = 0;
let maxscore = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function (){
    if (started==false) {
        console.log("game started");
        started = true;
        levelUp();
    }
    
});

function gmaeFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}
function userFlash(btn){

    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `L   evel${level}`;

    let randIdx = Math.floor(Math.random()*3)+1;
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    gameSeq.push(randCol);
    console.log(gameSeq);
    gmaeFlash(randBtn);
}

let allBtns  = document.querySelectorAll(".btn");

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkAns(userSeq.length-1   );
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp ,500);
        }

    }else{
        
        if(level>maxscore){
            maxscore = level;
        }
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br>peess any key to restart Game <br>your highest score is : ${maxscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor= "white";
        } ,200);
        reset();
    }
}
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}