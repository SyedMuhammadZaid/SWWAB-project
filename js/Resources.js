let btn = document.querySelector('button');
console.log('btn')
let url = "C:/Users/Administrator/Desktop/SWWAB/resources/npo-certificate.pdf";

btn.addEventListener('click',()=>{
    window.open(url,'_blank');
})