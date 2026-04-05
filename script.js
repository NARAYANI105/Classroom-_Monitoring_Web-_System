// 🔥 Firebase Config
const firebaseConfig = {
apiKey: "YOUR_KEY",
authDomain: "YOUR_DOMAIN",
databaseURL: "YOUR_DB_URL"const classData = {

"A1L03": {name:"First Year CSE B", strength:63, benches:32},
"A1L04": {name:"First Year AIML", strength:63, benches:32},

"A2L05": {name:"First Year MECH", strength:30, benches:15},
"A2L04": {name:"First Year CSE A", strength:63, benches:32},
"A2L03": {name:"First Year IT", strength:63, benches:30},
"A2L02": {name:"First Year ECE B", strength:63, benches:32},
"A2L01": {name:"First Year ECE A", strength:63, benches:32},

"B0L01": {name:"First Year AD A", strength:63, benches:31},
"B0L02": {name:"First Year AD B", strength:63, benches:31},
"B0L03": {name:"First Year CSBS", strength:63, benches:31},

"B1L05": {name:"First Year EEE", strength:63, benches:32},
"B1L04": {name:"First Year CSE C", strength:63, benches:32},
"B1L02": {name:"First Year Civil", strength:30, benches:25},

"B3L05": {name:"Final Year AD A", strength:59, benches:30},
"B3L04": {name:"Third Year CIVIL", strength:45, benches:25},
"B3L03": {name:"Second Year CIVIL", strength:41, benches:25},
"B3L02": {name:"Final Year CSBS", strength:60, benches:30},

"C2L05": {name:"Second Year MECH", strength:42, benches:25},
"C2L04": {name:"Third Year MECH", strength:63, benches:31},
"C2L03": {name:"Final Year MECH", strength:50, benches:25},
"C2L02": {name:"Third Year IT", strength:62, benches:31},
"C2L01": {name:"Second Year IT", strength:64, benches:32},

"C3L01": {name:"Third Year AD A", strength:59, benches:30},
"C3L02": {name:"Third Year AD B", strength:59, benches:30},
"C3L03": {name:"Second Year AD A", strength:63, benches:33},
"C3L04": {name:"Second Year AD B", strength:63, benches:31},

"B3R02": {name:"Second Year EEE", strength:65, benches:34},
"B3R03": {name:"Third Year EEE", strength:64, benches:32},
"B3R04": {name:"Third Year CSBS", strength:61, benches:31},
"B3R05": {name:"Second Year CSBS", strength:55, benches:28},

"C3R01": {name:"Second Year ECE-A", strength:64, benches:32},
"C3R02": {name:"Second Year ECE-B", strength:64, benches:32},
"C3R03": {name:"Third Year ECE-A", strength:63, benches:32},
"C3R04": {name:"Third Year ECE-B", strength:62, benches:31},
"C3R05": {name:"Final Year ECE-A", strength:59, benches:30},

"C2R04": {name:"Second Year CSE A", strength:63, benches:32},
"C2R05": {name:"Second Year CSE B", strength:63, benches:32},
"C2R06": {name:"Second Year CSE C", strength:64, benches:32},

"A2R02": {name:"Third Year CSE A", strength:64, benches:32},
"A2R02A": {name:"Third Year CSB B", strength:63, benches:32}

};
projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();


// ✅ GET ELEMENTS
const code = document.getElementById("code");
const strength = document.getElementById("strength");
const benches = document.getElementById("benches");
const title = document.getElementById("title");

const faculty = document.getElementById("faculty");
const start = document.getElementById("start");
const end = document.getElementById("end");
const status = document.getElementById("status");
const projector = document.getElementById("projector");
const cpu = document.getElementById("cpu");
const purchaseDate = document.getElementById("purchaseDate");
const replaceDate = document.getElementById("replaceDate");
const saveBtn = document.getElementById("saveBtn");


// 🔐 ROLE CONTROL (LOGIN BASED)
let role = localStorage.getItem("role") || "student";

window.onload = function(){

if(role === "student"){

// ❌ Disable editing
document.querySelectorAll("input, select").forEach(el=>{
el.disabled = true;
});

// ❌ Hide save button
saveBtn.style.display = "none";

}

};


// 🧠 FULL CLASS DATA (26 + 14 CLASSROOMS)
const classData = {

"A1L03": {name:"First Year CSE B", strength:63, benches:32},
"A1L04": {name:"First Year AIML", strength:63, benches:32},

"A2L05": {name:"First Year MECH", strength:30, benches:15},
"A2L04": {name:"First Year CSE A", strength:63, benches:32},
"A2L03": {name:"First Year IT", strength:63, benches:30},
"A2L02": {name:"First Year ECE B", strength:63, benches:32},
"A2L01": {name:"First Year ECE A", strength:63, benches:32},

"B0L01": {name:"First Year AD A", strength:63, benches:31},
"B0L02": {name:"First Year AD B", strength:63, benches:31},
"B0L03": {name:"First Year CSBS", strength:63, benches:31},

"B1L05": {name:"First Year EEE", strength:63, benches:32},
"B1L04": {name:"First Year CSE C", strength:63, benches:32},
"B1L02": {name:"First Year Civil", strength:30, benches:25},

"B3L05": {name:"Final Year AD A", strength:59, benches:30},
"B3L04": {name:"Third Year CIVIL", strength:45, benches:25},
"B3L03": {name:"Second Year CIVIL", strength:41, benches:25},
"B3L02": {name:"Final Year CSBS", strength:60, benches:30},

"C2L05": {name:"Second Year MECH", strength:42, benches:25},
"C2L04": {name:"Third Year MECH", strength:63, benches:31},
"C2L03": {name:"Final Year MECH", strength:50, benches:25},
"C2L02": {name:"Third Year IT", strength:62, benches:31},
"C2L01": {name:"Second Year IT", strength:64, benches:32},

"C3L01": {name:"Third Year AD A", strength:59, benches:30},
"C3L02": {name:"Third Year AD B", strength:59, benches:30},
"C3L03": {name:"Second Year AD A", strength:63, benches:33},
"C3L04": {name:"Second Year AD B", strength:63, benches:31},

"B3R02": {name:"Second Year EEE", strength:65, benches:34},
"B3R03": {name:"Third Year EEE", strength:64, benches:32},
"B3R04": {name:"Third Year CSBS", strength:61, benches:31},
"B3R05": {name:"Second Year CSBS", strength:55, benches:28},

"C3R01": {name:"Second Year ECE-A", strength:64, benches:32},
"C3R02": {name:"Second Year ECE-B", strength:64, benches:32},
"C3R03": {name:"Third Year ECE-A", strength:63, benches:32},
"C3R04": {name:"Third Year ECE-B", strength:62, benches:31},
"C3R05": {name:"Final Year ECE-A", strength:59, benches:30},

"C2R04": {name:"Second Year CSE A", strength:63, benches:32},
"C2R05": {name:"Second Year CSE B", strength:63, benches:32},
"C2R06": {name:"Second Year CSE C", strength:64, benches:32},

"A2R02": {name:"Third Year CSE A", strength:64, benches:32},
"A2R02A": {name:"Third Year CSB B", strength:63, benches:32}

};


// 🔄 AUTO FILL CLASS DETAILS
code.addEventListener("input", function(){

let input = this.value.toUpperCase().trim();

// extract code only
let c = input.includes("-") ? input.split("-")[0].trim() : input;

if(classData[c]){

let d = classData[c];

// ✅ show full name
this.value = c + " - " + d.name;
title.innerText = this.value;

// ✅ auto fill
strength.value = d.strength;
benches.value = d.benches;

}

});


// 💾 SAVE DATA TO FIREBASE
function saveData(){

if(role === "student"){
alert("Students cannot edit ❌");
return;
}

let full = code.value;
let c = full.split(" - ")[0];

let obj = {
fullName: full,
faculty: faculty.value,
start: start.value,
end: end.value,
status: status.value,
projector: projector.value,
cpu: cpu.value,
strength: strength.value,
benches: benches.value,
purchaseDate: purchaseDate.value,
replaceDate: replaceDate.value
};

db.ref("classrooms/" + c).set(obj);

alert("Saved Successfully ✅");

}
// 🔐 ROLE (for testing)
localStorage.setItem("role","admin");

let role = localStorage.getItem("role");

// DISABLE FOR STUDENT
if(role === "student"){
document.querySelectorAll("input, select").forEach(el=>el.disabled=true);
document.getElementById("saveBtn").style.display="none";
}

// ✅ CLASS DATA (already given - keep your full 40 here)
const classData = {
"A1L03":{name:"First Year CSE B",strength:63,benches:32},
// 👉 paste FULL 40 classes here (from previous message)
};

// 🔥 AUTO FILL + LOAD SAVED DATA
document.getElementById("code").addEventListener("change",function(){

let c = this.value;

if(classData[c]){

let d = classData[c];

document.getElementById("title").innerText = c + " - " + d.name;
document.getElementById("strength").value = d.strength;
document.getElementById("benches").value = d.benches;

// 🔥 LOAD SAVED DATA
let saved = JSON.parse(localStorage.getItem(c));

if(saved){
document.getElementById("faculty").value = saved.faculty || "";
document.getElementById("start").value = saved.start || "";
document.getElementById("end").value = saved.end || "";
document.getElementById("status").value = saved.status || "Available";
document.getElementById("cpu").value = saved.cpu || "Working";
document.getElementById("projector").value = saved.projector || "Working";
document.getElementById("battery").value = saved.battery || "Working";
document.getElementById("purchase").value = saved.purchase || "";
document.getElementById("replace").value = saved.replace || "";
document.getElementById("service").value = saved.service || "";
document.getElementById("next").value = saved.next || "";
}

}

});

// 💾 SAVE FUNCTION
function saveData(){

let c = document.getElementById("code").value;

if(!c){
alert("Select Class First ❌");
return;
}

let data = {
faculty: document.getElementById("faculty").value,
start: document.getElementById("start").value,
end: document.getElementById("end").value,
status: document.getElementById("status").value,
cpu: document.getElementById("cpu").value,
projector: document.getElementById("projector").value,
battery: document.getElementById("battery").value,
purchase: document.getElementById("purchase").value,
replace: document.getElementById("replace").value,
service: document.getElementById("service").value,
next: document.getElementById("next").value
};

// SAVE TO LOCAL STORAGE
localStorage.setItem(c, JSON.stringify(data));

alert("Saved Successfully ✅");
}
