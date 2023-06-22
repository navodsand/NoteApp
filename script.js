
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

        var tr = document.createElement('tr');
        tr.className = 'item';

        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(note-title.value));
        var span = document.createElement('span');
        span.className = 'note-body'
    }

}