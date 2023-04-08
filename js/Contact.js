let txt = document.querySelector('input[type="text"]');
let num = document.querySelector('input[type="number"]');
let sm1 = document.querySelector('.sm1');
let sm2 = document.querySelector('.sm2');
let sbt = document.querySelector('input[type="submit"]');
let input_all = document.querySelectorAll('input');
let textbox = document.querySelector('textarea');
let cap = document.querySelector('.captcha ');
let cap_input = cap.querySelector('input');
let cap_val = cap.querySelector('span')
let reload = cap.querySelector('i');

txt.addEventListener('keyup',(e)=>{
    if(e.target.value.length >= 3 && e.target.value.trim()!=="" && e.target.value != "."){
        sm1.style.display = "none";
        sbt.disabled = false;
    }

    else{
        sm1.style.display = "inline-flex";
        sbt.disabled = true;
    }

})


num.addEventListener('keyup',(e)=>{
    if(e.target.value.length >= 11){
        sm2.style.display = "none";
        sbt.disabled = false
    }
    else{
        sm2.style.display = "inline-flex";
        sbt.disabled = true;
    }
})


if(cap_input.innerHTML=""){
    sbt.disabled = true;
    cap_input.style.border = "1px solid red";

}

if(textbox.innerHTML=""){
    sbt.disabled = true;
    textbox.style.border = "1px solid red";

}


// captcha working==============================
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let currentRandomText = '';

function generateNewRandomText() {
//   let newText = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomInt(0, chars.length - 1);
    cap_val.innerHTML += chars[randomIndex];
  }
//   currentRandomText = newText;
//   document.getElementById('random-text').textContent = currentRandomText;
//   cap_val.innerHTML = currentRandomText;
}

// generate the initial random text
generateNewRandomText();

reload.addEventListener('click',()=>{
    cap_val.innerHTML = "";
    generateNewRandomText();
    cap_input.value = "";
    cap_input.style.border = "1px solid rgb(224, 222, 222)";


})


// let val;
cap_input.addEventListener('keyup',(e)=>{
    if(e.target.value.length >= 7){
        for(let i = 0; i < e.target.value.length-1; i++){

            if(e.target.value[i]==cap_val[i] && i < 7){
                cap_input.style.border = "1px solid rgb(224, 222, 222)";
                if(i>6){
                    sbt.disabled=false;              
                }
            }
            else{
                cap_input.style.border = "1px solid red";
                sbt.disabled = true;
            }
        }

        
    }
    else{
        sbt.disabled = true;
    }
 
    // if(e.target.value.length < 5 && e.target.value.trim()==""){
    //     cap_input.style.border = "1px solid red";
    //     sbt.disabled = true;
    // }

    // else{
    //     cap_input.style.border = "1px solid rgb(224, 222, 222)";
    //     sbt.disabled=false;

    // }
})

