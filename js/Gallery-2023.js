let c = document.querySelector("i");
let j = document.querySelector(".sidebar");
let decide = false;
let content = document.querySelector('.content');


// array of images for opt1
// const d = ["./images/about.jpeg","./images/services.png","./images/about.jpeg","./images/about.jpeg","./images/about.jpeg"]
// array of images for opt2
// const e = ["./images/about.jpeg","./images/services.png","./images/about.jpeg"]
// array of images for opt3
const e = ["./images/about.jpeg"]



c.addEventListener("click", () => {  
      if (decide) {
        j.style.display = "none";
        decide = false;
      } 
      else {
          j.style.display = "block";
          decide = true;
        }
    })

const data_replicate=(lst)=>{
        if(content.firstChild){
          if(content.children.length > 0){
              while(content.firstChild){
                  content.removeChild(content.firstChild)
          }
      }
  }
    lst.map((ele)=>{
        const divv = document.createElement('div');
        divv.classList.add('card');
        const images = document.createElement('img');
        images.classList.add('forimg')
        images.src = ele;
        divv.appendChild(images);  
        content.appendChild(divv);  
        let card = content.querySelectorAll('.card');
    })    
  
}



const func1=(event,id)=>{
    j.style.display = "none";
    content.style.display = "flex";
    event.preventDefault();
    const a = document.querySelector('#'+id);

    // first - id
    if(id=="first-a"){
        data_replicate(d);
    }
    
    // second - id
    if(id=="first-b"){
        data_replicate(e);
    }


    // // third - id
    // if(id=="first-c"){
    //     data_replicate(f);
    // } 

    // // fourth - id
    // if(id=="first-d"){
    //     data_replicate()
    // }

    // // fifth - id
    // if(id=="first-e"){
    //     data_replicate()
    // }

    // // sixth - id
    // if(id=="first-f"){
    //     data_replicate()
    // }

    // // seventh - id  
    // if(id=="first-g"){
    //     data_replicate()
    // }
    
    // // eight - id  
    // if(id=="first-h"){
    //     data_replicate()
    // }
    
    // // nine - id  
    // if(id=="first-i"){
    //     data_replicate()
    // }
    
    // // ten - id  
    // if(id=="first-j"){
    //     data_replicate()
    // }
    
    // // eleventh - id  
    // if(id=="first-k"){
    //     data_replicate()
    // }

//       if(content.firstChild){
//         if(content.children.length > 0){
//             while(content.firstChild){
//                 content.removeChild(content.firstChild)
//         }
//     }
// }
//         d.map((ele)=>{
//             const divv = document.createElement('div');
//             divv.classList.add('card');
//             const images = document.createElement('img');
//             images.classList.add('forimg')
//             images.src = ele;
//             divv.appendChild(images);  
//             content.appendChild(divv);  
//             let card = content.querySelectorAll('.card');
//         })    



    // // second - id
    // if(a.id=="first-b"){
    //     if(content.firstChild){
    //     if(content.children.length > 0){
    //         while(content.firstChild){
    //             content.removeChild(content.firstChild)
    //         }
    //     }
    // }

//         e.map((ele)=>{
//             const divv = document.createElement('div');
//             divv.classList.add('card');
//             const images = document.createElement('img');
//             images.classList.add('forimg')
//             images.src = ele;
//             divv.appendChild(images);  
//             content.appendChild(divv);  
//             let card = content.querySelectorAll('.card');

//     })

// }

//     // Third - id
//     if(a.id=="third-a"){
//         if(content.firstChild){
//         if(content.children.length > 0){
//             while(content.firstChild){
//                 content.removeChild(content.firstChild)
//         }
//     }
//     }
//         d.map((ele)=>{
//             const divv = document.createElement('div');
//             divv.classList.add('card');
//             const images = document.createElement('img');
//             images.classList.add('forimg')
//             images.src = ele;
//             divv.appendChild(images);  
//             content.appendChild(divv);  
//             let card = content.querySelectorAll('.card');
//         })    
//     }
}
