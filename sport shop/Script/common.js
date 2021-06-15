'use strict';

document.addEventListener("DOMContentLoaded", () => {
    /*header */
    const scrollTopBtn = document.querySelector('#scroll-top');
    window.addEventListener('scroll', () => {
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

    /*footer */
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


    //タブメニューの処理
    const tab_item = document.querySelectorAll('.tab-item');
    const tab_content = document.querySelectorAll('.tab-content');

    for (let i = 0; i < tab_item.length; i++) {
        tab_item[i].addEventListener('click', () => {
            for (let j = 0; j < tab_item.length; j++) {
                tab_item[j].classList.remove('active-tab');
                tab_content[j].classList.remove('show');
            }
            tab_item[i].classList.add('active-tab');
            tab_content[i].classList.add('show');
        })
    }
});