const password = document.getElementById("password");
const background = document.getElementById("background");
password.addEventListener("input" , ()=>{
    const input = password.value;
    const blurvalue = 16 - input.length;
    background.style.filter = `blur(${blurvalue}px)`;
});