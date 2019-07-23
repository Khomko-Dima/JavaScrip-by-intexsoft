var contentArea = document.getElementById('contentArea');
contentArea.style.display = 'block';
contentArea.style.width = '445px';
contentArea.style.margin = '0 auto';

var form = document.createElement('form');
    form.setAttribute('id', 'form');

    var input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('placeholder', 'От 0 до 30');

    var table = document.createElement('table');
    table.setAttribute('id', 'table');

    form.appendChild(input);
    form.appendChild(createButton('send', 'Отправить'));
    form.appendChild(createButton('reset', 'Очистить'));
    contentArea.appendChild(form);
    contentArea.appendChild(createEsciz());
    contentArea.appendChild(table);


function createButton (id, text) {
    var button = document.createElement('button');
    button.setAttribute('id', id);
    button.innerText = text;
    return button;
};

function createEsciz() {
    var div =  document.createElement('div');
    div.setAttribute('id', 'templates');
    div.style.margin = '10px 0';
    createTemplates().forEach(function(item) {
        div.appendChild(item);
    });
    return div;
};

function createTemplates() {
    var template = ['0', '50%', '50% 0', '0 50%'];

    template = template.map(function(item) {
        var tempDiv = document.createElement('div');
        tempDiv.style.border = '1px solid black';
        tempDiv.style.width = '50px';
        tempDiv.style.height = '50px';
        tempDiv.style.margin = '5px';
        tempDiv.style.display = 'inline-block';
        tempDiv.style.borderRadius = item;
        return tempDiv;
    });
    return template;
};

function createTable(table, index, style) {
    for (var i = 0; i < index; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < index; j++) {
            var td = document.createElement('td');
            var div = document.createElement('div');
            div.style.width = style.width;
            div.style.height = style.height;
            div.style.border = style.border;
            div.style.borderRadius = style.borderRadius;
            div.style.backgroundColor = getRandomColor();
            td.appendChild(div);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

var template = document.getElementById('templates'),
    resetBtn = document.getElementById('reset'),
    sendBtn = document.getElementById('send'),
    table = document.getElementById('table'),
    input = document.getElementsByTagName('input')[0];

    var styleTemplate = '';
    var tableHTML = '';

template.addEventListener('click', function(event) {
    if (!event.target.id) {
        template.querySelectorAll('div').forEach(function(item) {
            item.style.backgroundColor = '';
        });
        event.target.style.backgroundColor = 'red';
    }
    styleTemplate = event.target.style;
});

resetBtn.addEventListener('click', function(event) {
    event.preventDefault();
    input.value = '';
    tableHTML = '';
    table.innerHTML = tableHTML;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value >= 0
        && input.value <= 30
        && input.value.trim() !== '') {
        createTable(table, input.value, styleTemplate);
    }
    input.value = '';
});