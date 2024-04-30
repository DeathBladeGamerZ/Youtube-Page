let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".newbtn");
let winnerdiv = document.querySelector(".winner");
let winmsg = document.querySelector(".winmsg");
let tO = document.querySelector("#turnO");
let tX = document.querySelector("#turnX");
let turnO = true;
let turnX = false;
const winp = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        box.style.color ="#FFB238";
        box.style.backgroundColor ="#2B061E";
        tO.classList.add("hide");
        tX.classList.remove("hide");
        turnX = true;
        turnO = false;
        
      } else if (turnX) {
        //playerX
        box.innerText = "X";
        box.style.color ="#623CEA";
        box.style.backgroundColor ="#053225";
        tX.classList.add("hide");
        tO.classList.remove("hide");
        turnX = false;
        turnO = true;
                
      }
      box.disabled = true;
      count++;
       let isWinner = check();
       if (count === 9 && !isWinner){
        draw();
       }
    }
);})

const resetgame = () => {
  turnO = true;
  enablebtn();
  count = 0;
  winnerdiv.classList.add("hide");
  tX.classList.add("hide");
  tO.classList.remove("hide");
} 
const enablebtn = () => {
  for ( let box of boxes){
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor ="#A8DADC";
  }
}
const disablebtn = () => {
  for (let box of boxes)
  {
    box.disabled = true;
    
  }
}
const showWinner =(winner) => {
  winmsg.innerText = `Congratulations, Winner is ${winner}`;
  winnerdiv.classList.remove("hide");
  disablebtn();
}
const check = () => {
  for(let pattern of winp)
  {
    console.log(pattern);
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != ""){
      if (pos1 == pos2 && pos2 == pos3)
      {
      console.log("winner",pos1);
      showWinner(pos1);
      };
    }
    
  };
};
const draw =() => {
    winmsg.innerText = "!!Draw!!"
    winnerdiv.classList.remove("hide");
    disablebtn();
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);