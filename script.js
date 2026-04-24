// 🔐 LOGIN SYSTEM
let pass = prompt("Enter your password");

// normalize
pass = pass ? pass.toUpperCase().trim() : "";

// default role
let role = "Student";

// check password
if(pass === "ADMIN.RIT"){
    role = "Admin";
}
else if(pass === "STAFF.RIT"){
    role = "staff";
}
else if(pass === "RIT"){
    role = "Student";
}
else{
    alert("Invalid Password");
    role = "Student";
}

// store role
localStorage.setItem("role", role);


// 📚 CLASS DATA
const classData = {
"A1L03":{name:"First Year CSE B",strength:63,benches:32},
"A1L04":{name:"First Year AIML",strength:63,benches:32},
"A2L05":{name:"First Year MECH",strength:30,benches:15},
"A2L04":{name:"First Year CSE A",strength:63,benches:32},
"A2L03":{name:"First Year IT",strength:63,benches:30},
"A2L02":{name:"First Year ECE B",strength:63,benches:32},
"A2L01":{name:"First Year ECE A",strength:63,benches:32}
};


// 📌 ELEMENTS
const code = document.getElementById("code");
const title = document.getElementById("title");
const strength = document.getElementById("strength");
const benches = document.getElementById("benches");

const faculty = document.getElementById("faculty");
const start = document.getElementById("start");
const end = document.getElementById("end");
const status = document.getElementById("status");
const cpu = document.getElementById("cpu");
const projector = document.getElementById("projector");
const battery = document.getElementById("battery");

const saveBtn = document.getElementById("saveBtn");
const lastSaved = document.getElementById("lastSaved");


// ✅ CONNECT BUTTON (IMPORTANT)
saveBtn.addEventListener("click", saveData);


// 📥 DROPDOWN LOAD (FIXED)
code.innerHTML = `<option value="">Select Class</option>`;
for(let c in classData){
    code.innerHTML += `<option value="${c}">${c} - ${classData[c].name}</option>`;
}


// 🔥 LOAD CLASS
function loadClass(c){

if(!classData[c]) return;

let d = classData[c];

// auto fill
title.innerText = c + " - " + d.name;
strength.value = d.strength;
benches.value = d.benches;

// load saved
let saved = JSON.parse(localStorage.getItem(c));

if(saved){
faculty.value = saved.faculty || "";
start.value = saved.start || "";
end.value = saved.end || "";
status.value = saved.status || "Available";
cpu.value = saved.cpu || "Working";
projector.value = saved.projector || "Working";
battery.value = saved.battery || "Working";

lastSaved.innerText = "Saved at: " + saved.time;
}else{
faculty.value="";
start.value="";
end.value="";
status.value="Available";
cpu.value="Working";
projector.value="Working";
battery.value="Working";

lastSaved.innerText = "Saved at: ---";
}
}


// change
code.addEventListener("change", function(){
loadClass(this.value);
});


// 🔒 ROLE CONTROL
if(role === "Student"){

document.querySelectorAll("input, select").forEach(el=>{
el.disabled = true;
});

saveBtn.style.display = "none";

}else{

document.querySelectorAll("input, select").forEach(el=>{
el.disabled = false;
});

strength.disabled = true;
benches.disabled = true;
code.disabled = true;
}


// 💾 SAVE FUNCTION
function saveData(){

if(role === "Student"){
alert("❌ No permission");
return;
}

let c = code.value;

if(!c){
alert("Select class ❌");
return;
}

// 🕒 DATE TIME (FIXED TEMPLATE STRING)
let now = new Date();

let day = now.getDate().toString().padStart(2,'0');
let monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let month = monthNames[now.getMonth()];
let year = now.getFullYear();

let hours = now.getHours();
let minutes = now.getMinutes().toString().padStart(2,'0');

let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;

let formattedTime = `${day} ${month} ${year} at ${hours}:${minutes} ${ampm}`;

// data
let data = {
faculty: faculty.value,
start: start.value,
end: end.value,
status: status.value,
cpu: cpu.value,
projector: projector.value,
battery: battery.value,
time: formattedTime
};

// save// 🔴 LOGOUT BUTTON (UPDATED STYLE)
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";

Object.assign(logoutBtn.style, {
    position: "fixed",
    bottom: "15px",        // 👈 moved to bottom
    right: "15px",         // 👈 corner
    background: "#d9534f", // 👈 medium red (not too bright)
    color: "#fff",
    border: "none",
    padding: "6px 10px",   // 👈 smaller size
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
});

document.body.appendChild(logoutBtn);

// 🔓 LOGOUT ACTION
logoutBtn.onclick = function(){
    localStorage.clear();

    // 👇 redirect outside site
    window.location.href = "https://www.google.com";
};
localStorage.setItem(c, JSON.stringify(data));

// show
lastSaved.innerText = "Saved at: " + formattedTime;

alert("✅ Saved Successfully");
}
// 🔴 LOGOUT BUTTON (UPDATED STYLE)
let logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout";

Object.assign(logoutBtn.style, {
    position: "fixed",
    bottom: "15px",        // 👈 moved to bottom
    right: "15px",         // 👈 corner
    background: "#d9534f", // 👈 medium red (not too bright)
    color: "#fff",
    border: "none",
    padding: "6px 10px",   // 👈 smaller size
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "600",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
});

document.body.appendChild(logoutBtn);

// 🔓 LOGOUT ACTION
logoutBtn.onclick = function(){
    localStorage.clear();

    // 👇 redirect outside site
    window.location.href = "https://www.google.com";
};
