const intakepg = document.querySelector(".intake-btn")
const adoptpg = document.querySelector(".adopt-btn")
const reclaimepg = document.querySelector(".reclaim-btn")
const animalpg = document.querySelector(".animal-btn")
const logoutBtn = document.querySelector(".logout-btn")

intakepg.addEventListener("click", ()=>{
    window.location.replace("testpg.html")
})

adoptpg.addEventListener("click", ()=>{
    window.location.replace("login.html")
})

reclaimepg.addEventListener("click", ()=>{
    window.location.replace("testpg.html")
})

animalpg.addEventListener("click", ()=>{
    window.location.replace("login.html")
})

logoutBtn.addEventListener("click", ()=>{
window.location.replace("index.html")
})