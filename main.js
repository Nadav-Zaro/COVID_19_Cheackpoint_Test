const userName = document.getElementById("firstName")
const userLastName = document.getElementById("lastName")
const userBirth = document.getElementById("birthYear")
const userId = document.getElementById("userId")
const userCity = document.getElementById("city")
const button = document.getElementById("btn")
const button2 = document.getElementById("btn2")
const searchedPantient = document.getElementById("searchedPantient")
const searchInput = document.getElementById("searchInput")
const head = document.getElementById("head")
const clk = document.getElementById("clk")
let currentMin = new Date().getMinutes()
let currentDay = new Date().getDate()
let currentHours = new Date().getHours()
let currentMonth = new Date().getMonth() + 1
const PatList = document.getElementById("PatList")
var patientList = []

button.onclick = () => {
    var patient = {
        first_name: userName.value,
        last_name: userLastName.value,
        birth_year: Number(userBirth.value),
        id: Number(userId.value),
        city: userCity.value,
        currentDate: currentHours + ":" + currentMin + " " + currentDay + "/" + currentMonth,
    }
    for (let i = 0; i < patientList.length; i++) {
        if (userId.value == patientList[i].id) {
            alert("user already in the systym")
            return
        }
    }
    patientList.push(patient)
    console.log(patientList);

    PatList.innerHTML += `<table class="list1"><tr><td class="td"><p>${patient.first_name}</p></td><td class="td"><p>${patient.last_name}</p></td><td class="td"><p>${patient.birth_year}</p></td>
    <td class="td"><p>${patient.id}</p></td><td class="td"><p>${patient.city}</p></td><td class="td"><p>${patient.currentDate}</p></td></tr></table>`
}

function toUpper(userInput) {
    userInput.value = userInput.value.toUpperCase()
}
userName.oninput = () => { toUpper(userName) }
userLastName.oninput = () => { toUpper(userLastName) }
userCity.oninput = () => { toUpper(userCity) }
searchInput.oninput = () => { toUpper(searchInput) }

button2.onclick = () => {
    for (let i = 0; i < patientList.length; i++) {
        if (searchInput.value == patientList[i].first_name) {
            searchedPantient.innerHTML = `<table  class="list1 list2"><tr><td class="td"><p>${patientList[i].first_name}</p></td><td class="td"><p>${patientList[i].last_name}</p></td><td class="td"><p>${patientList[i].birth_year}</p></td>
            <td class="td">${patientList[i].id}</td><td class="td"><p>${patientList[i].city}</p></td><td class="td"><p>${patientList[i].currentDate}</p></td></tr></table>`
            return
        }
        else{
            searchedPantient.innerHTML =`<p>user not found</p>`
        }
        if (searchInput.value == patientList[i].id) {
            searchedPantient.innerHTML = `<table class="list1 list2"><tr><td class="td"><p>${patientList[i].first_name}</p></td><td class="td"><p>${patientList[i].last_name}</p></td><td class="td"><p>${patientList[i].birth_year}</p></td>
            <td class="td"><p>${patientList[i].id}</p></td><td class="td"><p>${patientList[i].city}</p></td><td class="td"><p>${patientList[i].currentDate}</p></td></tr></table>`
            return
        }
        else{
            searchedPantient.innerHTML =`<p>user not found</p>`
        }
    }
}

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
function clock() {
    window.setInterval(() => {
        if (seconds == 60) {
            seconds = 0
            minutes++
        }
        if (seconds < 10) {
            console.log("ddtgd");
            seconds = "0" + seconds;
        }
        if (minutes == 60) {
            minutes = 0
            hours++
        }
        if (minutes < 10) {
            minutes = "0" + Number(minutes);
        }
        if (hours == 24) {
            hours = 0
        }
        clk.innerHTML = `<p>${hours}:${minutes}:${seconds}</p>`
        seconds++
    }, 1000);
}
clock()