var parentElement = document.getElementById('contentArea'),
figures = ['pawn', 'bishop', 'knight', 'rook', 'queen', 'king'],
imageTd = [];

parentElement.style.display = 'block';
parentElement.style.width = '445px';
parentElement.style.margin = '0 auto';

var imagesDiv = null;
var table = null;
var allTd = null;
var figure = {name: null, row: null, col: null, };
 
createFigures();
createTable();
 
function createFigures() {
    var parentDiv = document.createElement('div');
    parentDiv.setAttribute('id', 'images');
    parentDiv.style.height = '50px';
 
    figures.forEach(function(item) {
        var img = document.createElement('img');
        var div = document.createElement('div');
 
        img.setAttribute('src', './img/' + item + '.png');
        img.style.height = '50px';
 
        div.setAttribute('id', item);
        div.style.display ='inline-block';
        div.style.height = '50px';
        div.style.padding = '5px';
        div.style.border = '1px solid white';
 
        div.appendChild(img);
        parentDiv.appendChild(div);
    });
    parentElement.appendChild(parentDiv);
    imagesDiv = document.getElementById('images')
};
 
function createTable() {
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    table.style.borderCollapse = 'collapse';
    table.style.margin = '10px';
 
    for (var i = 1; i <= 8; i++) {
        var tr = document.createElement('tr');
 
        for (var j = 1; j <= 8; j++) {
            var td = document.createElement('td');
            td.setAttribute('data-row', i);
            td.setAttribute('data-col', j);
            td.style.width = '50px';
            td.style.height = '50px';
            td.style.border = '1px solid black';
            colorTdDefault(td, i, j);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parentElement.appendChild(table);
};
 
function colorTdDefault(td, i, j) {
    allTd = table.querySelectorAll('td');
    td.style.backgroundColor = ((i + j) % 2) ? 'black' : 'white';
};
 
 
imagesDiv.addEventListener('click', function(event) {
        var target;
        if (event.target.id !== 'images') {
            imagesDiv.querySelectorAll('div').forEach(item => {
                item.style.borderColor = 'white';
            });
            target = (event.target.tagName === 'IMG') ? event.target.parentElement : event.target;
            target.style.borderColor = 'red';
            figure.name = target.id;
            createPath(allTd, figure);
        }
    });
 
table.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD'){
        event.target.style.backgroundColor = 'red';
        figure.row = event.target.dataset.row;
        figure.col = event.target.dataset.col;
        createPath(allTd, figure);
        console.log(figure.row);
    }
});
 
document.addEventListener('keydown', function(event) {
        if((figure.name==null) || (figure.col == null)||(figure.row == null)){
            return;
        }
        figure.col = (figure.col === null) ? 1 : figure.col;
        figure.row = (figure.row === null) ? 1 : figure.row;
 
        switch(event.keyCode) {
            case 40:
                figure.row = (figure.row >= 8) ? 8 : +figure.row + 1;
                break;
            case 39:
                figure.col = (figure.col >= 8) ? 8 : +figure.col + 1;
                break;
            case 37:
                figure.col = (figure.col <= 1) ? 1 : +figure.col - 1;
                break;
            
            case 38:
                figure.row = (figure.row <= 1) ? 1 : +figure.row - 1;
                break;
            
        };
 
        createPath(allTd, figure);
    });
 
function createPath(allTd, figure) {
    var row = figure.row;
    var col = figure.col;
 
    allTd.forEach(function(item) {
        this.colorTdDefault(item, +item.dataset.row, +item.dataset.col);
        item.innerHTML = '';
    });
 
    figures.forEach(function(item){
       if (item === figure.name && row !== null && col !== null) {
           MoveFigures.prototype[item + 'Move'](allTd, +row, +col);
       }
    });
 
    allTd.forEach(function(item) {
        startPointColor(item, +row, +col);
    });
};
function startPointColor(item, row, col) {
    if (+item.dataset.row === row && +item.dataset.col === col) {
        item.style.backgroundColor = 'red';
    }
};


function MoveFigures() {};
new MoveFigures();

MoveFigures.prototype.kingMove = function (allTd, row, col) {

    allTd.forEach(function(item) {
        if (item.dataset.row >= row - 1 && item.dataset.row <= row + 1 && item.dataset.col >= col - 1 && item.dataset.col <= col + 1) {
            item.style.backgroundColor = 'green';
        }
    })
};

MoveFigures.prototype.queenMove = function (allTd, row, col) {
    this.bishopMove(allTd, row, col);
    this.rookMove(allTd, row, col);
};

MoveFigures.prototype.knightMove = function (allTd, row, col) {
    allTd.forEach(item => {
        if ((+item.dataset.row === row + 1 || +item.dataset.row === row - 1)
            && (+item.dataset.col === col + 2 || +item.dataset.col === col - 2)) {
            item.style.backgroundColor = 'green';
        }

        if ((+item.dataset.row === row + 2 || +item.dataset.row === row - 2)
            && (+item.dataset.col === col + 1 || +item.dataset.col === col - 1)) {
            item.style.backgroundColor = 'green';
        }
    })
};

MoveFigures.prototype.rookMove = function (allTd, row, col) {
    allTd.forEach(item => {
        if (+item.dataset.row === row
            || +item.dataset.col === col) {
            item.style.backgroundColor = 'green';
        }
    })
};

MoveFigures.prototype.bishopMove = function (allTd, row, col) {
    var startRow = row;
    var startCol = col;

    allTd.forEach(item => {
        while (row > 1 && col > 1){
            row--;
            col--;
        }

        for (var i = 0; i <= 7; i++){
            if (+item.dataset.row === row + i && +item.dataset.col === col + i){
            item.style.backgroundColor = 'green';
            }
        }
    });

    row = startRow;
    col = startCol;

    allTd.forEach(item => {
        while (row > 1 && col < 8){
            row--;
            col++;
        }

        for (var i = 0; i <= 7; i++){
            if (+item.dataset.row === row + i && +item.dataset.col === col - i){
                item.style.backgroundColor = 'green';
            }
        }
    });
};
MoveFigures.prototype.pawnMove = function (allTd, row, col) {
    allTd.forEach(function(item) {
        if (+item.dataset.col === col) {
            if (row === 7 && +item.dataset.row < 7 && +item.dataset.row >= 5 ){
                item.style.backgroundColor = 'green';
            }
            if (row < 7 && +item.dataset.row < row && +item.dataset.row >= row - 1 ){
                item.style.backgroundColor = 'green';
            }
        }
    })
};