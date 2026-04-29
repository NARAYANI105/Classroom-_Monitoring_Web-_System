// 🔐 LOGIN SYSTEM
let pass = prompt("Enter your password");
pass = pass ? pass.toUpperCase().trim() : "";

let role = "Student";

if (pass === "ADMIN.RIT") role = "Admin";
else if (pass === "STAFF.RIT") role = "Staff";
else if (pass === "RIT") role = "Student";
else {
    alert("Invalid Password");
    role = "Student";
}

localStorage.setItem("role", role);


// 📚 ALL CLASS DATA + MENTOR DETAILS
const classData = {

    // ================= LEFT SIDE =================

    "A1L03": {
        name: "First Year CSE B",
        strength: 63,
        benches: 32,
        advisor: "Mrs.S.Manjula, AP/CSE",
        advisorMail: "smanjula@ritrjpm.ac.in",

        mentor1: "Dr.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Mrs.S.Manjula, AP/CSE",
        mentor2Mail: "smanjula@ritrjpm.ac.in",

        mentor3: "Mrs.G.Kanmani, AP/CSE",
        mentor3Mail: "gkanmani@ritrjpm.ac.in"
    },

    "A1L04": {
        name: "First Year AIML",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "A2L05": {
        name: "First Year MECH",
        strength: 30,
        benches: 15,
        advisor: "Dr.S.Maharajan, ASP-I/Mech",
        advisorMail: "smaharajan@ritrjpm.ac.in",

        mentor1: "Dr.S.Maharajan, ASP-I/Mech",
        mentor1Mail: "smaharajan@ritrjpm.ac.in",

        mentor2: "Mr.C.Gururaj, AP(SG)/Mech",
        mentor2Mail: "cgururaj@ritrjpm.ac.in",

        mentor3: "Dr.M.Ashokkumar, AP-III/Mech",
        mentor3Mail: "mashokkumar@ritrjpm.ac.in"
    },

    "A2L04": {
        name: "First Year CSE A",
        strength: 63,
        benches: 32,
        advisor: "Mrs.C.Krishnakala, AP/CSE",
        advisorMail: "ckrishnakala@ritrjpm.ac.in",

        mentor1: "Dr.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Mrs.C.Krishnakala, AP/CSE",
        mentor2Mail: "ckrishnakala@ritrjpm.ac.in",

        mentor3: "Mrs.Latha, AP/CSE",
        mentor3Mail: "latha@ritrjpm.ac.in"
    },

    "A2L03": {
        name: "First Year IT",
        strength: 63,
        benches: 30,
        advisor: "Mrs.P.Ramya",
        advisorMail: "ramya@ritrjpm.ac.in",

        mentor1: "Mrs.M.Muthukumar",
        mentor1Mail: "muthukumar@ritrjpm.ac.in",

        mentor2: "Mrs.Ranjitha",
        mentor2Mail: "ranjitha@ritrjpm.ac.in",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "A2L02": {
        name: "First Year ECE B",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "A2L01": {
        name: "First Year ECE A",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B0L01": {
        name: "First Year AD A",
        strength: 63,
        benches: 31,
        advisor: "S.Pradeepha",
        advisorMail: "spradeepha@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B0L02": {
        name: "First Year AD B",
        strength: 63,
        benches: 31,
        advisor: "Dr.S.V.Anandhi",
        advisorMail: "svanandhi@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B0L03": {
        name: "First Year CSBS",
        strength: 63,
        benches: 31,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B1L05": {
        name: "First Year EEE",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B1L04": {
        name: "First Year CSE C",
        strength: 63,
        benches: 32,
        advisor: "K.Bala Karthik, AP/CSE",
        advisorMail: "balakarthik@ritrjpm.ac.in",

        mentor1: "Dr.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "K.Bala Karthik, AP/CSE",
        mentor2Mail: "balakarthik@ritrjpm.ac.in",

        mentor3: "Ms.Mahalakshmi M, AP/CSE",
        mentor3Mail: "mahalakshmi@ritrjpm.ac.in"
    },

    "B1L02": {
        name: "First Year CIVIL",
        strength: 30,
        benches: 25,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3L05": {
        name: "Final Year AD A",
        strength: 59,
        benches: 30,
        advisor: "Dr.C.Karpagavalli",
        advisorMail: "ckarpagavalli@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3L04": {
        name: "Third Year CIVIL",
        strength: 45,
        benches: 25,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3L03": {
        name: "Second Year CIVIL",
        strength: 41,
        benches: 25,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3L02": {
        name: "Final Year CSBS",
        strength: 60,
        benches: 30,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C2L05": {
        name: "Second Year MECH",
        strength: 42,
        benches: 25,
        advisor: "Dr.J.Jerold John Britto",
        advisorMail: "jeroldjohnbritto@ritrjpm.ac.in",

        mentor1: "Dr.J.Jerold John Britto",
        mentor1Mail: "jeroldjohnbritto@ritrjpm.ac.in",

        mentor2: "Mr.R.Prabhakaran",
        mentor2Mail: "rprabhakaran@ritrjpm.ac.in",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C2L04": {
        name: "Third Year MECH",
        strength: 63,
        benches: 31,
        advisor: "Mr.R.Prabhakaran",
        advisorMail: "rprabhakaran@ritrjpm.ac.in",

        mentor1: "Dr.J.Jerold John Britto",
        mentor1Mail: "jeroldjohnbritto@ritrjpm.ac.in",

        mentor2: "Dr.R.Venkatesh",
        mentor2Mail: "rvenkatesh@ritrjpm.ac.in",

        mentor3: "Mr.R.Prabhakaran",
        mentor3Mail: "rprabhakaran@ritrjpm.ac.in"
    },

    "C2L03": {
        name: "Final Year MECH",
        strength: 50,
        benches: 25,
        advisor: "Mr.L.Karthikeyan",
        advisorMail: "lkarthikeyan@ritrjpm.ac.in",

        mentor1: "Mr.L.Karthikeyan",
        mentor1Mail: "lkarthikeyan@ritrjpm.ac.in",

        mentor2: "Dr.R.Arun Kumar",
        mentor2Mail: "rarunkumar@ritrjpm.ac.in",

        mentor3: "Mr.M.Sivagaminathan",
        mentor3Mail: "msivagaminathan@ritrjpm.ac.in"
    },

    "C2L02": {
        name: "Third Year IT",
        strength: 62,
        benches: 31,
        advisor: "Dr.G.Mareeswari",
        advisorMail: "mareeswari@ritrjpm.ac.in",

        mentor1: "Mrs.G.Sivasathiya",
        mentor1Mail: "sivasathiya@ritrjpm.ac.in",

        mentor2: "Mrs.M.Rethinakumari",
        mentor2Mail: "rethinakumari@ritrjpm.ac.in",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C2L01": {
        name: "Second Year IT",
        strength: 64,
        benches: 32,
        advisor: "Mrs.M.Thulasdevi",
        advisorMail: "thulasdevi@ritrjpm.ac.in",

        mentor1: "Mrs.B.Thevahi",
        mentor1Mail: "thevahi@ritrjpm.ac.in",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3L01": {
        name: "Third Year AD A",
        strength: 59,
        benches: 30,
        advisor: "C.Usharani",
        advisorMail: "cusharani@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3L02": {
        name: "Third Year AD B",
        strength: 59,
        benches: 30,
        advisor: "Dr.M.Ramnath",
        advisorMail: "mramnath@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3L03": {
        name: "Second Year AD A",
        strength: 63,
        benches: 33,
        advisor: "B.Revathi",
        advisorMail: "brevathi@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3L04": {
        name: "Second Year AD B",
        strength: 63,
        benches: 31,
        advisor: "P.Vetrivel",
        advisorMail: "pvetrivel@ritrjpm.ac.in",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    // ================= RIGHT SIDE =================

    "B3R02": {
        name: "Second Year EEE",
        strength: 65,
        benches: 34,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3R03": {
        name: "Third Year EEE",
        strength: 64,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3R04": {
        name: "Third Year CSBS",
        strength: 61,
        benches: 31,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "B3R05": {
        name: "Second Year CSBS",
        strength: 55,
        benches: 28,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3R01": {
        name: "Second Year ECE A",
        strength: 64,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3R02": {
        name: "Second Year ECE B",
        strength: 64,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3R03": {
        name: "Third Year ECE A",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3R04": {
        name: "Third Year ECE B",
        strength: 62,
        benches: 31,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C3R05": {
        name: "Final Year ECE A",
        strength: 59,
        benches: 30,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "C2R04": {
        name: "Second Year CSE A",
        strength: 63,
        benches: 32,
        advisor: "Ms.G.Sakthi Priya AP/CSE",
        advisorMail: "gsakthipriya@ritrjpm.ac.in",

        mentor1: "Mrs.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Ms.G.Sakthi Priya",
        mentor2Mail: "gsakthipriya@ritrjpm.ac.in",

        mentor3: "Mrs.M.Arunthathi AP/CSE",
        mentor3Mail: "marunthathi@ritrjpm.ac.in"
    },

    "C2R05": {
        name: "Second Year CSE B",
        strength: 63,
        benches: 32,
        advisor: "Mrs.P.Devisri AP/CSE",
        advisorMail: "pdevisri@ritrjpm.ac.in",

        mentor1: "Mrs.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Mrs.P.Devisri AP/CSE",
        mentor2Mail: "pdevisri@ritrjpm.ac.in",

        mentor3: "Ms.S.Nandhini AP/CSE",
        mentor3Mail: "snandhini@ritrjpm.ac.in"
    },

    "C2R06": {
        name: "Second Year CSE C",
        strength: 64,
        benches: 32,
        advisor: "Dr.I Gethzi Ahila Poornima",
        advisorMail: "gethziahila@ritrjpm.ac.in",

        mentor1: "Mrs.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Mr.R.Bala Murugan AP/CSE",
        mentor2Mail: "rbalamurugan@ritrjpm.ac.in",

        mentor3: "Dr.M.Pandi Professor",
        mentor3Mail: "mpandi@ritrjpm.ac.in"
    },

    "A2R02": {
        name: "Third Year CSE A",
        strength: 64,
        benches: 32,
        advisor: "Dr.M.Swarna Sudha ASP/CSE",
        advisorMail: "swarnasudha@ritrjpm.ac.in",

        mentor1: "Mrs.K.Vijayalakshmi Professor & Head",
        mentor1Mail: "kvijayalakshmi@ritrjpm.ac.in",

        mentor2: "Mrs.R.Madhu AP/CSE",
        mentor2Mail: "rmadhu@ritrjpm.ac.in",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    },

    "A2R02A": {
        name: "Third Year CSBS B",
        strength: 63,
        benches: 32,
        advisor: "Not Available",
        advisorMail: "Not Available",

        mentor1: "Not Available",
        mentor1Mail: "Not Available",

        mentor2: "Not Available",
        mentor2Mail: "Not Available",

        mentor3: "Not Available",
        mentor3Mail: "Not Available"
    }
};


// 📌 ELEMENTS
const code = document.getElementById("code");
const title = document.getElementById("title");

const strength = document.getElementById("strength");
const benches = document.getElementById("benches");

const advisor = document.getElementById("advisor");
const advisorMail = document.getElementById("advisorMail");

const mentor1 = document.getElementById("mentor1");
const mentor1Mail = document.getElementById("mentor1Mail");

const mentor2 = document.getElementById("mentor2");
const mentor2Mail = document.getElementById("mentor2Mail");

const mentor3 = document.getElementById("mentor3");
const mentor3Mail = document.getElementById("mentor3Mail");

const status = document.getElementById("status");
const cpu = document.getElementById("cpu");
const projector = document.getElementById("projector");
const battery = document.getElementById("battery");

const saveBtn = document.getElementById("saveBtn");
const lastSaved = document.getElementById("lastSaved");


// 📥 DROPDOWN LOAD
code.innerHTML = `<option value="">Select Class</option>`;

for (let c in classData) {
    code.innerHTML += `
    <option value="${c}">
        ${c} - ${classData[c].name}
    </option>`;
}


// 🔥 LOAD CLASS
function loadClass(c) {

    if (!classData[c]) return;

    let d = classData[c];

    title.innerText = c + " - " + d.name;

    strength.value = d.strength;
    benches.value = d.benches;

    advisor.value = d.advisor;
    advisorMail.value = d.advisorMail;

    mentor1.value = d.mentor1;
    mentor1Mail.value = d.mentor1Mail;

    mentor2.value = d.mentor2;
    mentor2Mail.value = d.mentor2Mail;

    mentor3.value = d.mentor3;
    mentor3Mail.value = d.mentor3Mail;

    let saved = JSON.parse(localStorage.getItem(c));

    if (saved) {

        status.value = saved.status || "Available";
        cpu.value = saved.cpu || "Working";
        projector.value = saved.projector || "Working";
        battery.value = saved.battery || "Working";

        lastSaved.innerText = "Last Saved: " + saved.time;

    } else {

        status.value = "Available";
        cpu.value = "Working";
        projector.value = "Working";
        battery.value = "Working";

        lastSaved.innerText = "Last Saved: ---";
    }
}


// 🔁 CLASS CHANGE
code.addEventListener("change", function () {
    loadClass(this.value);
});


// 🔗 AUTO LOAD FIRST CLASS
let firstClass = Object.keys(classData)[0];

code.value = firstClass;

loadClass(firstClass);


// 🔒 ROLE CONTROL
if (role === "Student") {

    document.querySelectorAll("input, select").forEach(el => {

        if (el.id !== "code") {
            el.disabled = true;
        }

    });

    saveBtn.style.display = "none";

} else {

    strength.disabled = true;
    benches.disabled = true;

    advisor.disabled = true;
    advisorMail.disabled = true;

    mentor1.disabled = true;
    mentor1Mail.disabled = true;

    mentor2.disabled = true;
    mentor2Mail.disabled = true;

    mentor3.disabled = true;
    mentor3Mail.disabled = true;
}


// 💾 SAVE FUNCTION
function saveData() {

    if (role === "Student") {
        alert("❌ No permission");
        return;
    }

    let c = code.value;

    if (!c) {
        alert("Select class ❌");
        return;
    }

    let now = new Date();

    let formattedTime = now.toLocaleString();

    let data = {

        status: status.value,
        cpu: cpu.value,
        projector: projector.value,
        battery: battery.value,

        time: formattedTime
    };

    localStorage.setItem(c, JSON.stringify(data));

    lastSaved.innerText = "Last Saved: " + formattedTime;

    alert("✅ Saved Successfully");
}


// 💾 SAVE BUTTON
saveBtn.addEventListener("click", saveData);


// 🔴 LOGOUT BUTTON
let logoutBtn = document.createElement("button");

logoutBtn.innerText = "Logout";

logoutBtn.style.position = "fixed";
logoutBtn.style.bottom = "15px";
logoutBtn.style.right = "15px";
logoutBtn.style.padding = "6px 12px";
logoutBtn.style.background = "#d9534f";
logoutBtn.style.color = "white";
logoutBtn.style.border = "none";
logoutBtn.style.borderRadius = "6px";
logoutBtn.style.fontSize = "12px";
logoutBtn.style.cursor = "pointer";

document.body.appendChild(logoutBtn);


// 🚪 LOGOUT
logoutBtn.onclick = function () {

    localStorage.clear();

    window.location.href = "about:blank";
};
