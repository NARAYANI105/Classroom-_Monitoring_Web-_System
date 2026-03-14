function login(){

let id=document.getElementById("id").value;
let pass=document.getElementById("password").value;

if(id.endsWith("@ritrjpm.ac.in") && pass==="RIT")
{
window.location.href="side.html";
}
else
{
alert("Invalid Login");
}

}
