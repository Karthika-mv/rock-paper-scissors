let userScore=0;
let comScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let usercount=document.querySelector("#user-count");
let computercount=document.querySelector("#computer-count");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})
const computer=()=>{
    let options=["rock","paper","scissors"];
    let choice= Math.floor(Math.random()*3);
    return options[choice];

   
}

const playGame=(userChoice)=>{
     let userWin;
    console.log("user Choice:",userChoice);
    let computerChoice=computer();
    console.log("computer choice:",computerChoice);
    if((userChoice===computerChoice)){
        //draw
        draw();
        return;
    }
    else{
       
        if(userChoice==="rock"){
            //scissors,paper
            userWin=computerChoice==="scissors"?true:false;
        }
        else if( userChoice==="paper"){
                userWin=computerChoice==="rock"?true:false;
        }
        else{
             userWin=computerChoice==="rock"?false:true;
        }

    }
console.log(userWin)
    if(userWin===true){
       msg.innerText=`you win, Your choice ${userChoice} beats ${computerChoice}`; 
       console.log("you win")
       msg.style.backgroundColor="green"
       userScore++;
       console.log(usercount);
       usercount.innerText=userScore;
       

    }
    else{
        msg.innerText=`You lose, ${userChoice} beats your choice ${computerChoice}`;
        console.log("you lose")
        msg.style.backgroundColor="red"
        comScore++;
        computercount.innerText=comScore;
    }
}

const draw=()=>{
 msg.innerText="Draw,Play again!";
 msg.style.backgroundColor="black";
 console.log("draw")
}
