let resetScore = document.getElementById("rst")
let scoreHme = document.getElementById("scoreHome")
let scoreGst = document.getElementById("scoreGuest")
let count=0
function scrhme1(){
    count +=1
    scoreHme.textContent=count
}
function scrhme2(){
    count +=2
    scoreHme.textContent=count
}
function scrhme3(){
    count +=3
    scoreHme.textContent=count
}
function scrgst1(){
    count +=1
    scoreGst.textContent=count
}
function scrgst2(){
    count +=2
    scoreGst.textContent=count
}
function scrgst3(){
    count +=3
    scoreGst.textContent=count
}
function rstScore(){
    scoreHme.textContent=0
    count=0
    scoreGst.textContent=0
    count=0
}
