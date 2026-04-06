<script>

// 🔐 SET DEFAULT ROLE (first time only)
if(!localStorage.getItem("role")){
    localStorage.setItem("role","student"); 
}

const role = localStorage.getItem("role");

// 📚 FULL CLASS DATA
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

"C3R01":{name:"Second Year ECE-A",strength:64,benches:32},
"C3R02":{name:"Second Year ECE-B",strength:64,benches:32},
"C3R03":{name:"Third Year ECE-A",strength:63,benches:32},
"C3R04":{name:"Third Year ECE-B",strength:62,benches:31},
"C3R05":{name:"Final Year ECE-A",strength:59,benches:30},

"C2R04":{name:"Second Year CSE A",strength:63,benches:32},
"C2R05":{name:"Second Year CSE B",strength:63,benches:32},
"C2R06":{name:"Second Year CSE C",strength:64,benches:32},

"A2R02":{name:"Third Year CSE A",strength:64,benches:32},
"A2R02A":{name:"Third Year CSB B",strength:63,benches:32}

};

// 📥 LOAD DROPDOWN
const select = document.getElementById("code");
select.innerHTML = `<option value="">Select Class</option>`;

for(let key in classData){
select.innerHTML += `<option value="${key}">${key} - ${classData[key].name}</option>`;
}

// 🔒 ROLE CONTROL
function applyRoleControl(){

if(role === "student"){

document.querySelectorAll("input, select").forEach(el=>{
if(el.id !== "code"){
el.disabled = true;
}
});

// hide save button
document.querySelector("button").style.display = "none";

}

}

applyRoleControl();

// 🔄 ON CLASS CHANGE
select.addEventListener("change",function(){

let c = this.value;
if(!c) return;

let d = classData[c];

// autofill
document.getElementById("title").innerText = c + " - " + d.name;
document.getElementById("strength").value = d.strength;
document.getElementById("benches").value = d.benches;

// load saved data
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

});

// 💾 SAVE FUNCTION
function saveData(){

if(role === "student"){
alert("Students cannot edit ❌");
return;
}

let c = document.getElementById("code").value;

if(!c){
alert("Select class first!");
return;
}

let data = {
faculty:document.getElementById("faculty").value,
start:document.getElementById("start").value,
end:document.getElementById("end").value,
status:document.getElementById("status").value,
cpu:document.getElementById("cpu").value,
projector:document.getElementById("projector").value,
battery:document.getElementById("battery").value,
purchase:document.getElementById("purchase").value,
replace:document.getElementById("replace").value,
service:document.getElementById("service").value,
next:document.getElementById("next").value
};

localStorage.setItem(c,JSON.stringify(data));

alert("Saved Successfully ✅");
}

</script>
