
var form = document.getElementById("form");
var ntitle = document.getElementById("note-title");
var nbody = document.getElementById("note-body");
var items = document.getElementById("items");
var tableDiv = document.getElementById('tbl-div');

var noteCount = 0;
var newNote = ''; 

window.onload = tableUpdate();


form.addEventListener('submit', addNote);

function tableUpdate(){

    if(noteCount > 0){
        tableDiv.style.display = '';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';
    }

}

function addNote(e){
    e.preventDefault();

    if (ntitle.value == '' || nbody.value == ''){
        alert("Please fill all field!");
    }

    else{

        let tr = document.createElement('tr');
        tr.className = 'item';

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        let span = document.createElement('span');
        span.className = 'nbody';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        let td2 = document.createElement('td');
        td2.className = 'btcellv';
        let btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);

        let td3 = document.createElement('td');
        td3.className = 'btcelld';
        let btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        noteCount++;

        newNote = tr;

        tableUpdate();
        
    }

}