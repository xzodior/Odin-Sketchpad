const container = document.getElementById('grid-container');
const clear = document.getElementById('clear');
clear.style.backgroundColor = 'black';
clear.style.color = 'white';
clear.style.border = '2px solid black';
clear.style.width = '10rem';
clear.addEventListener('click', function () {
    let user = prompt('Input number of squares per side for the new grid (1-100)', '0');
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    let rows = parseInt(user);  
    let columns = rows;
    if (rows > 100) {
        alert('Number must be between 1-100');
    } else {
        grid(rows, columns);
    }
})

function grid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(i = 0; i < (rows * columns); i++) {                 
        let cell = document.createElement('div');   
        cell.addEventListener("mouseover", function (){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;

            setTimeout(function(){
                cell.style.backgroundColor = "";
            }, 1000)
        }, false);       
        container.appendChild(cell).className = 'grid-item';       
    }
}

grid(16, 16);