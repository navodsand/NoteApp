
let form = document.getElementById("form");
let ntitle = document.getElementById("note-title");
let nbody = document.getElementById("note-body");


form.addEventListener('submit', addNote);

function addNote(e){
    e.preventDefault();

    if (note-title.value == '' || note-body.value == ''){
        alert("Please fill all field!");
    }

    else{

        let tr = document.createElement('tr');
        tr.className = 'item';

        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(note-title.value));
        let span = document.createElement('span');
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);

        let td2 = document.createElement('td');
        td2.className = 'btcellv';
        let btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);
    }

}