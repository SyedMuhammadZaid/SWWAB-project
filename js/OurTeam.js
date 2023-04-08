let main = document.querySelector('.content-box');
let content = document.querySelector('.content-card');
let intro = document.querySelector('.intro');

const obj1 = [
    {
        pic : './images/management/Our Team/pic1.jpeg',
        title : 'Shahla Ahmed',
        desc : 'Executive Director',
        p : 'MBA (Marketing), The International University, Missouri, USA, PGD Health Management, Middlesex University, London, UK.'
    },
    {
        pic : './images/management/Our Team/shuja.jpg',
        title : 'Syed Shujaat Ali',
        desc : 'Manager Administration',
        p : 'Bachelor in Business Administration (Hons) , Certif. in Human Resource Management’s Challenges from KU'
    },
    {
        pic : './images/management/Our Team/pic3.jpeg',
        title : 'Muhammad Imran',
        desc : 'Manager Accounts',
        p : 'Executive Master in Finance & Accounts, Bachelor in Commerce from the University of Karachi.'
    },
    {
        pic : './images/management/Our Team/pic4.jpeg',
        title : 'Engineer Zeeshan Ahmed',
        desc : 'Bio Medical Engineer',
        p : 'Bsc. in Bio-Medical Engineering from Sir Syed University, Registered Engineer from Pakistan Engineering Council (PEC).'
    },
    {
        pic : './images/management/Our Team/pic5.jpeg',
        title : 'Lubna Hashim',
        desc : 'Human Resource Executive',
        p : 'BBA (Hons) in Marketing,MBA in Human Resources Management'
    }
   
]


    if(main.firstChild){
        if(main.children.length > 0){
            while(main.firstChild){
                main.removeChild(main.firstChild)
            }
        }
    }

 
        obj1.map((obj)=>{
            let el = document.createElement("div");
            el.style.width = "608px;"
            // el.style.padding = "2rem";
            el.classList.add('content-card');
            el.innerHTML = `
            <img src="${obj.pic}">
            <h4>${obj.title}</h4>
            <h5>${obj.desc}</h5>
            <p style="font-style:italic; color:gray;">${obj.p}</p>`;

        main.appendChild(el);

        })






// function management(event,id) {
//     event.preventDefault();
