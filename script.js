// 🔐 ROLE (CHANGE HERE FOR TESTING)
let role = localStorage.getItem("role") || "student";
// localStorage.setItem("role","admin")
// localStorage.setItem("role","staff")
// localStorage.setItem("role","student")

// 📚 FULL 40 CLASS DATA (AUTO FILL)
const classData = {

"A1L03":{name:"First Year CSE B",strength:63,benches:32},
"A1L04":{name:"First Year AIML",strength:63,benches:32},

"A2L05":{name:"First Year MECH",strength:30,benches:15},
"A2L04":{name:"First Year CSE A",strength:63,benches:32},
"A2L03":{name:"First Year IT",strength:63,benches:30},
"A2L02":{name:"First Year ECE B",strength:63,benches:32},
"A2L01":{name:"First Year ECE A",strength:63,benches:32},

"B0L01":{name:"First Year AD A",strength:63,benches:31},
"B0L02":{name:"First Year AD B",strength:63,benches:31},
"B0L03":{name:"First Year CSBS",strength:63,benches:31},

"B1L05":{name:"First Year EEE",strength:63,benches:32},
"B1L04":{name:"First Year CSE C",strength:63,benches:32},
"B1L02":{name:"First Year Civil",strength:30,benches:25},

"B3L05":{name:"Final Year AD A",strength:59,benches:30},
"B3L04":{name:"Third Year CIVIL",strength:45,benches:25},
"B3L03":{name:"Second Year CIVIL",strength:41,benches:25},
"B3L02":{name:"Final Year CSBS",strength:60,benches:30},

"C2L05":{name:"Second Year MECH",strength:42,benches:25},
"C2L04":{name:"Third Year MECH",strength:63,benches:31},
"C2L03":{name:"Final Year MECH",strength:50,benches:25},
"C2L02":{name:"Third Year IT",strength:62,benches:31},
"C2L01":{name:"Second Year IT",strength:64,benches:32},

"C3L01":{name:"Third Year AD A",strength:59,benches:30},
"C3L02":{name:"Third Year AD B",strength:59,benches:30},
"C3L03":{name:"Second Year AD A",strength:63,benches:33},
"C3L04":{name:"Second Year AD B",strength:63,benches:31},

"B3R02":{name:"Second Year EEE",strength:65,benches:34},
"B3R03":{name:"Third Year EEE",strength:64,benches:32},
"B3R04":{name:"Third Year CSBS",strength:61,benches:31},
"B3R05":{name:"Second Year CSBS",strength:55,benches:28},

"C3R01":{name:"Second Year ECE A",strength:64,benches:32},
"C3R02":{name:"Second Year ECE B",strength:64,benches:32},
"C3R03":{name:"Third Year ECE A",strength:63,benches:32},
"C3R04":{name:"Third Year ECE B",strength:62,benches:31},
"C3R05":{name:"Final Year ECE A",strength:59,benches:30},

"C2R04":{name:"Second Year CSE A",strength:63,benches:32},
"C2R05":{name:"Second Year CSE B",strength:63,benches:32},
"C2R06":{name:"Second Year CSE C",strength:64,benches:32},

"A2R02":{name:"Third Year CSE A",strength:64,benches:32},
"A2R02A":{name:"Third Year CSB B",strength:63,benches:32}
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

// 📥 DROPDOWN LOAD
code.innerHTML = `<option value="">Select Class</option>`;
for(let c in classData){
code.innerHTML += `<option value="${c}">${c} - ${classData[c].name}</option>`;
}

// 🔄 LOAD CLASS
function loadClass(c){

let d = classData[c];

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

lastSaved.innerText = "Last Saved: " + (saved.lastSaved || "--");

}else{
faculty.value="";
start.value="";
end.value="";
status.value="Available";
cpu.value="Working";
projector.value="Working";
battery.value="Working";

lastSaved.innerText = "Last Saved: --";
}
}

// 🔁 CHANGE
code.addEventListener("change",function(){
loadClass(this.value);
});

// 🔒 ROLE CONTROL
if(role === "student"){

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
}

// 💾 SAVE
saveBtn.onclick = function(){

if(role === "student"){
alert("No permission ❌");
return;
}

let c = code.value;

if(!c){
alert("Select class ❌");
return;
}

// 🕒 DATE + TIME
let now = new Date();
let formatted =
now.getDate().toString().padStart(2,'0') + "-" +
(now.getMonth()+1).toString().padStart(2,'0') + "-" +
now.getFullYear() + " | " +
now.toLocaleTimeString();

let data = {
faculty: faculty.value,
start: start.value,
end: end.value,
status: status.value,
cpu: cpu.value,
projector: projector.value,
battery: battery.value,
lastSaved: formatted
};

localStorage.setItem(c, JSON.stringify(data));

alert("Saved Successfully ✅");
loadClass(c);
};
