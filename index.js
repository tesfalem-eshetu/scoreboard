let homescorepoint = 0
let guestscorepoint = 0

function addHome1Point(){
    homescorepoint += 1
    document.getElementById("homeScore").textContent = homescorepoint
}
function addHome2Point(){
    homescorepoint += 2
    document.getElementById("homeScore").textContent = homescorepoint
}
function addHome3Point(){
    homescorepoint += 3
    document.getElementById("homeScore").textContent = homescorepoint
}
function addGuest1Point(){
    guestscorepoint += 1
    document.getElementById("guestScore").textContent = guestscorepoint
}
function addGuest2Point(){
    guestscorepoint += 2
    document.getElementById("guestScore").textContent = guestscorepoint
}
function addGuest3Point(){
    guestscorepoint += 3
    document.getElementById("guestScore").textContent = guestscorepoint
}

function resetScore(){
    homescorepoint = 0
    guestscorepoint = 0
    document.getElementById("homeScore").textContent =homescorepoint 
    document.getElementById("guestScore").textContent = guestscorepoint
}
