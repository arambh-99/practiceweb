let grids =document.getElementsByClassName(col)

let currentTurn=1

const singleMove=(index) =>

{

    grids[index].innerText = currentTurn ===1 ? 'X':'O'
    currentTurn =currentTurn === 1 ? 2:1



}

