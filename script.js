function login(){

let role = document.getElementById("role").value;
let id = document.getElementById("id").value;
let pass = document.getElementById("password").value;

if(id === "student" && pass === "123"){
location.href="dashboard.html";
}

else if(id === "staff" && pass === "123"){
location.href="dashboard.html";
}

else if(id === "admin" && pass === "123"){
location.href="dashboard.html";
}

else{
alert("Invalid Login");
}

}
