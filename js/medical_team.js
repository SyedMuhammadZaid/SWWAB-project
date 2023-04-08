let main = document.querySelector('.content-box');
let content = document.querySelector('.content-card');

let intro = document.querySelector('.intro');

const obj1 = [
    {
        pic : './images/management/medical/1.-Prof.-Dr.-Waqar-Hussain-KazmiPresident.jpg',
        title : 'Prof. Dr Waqar Hussain Kazmi',
        desc : 'President SSWAB Trust / Chief Nephrologist',
        p : 'Nephrologist and Diabetologist Professor & Head of Nephrology & Director of Research Post-Graduate Programs at Liaquat College of Medicine & Dentistry, Former Principal, Karachi Medical & Dental College, with Special interest in Diabetes & Hypertension.'
    },
    {
        pic : './images/management/medical/shanaz.jpg',
        title : 'Dr. Shahnaz A. Karim',
        desc : 'M.D., F.A.A.P.M.R. (International Consultant)',
        p : 'Board Certified in Physical Medicine & Rehabilitation Fibromyalgia, Headache, Chronic Pain.'
    },
    {
        pic : './images/management/medical/amin.jpg',
        title : 'Dr. Amin H. Karim',
        desc : 'M.D., F.A.C.C. (International Consultant)',
        p : 'Clinical Associate Professor, Baylor College of Medicine, Clinical Assistant Professor, Weill Medical College of Cornell University, and Methodist Academy of Medicine. Diagnostic and Interventional Cardiology.'
    },
    {
        pic : './images/management/medical/anees.jpg',
        title : 'Surg. Anees ur Rehman Soomro',
        desc : 'Assistant Professor, MBBS; FCPS (UROL)',
        p : 'Assistant professor Liaquat college of medicine & dentistry; Darul Sehat hospital,Laparoscopic & endoscopic consultant – urologist'
    },
    {
        pic : './images/management/medical/Dr_hassan_liaq.jpg',
        title : 'Asst. Prof. Dr. Hassan Liaquat Memon',
        desc : 'Consultant Gastroenterologist & Hematologist',
        p : 'MBBS, FCPS (Gastroenterology) Assistant Professor United Medical College Liver Transplant Physician & Intervention Endoscopist'
    },
    {
        pic : './images/management/medical/dr_arsi.jpg',
        title : 'Dr. Sumaira Asi',
        desc : 'Sonologist',
        p : 'MBBS, Peoples Medical College, Nawabshah University of Sindh,Sonologist at National Medical Centre'
    },
    {
        pic : './images/management/medical/hamid.jpg',
        title : 'Dr. Hamid Fazal',
        desc : 'Associate Nephrologist',
        p : 'MBBS from Sindh Medical University MD from ECFMG (USA), USA Medical Licensing Exam Step 3, Postgraduate Diploma in Nutrition from AIOU.'
    },
    {
        pic : './images/management/medical/aliawan.jpg',
        title : 'Muhammad Ali Awan',
        desc : 'In Charge Dialysis Unit',
        p : 'Postgraduate Diploma in Dialysis Technician.'
    },
    {
        pic : './images/management/medical/faraz.jpg',
        title : 'Faraz Muhammad Siddique',
        desc : 'Senior Dialysis Technician',
        p : 'Dialysis Technician Course. ICU Technician Course.'
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
