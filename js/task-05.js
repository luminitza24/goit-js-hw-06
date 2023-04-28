const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
function myEvent(){
    if ( input.textContent !== "") {
 input.textContent = output.textContent;   
    }
    else{ output.textContent = "Anonymous"}
};

input.addEventListener('input',  myEvent());
