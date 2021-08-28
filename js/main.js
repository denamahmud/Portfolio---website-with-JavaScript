
// Scroll Down

let scrollBottom = document.querySelector(".scroll-bottom");
let bodyDOM = document.getElementsByName("body");
let buttonCvDownload = document.querySelector('.button-cv-download');
let scrollTopBtb = document.querySelector('.scroll-top');

scrollBottom.addEventListener("click", function(){

    window.scrollTo({
        top : 800,
        left : 0,
        behavior : "smooth"
    });

});












// Filter Projects

let buttonFilterGroup = document.querySelector('.button-filter-group');
let projectImg = document.querySelectorAll('.project-img');
let btnProject = document.querySelectorAll('.btn-project');


buttonFilterGroup.onclick = selectedItem => {

    buttonFilterGroup.querySelector('.active').classList.remove("active")
    let selectedButton = selectedItem.target.getAttribute("data-name");
    selectedItem.target.classList.add('active');
    


    projectImg.forEach(item => {

        let projectImage = item.getAttribute("data-name");

        if((projectImage == selectedButton) || (selectedButton == "all")){

            item.classList.remove("hide")
            item.classList.add("show")
        }else{
            item.classList.add("hide");
            item.classList.remove("show")
        }

    });
}


// Dark Mode
let changeToWhite = document.querySelector('.white');
let changeToBlack = document.querySelector('.black');
let bodyClass = document.querySelector('.body');

changeToWhite.onclick = function(){

    this.style.display = "none";
    changeToBlack.innerHTML = `
    <i class="fas fa-toggle-on fa-2x"></i>
    
    `;
    changeToBlack.style.display = "block";
    bodyClass.style.background = "linear-gradient(to right, #111, #444)";
}
changeToBlack.onclick = function(){

    this.style.display = "none";
    changeToWhite.innerHTML = `
       <i class="fas fa-toggle-off fa-2x"></i>
    
    `;
    changeToWhite.style.display = "block";
    bodyClass.style.background = "linear-gradient(to right, rgb(243, 243, 243), rgb(255, 255, 255))";
}


window.onscroll = function(){
    
// Counter 


if(scrollY > 1000){
    let likes = setInterval(facebookLikes, 30);
    let projects = setInterval(projectDone, 30);
    let clients = setInterval(HappyClients, 30);
    let counter1 = 1;
    let counter2 = 1;
    let counter3 = 1;

    
    function facebookLikes(){
        counter1++;
        document.getElementById("counter-one").innerHTML = counter1 + "K";
        

        if(counter1 == 150){
            clearInterval(likes)
        }
    }
    function projectDone(){
        counter2++;
        document.getElementById("counter-two").innerHTML = counter2;
        

        if(counter2 == 100){
            clearInterval(projects)
        }
    }
    function HappyClients(){
        counter3++;
        document.getElementById("counter-three").innerHTML = counter3;
        

        if(counter3 == 90){
            clearInterval(clients)
        }
    }
    
}
// Scroll top
    if(scrollY > 150){
        scrollTopBtb.style.display = "block";
      

    }else{
        scrollTopBtb.style.display = "none";
    }
}
scrollTopBtb.addEventListener("click", function(){

    window.scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth"
    });


    

})
