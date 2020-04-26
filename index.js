
document.addEventListener("DOMContentLoaded",()=>{
let playerOneScore = 0;
let playerTwoScore = 0;
document.getElementById("PlayerOneScore").innerHTML = playerOneScore;
document.getElementById("PlayerTwoScore").innerHTML = playerTwoScore;
let width = 50;
let playerOneLine = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,2451,2452,2453,2454,2455,2456,2457,2458,2459,2460,2461,2462,2463,2464,2465,2466,2467,2468,2469,2470,2471,2472,2473,2474];
let playerTwoLine = [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,2476,2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498];
let midLine = [];
let ball = 1175;
let direction = Math.floor(Math.random());
let move = 0;
let playerOne = [951,1001,1051,1101,1151,1201,1251,1301];
let playerTwo = [998,1048,1098,1148,1198,1248,1298,1348];



for(let i = 0; i <2500; i++){
  let block = document.createElement("div");
  block.setAttribute("class","block");
  block.setAttribute("id", i);
  document.getElementById("grid").append(block);
}



for(let j = 25; j < 2500; j+=50){
  document.getElementById(j).setAttribute("class","line");
  midLine.push(j);
}

document.getElementById(ball).setAttribute("class","ball");

for(let k = 0; k < 2500; k+=50){
  playerOneLine.push(k);
}

for(let l = 49; l < 2500; l+=50){
  playerTwoLine.push(l);
}

function renderPlayers(){
  for(let i of playerOne){
    document.getElementById(i).setAttribute("class","playerOne");
  }
  for(let i of playerTwo){
    document.getElementById(i).setAttribute("class","playerTwo");
  }
}

renderPlayers();

function moveLeft(dir){
  switch(dir){
   case 0:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = (ball-1)-width;
   document.getElementById(ball).setAttribute("class","ball");

   break;

   case 1:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = ball-1;
   document.getElementById(ball).setAttribute("class","ball");
   break;

   case 2:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = (ball-1) + width;
   document.getElementById(ball).setAttribute("class","ball");
   break;

   default:
   break;
  }
}

function moveRight(dir){
  switch(dir){
   case 0:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = (ball+1)-width;
   document.getElementById(ball).setAttribute("class","ball");

   break;

   case 1:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = ball+1;
   document.getElementById(ball).setAttribute("class","ball");
   break;

   case 2:
   if(midLine.indexOf(ball)>-1){
     document.getElementById(ball).setAttribute("class","line");
   }
   else{
     document.getElementById(ball).setAttribute("class","block");
   }
   ball = (ball+1) + width;
   document.getElementById(ball).setAttribute("class","ball");
   break;

   default:
   break;
  }
}


function movement(e){
 switch(e.keyCode){
   case 87:
   //alert("player one up");
   if(playerOne[0]-100<0){
     renderPlayers();
   }
   else{
     playerOne.unshift(playerOne[0]-width);
     let val = playerOne.pop();
     document.getElementById(val).setAttribute("class","block");
     console.log(playerOne);
     renderPlayers();
   }
   break;

   case 83:
   //alert("player one up");
   if(playerOne[7]+100>2499){
     renderPlayers();
   }
   else{
     playerOne.push(playerOne[playerOne.length - 1]+width);
     let val2 = playerOne.shift();
     document.getElementById(val2).setAttribute("class","block");
     console.log(playerOne);
     renderPlayers();
   }
   break;

   case 68:
   //alert("player one up");
   if(midLine.indexOf(playerOne[0]+2) > - 1){
     renderPlayers();
   }
   else{
     for(let i of playerOne){
       document.getElementById(i).setAttribute("class","block");
     }

     playerOne = playerOne.map((elem)=>elem+1);
     for(let i of playerOne){
       document.getElementById(i).setAttribute("class","playerOne");
     }
     console.log(playerOne);
     renderPlayers();
   }
   break;

   case 65:
   //alert("player one up");
   if(playerOneLine.indexOf(playerOne[0]-1) > - 1){
     renderPlayers();
   }
   else{
     for(let i of playerOne){
       document.getElementById(i).setAttribute("class","block");
     }

     playerOne = playerOne.map((elem)=>elem-1);
     for(let i of playerOne){
       document.getElementById(i).setAttribute("class","playerOne");
     }
     console.log(playerOne);
     renderPlayers();
   }
   break;


   case 38:
   //alert("player two up");
   if(playerTwo[0]-100<0){
     renderPlayers()
   }
   else{
     playerTwo.unshift(playerTwo[0]-width);
     let val3 = playerTwo.pop();
     document.getElementById(val3).setAttribute("class","block");
     console.log(playerTwo);
     renderPlayers();
   }

   break;

   case 40:
   //alert("player two down");
   if(playerTwo[7]+100>2499){
     renderPlayers()
   }
   else{
   playerTwo.push(playerTwo[playerTwo.length - 1]+width);
   let val4 = playerTwo.shift();
   document.getElementById(val4).setAttribute("class","block");
   console.log(playerTwo);
   renderPlayers();
   }
   break;

   case 37:
   //alert("player one up");
   if(midLine.indexOf(playerTwo[0]-2) > - 1){
     renderPlayers();
   }
   else{
     for(let i of playerTwo){
       document.getElementById(i).setAttribute("class","block");
     }

     playerTwo = playerTwo.map((elem)=>elem-1);
     for(let i of playerTwo){
       document.getElementById(i).setAttribute("class","playerTwo");
     }
     console.log(playerTwo);
     renderPlayers();
   }
   break;

   case 39:
   //alert("player one up");
   if(playerTwoLine.indexOf(playerTwo[0]+1) > - 1){
     renderPlayers();
   }
   else{
     for(let i of playerTwo){
       document.getElementById(i).setAttribute("class","block");
     }

     playerTwo = playerTwo.map((elem)=>elem+1);
     for(let i of playerTwo){
       document.getElementById(i).setAttribute("class","playerTwo");
     }
     console.log(playerTwo);
     renderPlayers();
   }
   break;


   default:
   break;

 }

}

setInterval(()=>{

  if(playerOne.indexOf(ball-1)>-1 || playerOne.indexOf(ball)>-1 || playerOne.indexOf(ball + 1)>-1){
    console.log("Hit");
    move = 0;
    if(playerOne.indexOf(ball-1)<3){
      direction = 2;
    }
    else if(playerOne.indexOf(ball-1)==3||playerOne.indexOf(ball+1)==4){
      direction = 1;
    }
    else if(playerOne.indexOf(ball-1)>4){
      direction = 0;
    }
  }

  else if(playerTwo.indexOf(ball+1)>-1 || playerTwo.indexOf(ball)>-1 || playerTwo.indexOf(ball - 1)>-1){
    console.log("Hit");
    move = 1;
    if(playerTwo.indexOf(ball+1)<3){
      direction = 2;
    }
    else if(playerTwo.indexOf(ball+1)==3||playerTwo.indexOf(ball+1)==4){
      direction = 1;
    }
    else if(playerTwo.indexOf(ball+1)>4){
      direction = 0;
    }
  }
  if(playerOneLine.indexOf(ball)>-1){
    document.getElementById(ball).setAttribute("class","block");
    ball = 1175;
    move = 0;
    playerTwoScore++;
    document.getElementById("PlayerTwoScore").innerHTML = playerTwoScore;

  }
  if(playerTwoLine.indexOf(ball)>-1){
    document.getElementById(ball).setAttribute("class","block");
    ball = 1175;
    move = 1;
    playerOneScore++;
    document.getElementById("PlayerOneScore").innerHTML = playerOneScore;
  }
  if(ball>2499){
    ball = 1175;
    move = 1;

  }
  if(move == 0){
    moveRight(direction)
  }
  else{
    moveLeft(direction)
  }

}, 300)

document.addEventListener("keyup",movement)
})
