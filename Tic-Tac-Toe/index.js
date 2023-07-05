const gameBoard = document.querySelector("#gameBoard");
const info = document.querySelector("#info");
const startCells = [
    "","","","","","","","",""
]
let turn = "circle";
let winner = false;
function createBoard() {
    startCells.forEach((cells,index)=>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click',addOption)
        gameBoard.append(cellElement);
    })
}
createBoard();

function addOption(e) {
    console.log(e.target)
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(turn);
    e.target.append(goDisplay)
    turn = (turn==='circle')?"cross":"circle";
    e.target.removeEventListener('click',addOption);
    checkWinner();
}

function checkWinner(e){
    const square = document.querySelectorAll('.square');
    const possibleWinner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    possibleWinner.forEach((arr)=>{
        let cir = 0;
        let sq = 0;
        for(let i=0;i<3;i++){
        if(square[arr[i]].firstChild?.classList.contains('circle')) sq++;
        else if(square[arr[i]].firstChild?.classList.contains('cross')) cir++;
        }
        if(sq===3){
            console.log("winner is circle");
            winner = true;
            info.innerHTML = "The game has been ended ans the winner is circle";
            removeEvent(square);
        }
        else if(cir===3){
             console.log("winner is cross");
             winner = true;
             info.innerHTML = "The game has been ended ans the winner is cross";
             removeEvent(square);
        }
    })

}
function removeEvent(square){
    for(let i=0;i<9;i++){
       square[i].removeEventListener('click',addOption);
    }
}