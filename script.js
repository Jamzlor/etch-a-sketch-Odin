// DOM variables


const grid = document.createElement('div');
const containerDiv = document.querySelector('#container');
const DIMENSION = containerDiv.clientHeight;
const sizeButton = document.querySelector('.sizeButton');

let numOfGrid = 16;
let pixelPerGrid = DIMENSION/numOfGrid;


// DOM Manipulation
grid.classList.add('grid');

function formGrid(){
    for(let i = 1; i <= (numOfGrid*numOfGrid); i++){
        containerDiv.appendChild(grid.cloneNode(true));    
    }
    const gridArr = [...document.querySelectorAll('.grid')];
    
    for(let i = 0; i < gridArr.length; i++){
        gridArr[i].setAttribute('style', `width: ${pixelPerGrid}px; height: ${pixelPerGrid}px;`)
        gridArr[i].addEventListener('mouseover', () => {
            gridArr[i].classList.add('stepped');
        })} 
}

formGrid();

sizeButton.addEventListener('click', (e) =>{
    containerDiv.innerHTML = '';
    numOfGrid = prompt("How many squares per side?");
    if(numOfGrid > 100){
        return alert('Number of square too large')
    } else if(numOfGrid < 1) {
        return alert('Number of sqaure too little')
    } else{
        pixelPerGrid = DIMENSION/numOfGrid;
        formGrid();
    }
});