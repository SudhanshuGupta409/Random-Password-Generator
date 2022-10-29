const btnEl = document.querySelector(".btn");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert");
const inputEl = document.getElementById("input");

btnEl.addEventListener("click", ()=>{
    creatPassword();
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    if(inputEl.value) {
        alertEl.classList.remove("active");
        setTimeout(()=>{
            alertEl.classList.add("active");
        }, 2000);
    }
});

function creatPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz@#$$%&**!!!#$&??/\*-_ABCDEFGHIJKLMNOPQRSTUVWXYZ"   
    const passwordLength = 10;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertEl.innerText = password + " copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}