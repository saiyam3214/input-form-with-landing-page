let sumbit = document.querySelector("#claim-btn")
let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let inputs = document.querySelectorAll("input")

sumbit.addEventListener("click",checkEmpty)
function checkEmpty(){
    let inputs = document.querySelectorAll("input")
    let fname = document.querySelector("#fname")
    let lname = document.querySelector("#lname")
    let email = document.querySelector("#email")
    let pass = document.querySelector("#pass")
    console.log(inputs);
    inputs.forEach((vue) => {
        let khalivalueaya = false;
        if(vue.value == ""){
            vue.style.border = "2px solid red"
            khalivalueaya = true;     
        }else{
            vue.style.borderColor = "black"
        }
        if(khalivalueaya){
            alert("Empty fields")
        }

        
    })



}