const navActive = () =>{
    const nav = document.querySelector('.nav')
    window.addEventListener('scroll', () =>{
            nav.classList.toggle('nav-active', scrollY>226);
    });
}

const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links button');

    burger.addEventListener('click', () =>{

        nav.classList.toggle('nav-slide-active');
        
        navLinks.forEach((link, index) => {
            if(link.style.animation)
                link.style.animation = '';
            else
                link.style.animation = `navLinkFade 0.5s ease forwards ${0.25 + index / 5}s`;    
        });

        burger.classList.toggle('burger-click');
    });
}

const App = () =>{
    navActive();
    navSlide();
}

App();