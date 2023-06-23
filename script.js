
var form = document.getElementById("form");
var ntitle = document.getElementById("note-title");
var nbody = document.getElementById("note-body");


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

        let td3 = document.createElement('td');
        td3.className = 'btcelld';
        let btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        console.log(td3);
    }

}