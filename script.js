//query selectors
const container = document.querySelector('#container');
let clear = document.querySelector("button");

clear.addEventListener('click', ()=>{ // we only want to add this listener once
    refreshGrid()
})

//Function that creates GRID
function addDivs(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++){
      let square = document.createElement("div");
      square.classList.add('grid-item');
      container.appendChild(square);
    }
    clearGrid();
  hoverColor();
  
}

//function that creates a random color
let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function that changes div color uponed being hovered
function hoverColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${randomColor()}`;
    });
  });
}
let number = 16 ;




function refreshGrid(){
    let number = prompt("What size would you like the grid to be? (1-100)");
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        addDivs(number , number);
    }

    function clearGrid(){
        clear.addEventListener('click', e=>{
            square.style.backgroundColor = "black"
       })
    }


//grid creationg

addDivs(number, number);
clearGrid();

