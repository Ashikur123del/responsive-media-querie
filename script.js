

// typing script js
   var typed = new Typed(".typing",{
        strings: ["Web Designer", "Web Development", "Front Development",
         "Blogger"],
        typeSpeed: 80,
        typeSpeed: 80,
   });


   var typed = new Typed(".typing-2",{
     strings: ["Front-End Development", "Jonier Development"],
     typeSpeed: 80,
     typeSpeed: 80,
});
   
// ====Show/hide nav menu===//

const menu = document.querySelector('.nav-menu');

const menuBtn = document.querySelector('#open-menu-btn');

const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
     menu.style.display = "flex";
     closeBtn.style.display = "inline-block";
     menuBtn.style.display = "none"
})

//    close nav menu

const colesNav = () => {
     menu.style.display = "none";
     closeBtn.style.display = "none";
     menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', colesNav);


//nav color change on scroll

window.addEventListener('scroll', () => {
     document.querySelector('nav').classList.
     toggle('window-scroll', window.scrollY>100)
})





