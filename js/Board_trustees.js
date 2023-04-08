let main = document.querySelector('.content-box');
let intro = document.querySelector('.intro');

const obj1 = [
    {
        pic : './images/management/trustees/1.-Prof.-Dr.-Waqar-Hussain-KazmiPresident.png',
        title : 'Prof. Dr Waqar Hussain Kazmi',
        p : 'President SSWAB Trust / Chief Nephrologist'
    },
    {
        pic : './images/management/trustees/2.-Dr.-K.-Alam.-Pervaiz-Rizvi-Vice-President.png',
        title : 'Dr. K. Alam. Pervaiz Rizvi',
        p : '(Vice President)'
    },
    {
        pic : './images/management/trustees/3.-Razia-Mehkri-Senior-Vice-President.png',
        title : 'Razia Mehkri',
        p : '(Senior Vice President)'
    },
    {
        pic : './images/management/trustees/4.-Khurram-ZafarGeneral-Secretary.png',
        title : 'Khurram Zafar',
        p : '(General Secretary)'
    },
    {
        pic : './images/management/trustees/5.-Syed-Anwer-Suhail-Rizvi-Finance-Secratory.png',
        title : 'Syed Anwer Suhail Rizvi',
        p : '(Finance Secretory)'
    },
    {
        pic : './images/management/trustees/6.-Mr.-Syed-Zia-Ur-Rahman-Joint-Secretary.png',
        title : 'Mr. Syed Zia Ur Rahman',
        p : '(Joint Secretary)'
    },
    {
        pic : './images/management/trustees/7.-Senator-Abdul-Haseeb-Khan-Executive-Committee-Member.png',
        title : 'Senator Abdul Haseeb Khan',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/8.-Farhan-Hanif-Executive-Committee-Member.png',
        title : 'Farhan Hanif',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/9.-Dr.-Shahnaz-AMin-Karim-General-Body-Member.png',
        title : 'Dr. Shahnaz Amin Karim',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/10.-Sardar-Muhammad-Yaseen-Malick-General-Body-Member.png',
        title : 'Sardar Muhammad Yaseen Malick',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/11.-Mr.-Adnan-IshtiaqueExecutive-Committee-Member.png',
        title : 'Mr. Adnan Ishtiaque',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/12.-Mr.-Liaquat-Rasheed-Executive-Committee-Member.png',
        title : 'Mr. Liaquat Rasheed',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/13.-Omar-Khan-General-Body-Member.png',
        title : 'Omar Khan',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/14.-Engr.-Syed-Ashraf-Karim-Executive-Committee-Member.png',
        title : 'Engr. Syed Ashraf Karim',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/15.-Syed-Nadeem-Ahmed-Bukhari-General-Body-Member.png',
        title : 'Syed Nadeem Ahmed Bukhari',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/16.-Junaid-Aftab-Executive-Committee-Member.png',
        title : 'Junaid Aftab',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/18.-Muhammad-Ali-Yaqoob-General-Body-Member.png',
        title : 'Muhammad Ali Yaqoob',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/19.-Masood-Naqi-Executive-Committee-Member.png',
        title : 'Masood Naqi',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/20.-Rehan-Rauf-General-Body-Member.png',
        title : 'Rehan Rauf',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/21.-Sheikh-Khalid-Tawab-General-Body-Member.png',
        title : 'Sheikh Khalid Tawab',
        p : '(General Body Member)'
    },
    {
        pic : './images/management/trustees/22.-Ahmed-Chinoy-Executive-Committee-Member.png',
        title : 'Ahmed Chinoy',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/23.-Shahid-Zaki-Executive-Committee-Member.png',
        title : 'Shahid Zaki',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/25.-Mr.-Syed-Mohammad-Ansar-Ul-Hasan-Executive-Committee-Member.png',
        title : 'Mr. Syed Mohammad Ansar Ul Hasan',
        p : '(Executive Committee Member)'
    },
    {
        pic : './images/management/trustees/26.-Iqbal-Yousaf-Haq-General-Body-Member.png',
        title : 'Iqbal Yousaf Haq',
        p : '(Finance Secretory)'
    },
    {
        pic : './images/management/trustees/29.-Dr.Ysmeen-Raza-General-Body-Member.png',
        title : 'Dr. Yasmeen Raza',
        p : '(General Body Member)'
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
            el.classList.add('content-card');
            el.innerHTML = `
            <img src="${obj.pic}">
            <h4>${obj.title}</h4>
            <p>${obj.p}</p>`;

        main.appendChild(el);

        })






function management(event,id) {
    event.preventDefault();

    // if(id==="trustees"){
    //     if(intro.hasChildNodes()){
    //         intro.removeChild(intro.firstChild);
    //         let para = document.createElement('p');
    //         para.innerHTML = 'SSWAB boards of trustees consist of individuals who hold high-ranking positions in other organizations and businesses. Which is very valuable in guiding the SSWAB trust’s mission and strategy.';
    //         intro.appendChild(para);
    //         data_replicate(id);
    //     }

    //     else{
    //         let para = document.createElement('p');
    //         para.innerHTML = 'SSWAB boards of trustees consist of individuals who hold high-ranking positions in other organizations and businesses. Which is very valuable in guiding the SSWAB trust’s mission and strategy.';
    //         intro.appendChild(para);
    //         data_replicate(id);
    //     }

          
    // }

    // if(id==="medical"){
        
    // }


    
    
}
