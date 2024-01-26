let selectSocialMedia = document.querySelector('.select-social-media')
let angleDown = document.querySelector('.angle-down')
let para = document.querySelector('p')


selectSocialMedia.addEventListener('click',()=>{
    console.log("social media clicked");
})

angleDown.addEventListener('click',()=>{
    console.log("down clicked");
    let applicationList = document.querySelector('.applications-list');

    if(applicationList.style.visibility==="hidden"){

        applicationList.style.visibility="visible";


    } else{

        applicationList.style.visibility="hidden";

    }

    

})




let listItems= document.querySelectorAll('.list-items');

listItems.forEach(mylist=>{
    mylist.addEventListener('click',()=>{
       
        para.innerHTML=mylist.innerHTML
        let applicationList = document.querySelector('.applications-list');
        if(applicationList.style.visibility==="hidden"){

            applicationList.style.visibility="visible";
    
    
        } else{
    
            applicationList.style.visibility="hidden";
    
        }
    })
    
})







