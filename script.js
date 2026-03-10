function login(){

let id = document.getElementById("id").value;
let pass = document.getElementById("password").value;

if(id.endsWith("@ritripm.ac.in") && pass !== "")
{
    window.location.href = "dashboard.html";
}
else
{
    alert("Please enter a valid RIT email ID");
}

}
