
var form = document.getElementById("form");
var ntitle = document.getElementById("nTitle");
var nbody = document.getElementById("nBody");


form.addEventListener('submit', addNote);

function addNote(e){
    e.preventDefault();

    if (ntitle.value == '' || nbody.value == ''){
        alert("Please fill all field!");
    }

    else{

        var tr = document.createElement('tr');
        tr.className = 'item';

        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(nTitle.value));
        var span = document.createElement('span');
        span.className = 'nBody'
    }

}