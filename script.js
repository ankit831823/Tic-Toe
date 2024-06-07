let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
 let win=document.querySelector(".winner");
let turnO=true;  //turnX,turnO
let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
  let count=0;
boxes.forEach(box=>{
    box.addEventListener("click",()=>
    {
       if(turnO)
        {  //O chance
            box.innerText="O";
            turnO=false;
        }
        else
        { //  X chance
            box.innerText="X";
            turnO=true;
        }
        count++;
        box.disabled=true;
         checkWinner();
          box.disabled=true;
    }
   
    
)
});
    
const newgame=()=>
    {
        turnO=true;
        enableBoxes();
        win.innerText="";
    }

const disableBoxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    }

const enableBoxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
                count=0;
            }
    }

const checkWinner=()=>
    {
        
         for(let pattern of winpattern)
            {
                let patVal0=boxes[pattern[0]].innerText;
                let patVal1=boxes[pattern[1]].innerText;
                let patVal2=boxes[pattern[2]].innerText;
                if(patVal0!=""&&patVal1!=""&&patVal2!="")
                    {
                        if(patVal0===patVal1&&patVal1===patVal2)
                         {
                           
                            {
                               win.innerText=  `Congratulations Winner is player ${patVal0}`;
                                disableBoxes();
                            }
                         }
                    }
            }
            if(count==9)
                win.innerText="Draw";
           
          
        
    }


 reset.addEventListener("click",newgame);