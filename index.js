
var diceNo1=Math.floor(Math.random()*6 + 1);
var diceNo2=Math.floor(Math.random()*6 +1);

if(diceNo1===1)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice1.png");
else if(diceNo1===2)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice2.png");
else if(diceNo1===3)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice3.png");
else if(diceNo1===4)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice4.png");
else if(diceNo1===5)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice5.png");
else if(diceNo1===6)
    document.querySelectorAll(".img1")[0].setAttribute("src","./dice6.png");
else if(diceNo1===0)
    document.querySelectorAll(".img1")[0].setAttribute("src","./NoDice.jfif");

    if(diceNo2===1)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice1.png");
    else if(diceNo2===2)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice2.png");
    else if(diceNo2===3)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice3.png");
    else if(diceNo2===4)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice4.png");
    else if(diceNo2===5)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice5.png");
    else if(diceNo2===6)
        document.querySelectorAll(".img2")[0].setAttribute("src","./dice6.png");
    else if(diceNo1===0)
        document.querySelectorAll(".img1")[0].setAttribute("src","./NoDice.jfif");

if(diceNo1>diceNo2)
{
     document.querySelectorAll("#one")[0].textContent="Player 1 is luckier";
    document.querySelectorAll("#result")[0].textContent="PLAYER 1 WON...Play again??"
}
else if(diceNo2>diceNo1)
    {
        document.querySelectorAll("#two")[0].textContent="Player 2 is luckier";
        document.querySelectorAll("#result")[0].textContent="PLAYER 2 WON...Play again??"
    }
else if(diceNo1==diceNo2)
    {
        document.querySelectorAll("#one")[0].textContent="Player 1 is lucky";
        document.querySelectorAll("#two")[0].textContent="Player 2 is also lucky";
       document.querySelectorAll("#result")[0].textContent="IT'S A TIE...Play again??"
    }    
 
