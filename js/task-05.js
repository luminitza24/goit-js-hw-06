const input = document.querySelector("input");
const output = document.querySelector("span");
function LogheazaInput(){
    if ( input !== "") {
output.innerHTML = input.innerHTML;   
    }
    else{ output.innerHTML= "Anonymous"}
};