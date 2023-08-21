const openNav = document.getElementById("open")
const closeNav = document.getElementById("close")


const sideNavBar = document.querySelector(".sidenav")

closeNav.addEventListener('click', closeSideNavBar)

function closeSideNavBar() {
    sideNavBar.classList.toggle("mango") 
    closeNav.textContent = sideNavBar.classList.contains("mango") ? "Open Sidebar" : "Close Sidebar"
}

// const closeSidebar = function(){
//     closeNav.textContent = "Open Sidebar"
//     sideNavBar.style.display = "none"
// }

// const openSidebar = function(){
//     closeNav.textContent = "Close Sidebar"
//     sideNavBar.style.display = "block"
// }
const btnEleHover = function(item){
    item.style.cursor = "pointer";
}

const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"

}

function eleHover(element) {
    element.style.backgroundColor = "yellow";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function() {
    document.querySelector("#company").textContent = "Sales Force";
};

const normal = function() {
    document.querySelector("#company").textContent = "Company"
}

const keyPressed = function() {
    document.querySelector("body").style.backgroundColor = "white"
}

const keyDown = function() {
    document.querySelector("body").style.backgroundColor = "red"
}

const loginButton = document.getElementById("loginBtn")
const loginModel = document.getElementById("loginSection")
// const sideNavBar = document.querySelector(".sidenav")
const mainSection = document.querySelectorAll(".main .section")

loginButton.onclick = showLogin

function showLogin(){
    sideNavBar.style.display = "none";
    mainSection.forEach(function(item){
        item.style.display = "none";
    })
    loginModel.style.display = "block"
}


document.getElementById("closeBtn").addEventListener("click", hideLogin)

function hideLogin(){
    sideNavBar.style.display = "block";
    mainSection.forEach(function(item){
        item.style.display = "block"
    })
    loginModel.style.display = "none"
}

document.getElementById("loginSubmit").addEventListener("mouseover", function(){
    this.style.background = "green"
})

document.getElementById("loginSubmit").addEventListener("mouseout", function(){
    this.style.background = "#1768AC"
})
 
const navBorder = document.getElementById("add-border")
navBorder.addEventListener("click", addingBorder)

function addingBorder(){
    document.querySelector("header").style.border = "5px solid black"
}

if (10 > 20){
    navBorder.removeEventListener("click", addingBorder)
}

const mainForm = document.getElementById("myForm")
const userName = document.getElementById("nameInput")
const inputName = document.getElementById("name")

mainForm.addEventListener("submit", function(event){
    event.preventDefault()
    // const myUserName =  userName.value
    inputName.textContent = userName.value
    mainForm.reset()
})

 
     

userName.addEventListener("focus", function(event){
    // userName.style.background
    event.target.style.background = "pink"
})

userName.addEventListener("blur", function(event){
    event.target.style.background = ""
})

const myNewColors = document.getElementById("myColors")
const myNewBox = document.getElementById("box")

myNewColors.addEventListener("change", function(){
    myNewBox.style.background = myNewColors.value
})

// mainForm.addEventListener("input", function(event){
//     event.preventDefault()
//     const myUserName =  userName.value
//     inputName.textContent = myUserName
// })



// /////// Events and Event Listeners
    // Mouse Events
        // click
        // dblclick
        // mouseover
        // mouseout
        // mouseenter
        // mouseleave
        // mousedown
        // mouseup

    // Keyboard Events
        // keydown
        // keyup
        // keypress

    // Form Events
        // submit
        // reset
        // focus
        // blur
        // change
        // input
// ////////////////////////////////

// //////////////// classList  ////////////
    // add
    // remove
    // toggle
    // contains
    // replace