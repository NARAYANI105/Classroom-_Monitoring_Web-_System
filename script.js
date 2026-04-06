// 🔐 DEFAULT ROLE
if(!localStorage.getItem("role")){
localStorage.setItem("role","student");
}

const role = localStorage.getItem("role");

// 📚 CLASS DATA
const classData = {
"C3R01":{name:"Second Year ECE A",strength:64,benches:32},
"C3R02":{name:"Second Year ECE B",strength:64,benches:32},
"C3R03":{name:"Third Year ECE A",strength:63,benches:32},
"C3R04":{name:"Third Year ECE B",strength:62,benches:31}
};

// 📥 DROPDOWN
const select = document.getElementById("code");
select.innerHTML = `<option value="">Select Class</option>`;

for(let key in classData){
select.innerHTML += `<option value="${key} - ${classData[key].name}">${key} - ${classData[key].name}</option>`;
}

// 🔒 ROLE CONTROL
function applyRoleControl(){

if(role === "student"){

document.querySelectorAll("input, select").forEach(el=>{

if(el.id !== "code"){

el.disabled = true;
el.style.pointerEvents = "none";
el.classList.add("readonly-style");

}
});

let btn = document.querySelector("button");
if(btn) btn.style.display = "none";

}
}

applyRoleControl();

// 🔄 LOAD DATA FROM URL
const params = new URLSearchParams(window.location.search);
const classParam = params.get("class");

if(classParam){

select.value = classParam;

let code = classParam.split(" - ")[0];
let d = classData[code];

if(d){
document.getElementById("title").innerText = classParam;
document.getElementById("strength").value = d.strength;
document.getElementById("benches").value = d.benches;
}

// load saved
let saved = JSON.parse(localStorage.getItem(classParam));

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

// 💾 SAVE FUNCTION
function saveData(){

if(role === "student"){
alert("Students cannot edit ❌");
return;
}

let c = document.getElementById("code").value;

if(!c){
alert("Select class!");
return;
}

let data = {
faculty:faculty.value,
start:start.value,
end:end.value,
status:status.value,
cpu:cpu.value,
projector:projector.value,
battery:battery.value,
purchase:purchase.value,
replace:replace.value,
service:service.value,
next:next.value
};

localStorage.setItem(c,JSON.stringify(data));

alert("Saved Successfully ✅");
}
