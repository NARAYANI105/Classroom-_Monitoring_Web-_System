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


// 📚 CLASS DATA
const classData = {

"A1L03":{
name:"First Year CSE B",
strength:63,
benches:32,

advisor:"Mrs.S.Manjula",
advisorMail:"smanjula@ritrjpm.ac.in",

mentor1:"Dr.K.Vijayalakshmi",
mentor1Mail:"kvijayalakshmi@ritrjpm.ac.in",

mentor2:"Mrs.G.Kanmani",
mentor2Mail:"gkanmani@ritrjpm.ac.in",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"A1L04":{
name:"First Year AIML",
strength:63,
benches:32,

advisor:"Mrs.K.Priya",
advisorMail:"priya@ritrjpm.ac.in",

mentor1:"P.Venkatesh",
mentor1Mail:"venkatesh@ritrjpm.ac.in",

mentor2:"Dr.G.Kanthimathi",
mentor2Mail:"gkanthimathi74@ritrjpm.ac.in",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"A2L05":{
name:"First Year MECH",
strength:30,
benches:15,

advisor:"Dr.S.Maharajan",
advisorMail:"smaharajan@ritrjpm.ac.in",

mentor1:"Mr.C.Gururaj",
mentor1Mail:"cgururaj@ritrjpm.ac.in",

mentor2:"Dr.M.Ashokkumar",
mentor2Mail:"mashokkumar@ritrjpm.ac.in",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"A2L04":{
name:"First Year CSE A",
strength:63,
benches:32,

advisor:"Mrs.C.Krishnakala",
advisorMail:"ckrishnakala@ritrjpm.ac.in",

mentor1:"Dr.K.Vijayalakshmi",
mentor1Mail:"kvijayalakshmi@ritrjpm.ac.in",

mentor2:"Mrs.Latha",
mentor2Mail:"latha@ritrjpm.ac.in",

mentor3:"Mrs.Deepalakshmi",
mentor3Mail:"deepalakshmi@ritrjpm.ac.in"
},

"A2L03":{
name:"First Year IT",
strength:63,
benches:30,

advisor:"Mrs.P.Ramya",
advisorMail:"ramya@ritrjpm.ac.in",

mentor1:"Mrs.M.Muthukumar",
mentor1Mail:"muthukumar@ritrjpm.ac.in",

mentor2:"Mrs.Ranjitha",
mentor2Mail:"ranjitha@ritrjpm.ac.in",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"A2L02":{
name:"First Year ECE B",
strength:63,
benches:32,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"A2L01":{
name:"First Year ECE A",
strength:63,
benches:32,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B0L01":{
name:"First Year AD A",
strength:63,
benches:31,

advisor:"S.Pradeepha",
advisorMail:"pradeepha@ritrjpm.ac.in",

mentor1:"Mrs.G.Kavitha",
mentor1Mail:"kavitha@ritrjpm.ac.in",

mentor2:"Dr.N.Nagamani",
mentor2Mail:"nagamani@ritrjpm.ac.in",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B0L02":{
name:"First Year AD B",
strength:63,
benches:31,

advisor:"Dr.S.V.Anandhi",
advisorMail:"vanandhi@ritrjpm.ac.in",

mentor1:"Mr.P.Vetrivel",
mentor1Mail:"vetrivel@ritrjpm.ac.in",

mentor2:"Mrs.V.Logapriya",
mentor2Mail:"logapriya@ritrjpm.ac.in",

mentor3:"Mrs.M.Santhikala",
mentor3Mail:"santhikala@ritrjpm.ac.in"
},

"B0L03":{
name:"First Year CSBS",
strength:63,
benches:31,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B1L05":{
name:"First Year EEE",
strength:63,
benches:32,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B1L04":{
name:"First Year CSE C",
strength:63,
benches:32,

advisor:"K.Bala Karthik",
advisorMail:"balakarthik@ritrjpm.ac.in",

mentor1:"Dr.K.Vijayalakshmi",
mentor1Mail:"kvijayalakshmi@ritrjpm.ac.in",

mentor2:"Ms.Mahalakshmi",
mentor2Mail:"mahalakshmi@ritrjpm.ac.in",

mentor3:"Dr.P.Thiruramanathan",
mentor3Mail:"thiruramanathan@ritrjpm.ac.in"
},

"B1L02":{
name:"First Year CIVIL",
strength:30,
benches:25,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B3L05":{
name:"Final Year AD A",
strength:59,
benches:30,

advisor:"Dr.C.Karpagavalli",
advisorMail:"karpagavalli@ritrjpm.ac.in",

mentor1:"Dr.M.Kaliappan",
mentor1Mail:"kaliappan@ritrjpm.ac.in",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B3L04":{
name:"Third Year CIVIL",
strength:45,
benches:25,

advisor:"Mrs.A.Leema Margret",
advisorMail:"leemamargret@ritrjpm.ac.in",

mentor1:"Dr.S.Dharmar",
mentor1Mail:"dharmar@ritrjpm.ac.in",

mentor2:"Dr.T.Chockalingam",
mentor2Mail:"chockalingam@ritrjpm.ac.in",

mentor3:"Mrs.R.Kalaimani",
mentor3Mail:"kalaimani@ritrjpm.ac.in"
},

"B3L03":{
name:"Second Year CIVIL",
strength:41,
benches:25,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
},

"B3L02":{
name:"Final Year CSBS",
strength:60,
benches:30,

advisor:"Not Available",
advisorMail:"Not Available",

mentor1:"Not Available",
mentor1Mail:"Not Available",

mentor2:"Not Available",
mentor2Mail:"Not Available",

mentor3:"Not Available",
mentor3Mail:"Not Available"
}
