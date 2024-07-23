// CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>80)
})

// show/hide faq answers

let faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');


        // close open change icons

        let icon = faq.querySelector('.faq__icon i');

        if(icon.className === 'bx bx-plus'){
            icon.className = 'bx bx-minus';
        }else{
            icon.className = 'bx bx-plus';
        }
    })
})

// ============= OPEN AND CLOSE MENU ===========

let menu = document.querySelector('.nav__menu');
let btnmenu = document.querySelector('#open_menu_btn');
let closebtn = document.querySelector('#close_menu_btn');

btnmenu.addEventListener('click',()=>{
    menu.style.display= 'flex';
    closebtn.style.display='inline-block';
    btnmenu.style.display='none';
})

closebtn.addEventListener('click',()=>{
    menu.style.display='none';
    btnmenu.style.display= 'inline-block';
    closebtn.style.display='none';
})
