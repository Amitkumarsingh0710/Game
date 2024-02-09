let gameSeq = [];
let userSeq = [];
let btns = ["blue","red","orange","brown"];
let start = false; 
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress" , function(){
  if(start == false){
    console.log("game has started");
    start = true;
  }
  levelup();
 
});

// for generating flash while clicking on the button--->
function gameFlash(btn){
    btn.classList.add("flash"); // adding new class to the button the class name is flash.
    setTimeout(
        function(){
          btn.classList.remove("flash");
        },300); // time for flash is set to 0.3sec.
}
function  userFlash(btn){
  btn.classList.add("userflash"); // adding new class to the button the class name is userflash.
  setTimeout(
      function(){
        btn.classList.remove("userflash");
      },500); // time for flash is set to 0.5sec.
}

 // matching array indexes value of both the arrays. --->
function checkSeq(idx){
  if (gameSeq[idx] == userSeq[idx]){ 
    console.log("same sequence");
    if(gameSeq.length == userSeq.length)
  // console.log("same sequence");
     levelup(); 
  }
  else{
    h2.innerHTML = `GAME OVER ! YOUR SCORE WAS <b> ${level} <b> <br> PRESS ANY KEY TO START THE GAME`;
    let backgrd= document.querySelector("body");
    backgrd.style.backgroundColor = "red"
    setTimeout(function(){
      backgrd.style.backgroundColor = "white";
    },500);
    resetGame();
  }
}


function levelup(){
  userSeq  = [];
  level++;
  h2.innerText = `Level  ${level}`;
  let randomindex = Math.floor(Math.random()*3); // random index number generaion.
  let randomcolor = btns[randomindex]; // random color assigned according to the random number generated.
  let randombtn = document.querySelector(`.${randomcolor}`); // class will we selected depending on the random color .generated
  console.log( randomindex );
  console.log( randomcolor );
  console.log(randombtn);
  gameSeq.push(randomcolor );
   console.log(gameSeq);
   gameFlash(randombtn); // flash generated on pressing any key on the keyboard the button by the user.
  
} 


function btnPress( ){
   //console.log("button was pressed");
  // console.log(this);
   let btn = this; // this here points to the button clicked.
   userFlash(btn); // flash generated on clicking the button by the user.
   let color = btn.getAttribute("id"); // get the value of id for the button clicked.
   userSeq.push(color);
  console.log("usersequence length is :"+userSeq.length);
   checkSeq(userSeq.length - 1); // usersequence length is subtracted by 1 because array index start from zero.
}


function levelup(){
    userSeq  = [];
    level++;
    h2.innerText = `Level  ${level}`;
    let randomindex = Math.floor(Math.random()*3); // random index number generaion.
    let randomcolor = btns[randomindex]; // random color assigned according to the random number generated.
    let randombtn = document.querySelector(`.${randomcolor}`); // class will we selected depending on the random color .generated
    console.log( randomindex );
    console.log( randomcolor );
    console.log(randombtn);
    gameSeq.push(randomcolor );
     console.log(gameSeq);
     gameFlash(randombtn); // flash generated on pressing any key on the keyboard the button by the user.
} 


let allbtns = document.querySelectorAll(".btn");
     for (btn of allbtns){
       btn.addEventListener("click", btnPress); // we have applied eventlistener to all the buttons with class btn / now on clicking the particular button the btnPress function will be invoked.
      }


 // RESTING THE GAME FROM START-->
      function resetGame(){ 
        start = false;
         gameSeq = [];
         userSeq = [];
         level = 0;
      }