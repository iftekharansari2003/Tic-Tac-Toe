let boxes=document.querySelectorAll('.box')
let msgcontainer=document.querySelector('.hide')
let resetBtn=document.querySelector('.reset-btn')
let msg=document.querySelector('.msg')
let startbtn=document.querySelector('.new-btn')

let turnO=true; //playeX,playerO  
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]] ;

let  count=0;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turnO){
            box.innerText='O'
            turnO=false
        }
        else{
            box.innerText='X'
            turnO=true
        }
        box.disabled=true
        let isWinner=checkWinner();
       
        count++;

        if(count===9 && !isWinner){
            console.log("Hello");
            msg.innerText="Match has No Winner it's a Draw"
            msgcontainer.classList.remove('hide')
        }
    })
   
})

const checkWinner=()=>{
for(let pattern of winPatterns){
    let posval1=boxes[pattern[0]].innerText
    let posval2=boxes[pattern[1]].innerText
    let posval3=boxes[pattern[2]].innerText

    if(posval1!="" && posval2!="" && posval3!=""){
        if(posval1==posval2 && posval2==posval3){
            console.log("Winner",posval1);
            showWinner(posval1)
            return true;
        }
    }
}
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is Player ${winner}`
    msgcontainer.classList.remove('hide')
    disabledbtn();
}

const disabledbtn=()=>{
    for(box of boxes){
        box.disabled=true
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
const resetGame=()=>{
    turnO=true
    enablebtn();
    count=0;
    msgcontainer.classList.add('hide')
}
startbtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)
