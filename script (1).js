function login(){

let id = document.getElementById("id").value;
let pass = document.getElementById("password").value;

if(id.endsWith("@ritrjpm.ac.in") && pass === "RIT")
{
    window.location.href = "dashboard.html";
}
else
{
    alert("Invalid Login! Use RIT Email and Password");
}

}
