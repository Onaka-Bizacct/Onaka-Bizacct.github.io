'use strict'

var swiper1 = new Swiper('.main-bg', {
    loop: true,
    effect: 'fade',
    speed: 2000,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

var swiper2 = new Swiper('.slider-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

const title = document.querySelectorAll('.footer-title');

for (let i = 0; i < title.length; i++) {
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
        titleEach.classList.toggle('is-active');
        content.classList.toggle('is-open');
    });
}
/*
document.addEventListener("DOMContentLoaded", () => {

    const scrollTopBtn = document.querySelector('#scroll-top');
    window.addEventListener('scroll', () => {
        let header = document.querySelector('#main-header');
        header.classList.toggle('scroll-nav', window.scrollY > 0);
        scrollTopBtn.classList.toggle('active', window.scrollY > 0);
    });

    const nav = document.querySelectorAll('.nav-menu');
    const link = document.querySelectorAll('.nav-link');

    for (let i = 0; i < nav.length; i++) {
        let navEach = nav[i];
        let linkEach = link[i];
        let pulldown = linkEach.nextElementSibling;
        if (window.innerWidth > 700) {
            navEach.addEventListener('mouseover', () => {
                pulldown.classList.toggle('is-open');
            })
            navEach.addEventListener('mouseout', () => {
                pulldown.classList.toggle('is-open');
            })
        } else {
            navEach.addEventListener('click', () => {
                pulldown.classList.toggle('is-open');
            })
        }

    }

    function hamburger() {
        document.getElementById('line1').classList.toggle('line_1');
        document.getElementById('line2').classList.toggle('line_2');
        document.getElementById('line3').classList.toggle('line_3');
        document.querySelector('.main-nav').classList.toggle('in');
    }
    document.getElementById('hamburger').addEventListener('click', function () {
        hamburger();
    });

    const title = document.querySelectorAll('.footer-title');

    for (let i = 0; i < title.length; i++) {
        let titleEach = title[i];
        let content = titleEach.nextElementSibling;
        titleEach.addEventListener('click', () => {
            titleEach.classList.toggle('is-active');
            content.classList.toggle('is-open');
        });
    }


    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        });
    })
});*/