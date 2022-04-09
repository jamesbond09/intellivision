
'use strict';
const navlink = document.querySelector('.nav')
navlink.addEventListener('click',function(){
navlink.classList.toggle('nav-open');
});

const navlinks = document.querySelectorAll('.nav-link');

const navWork = document.querySelector('[data-set="work"]');
const navAbout = document.querySelector('[data-set="about"]');
const navTest = document.querySelector('[data-set="test"]');
const navPlan = document.querySelector('[data-set="plan"]');
const navBlog = document.querySelector('[data-set="blog"]');
const navContact = document.querySelector('[data-set="contact"]');
const navHome = document.querySelector('[data-set="home"]');

const work = document.querySelector('.section-work');
const home = document.querySelector('.header');
const discuss = document.querySelector('.section-discuss');
const test = document.querySelector('.section-testimonials');
const plans = document.querySelector('.section-plans');
const blog = document.querySelector('.section-blog');
const contact = document.querySelector('.section-contact');
const workObs = function(entries){
    const [entry] = entries;
    
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navWork.classList.add('active-link');
    }

};

const workObserver = new IntersectionObserver(workObs, {
    root:null,
    threshold:.1,
});
workObserver.observe(work);

const testObs = function(entries){
    const [entry] = entries;

    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navTest.classList.add('active-link');
    }

};

const testObserver = new IntersectionObserver(testObs, {
    root:null,
    threshold:.1,
});
testObserver.observe(test);

const planObs = function(entries){
    const [entry] = entries;
    
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navPlan.classList.add('active-link');
    }

};

const planObserver = new IntersectionObserver(planObs, {
    root:null,
    threshold:.1,
});
planObserver.observe(plans);


const blogObs = function(entries){
    const [entry] = entries;
    
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navBlog.classList.add('active-link');
    }

};

const blogObserver = new IntersectionObserver(blogObs, {
    root:null,
    threshold:.1,
});
blogObserver.observe(blog);

const contactObs = function(entries){
    const [entry] = entries;
    
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navContact.classList.add('active-link');
    }

};

const contactObserver = new IntersectionObserver(contactObs, {
    root:null,
    threshold:.1,
});
contactObserver.observe(contact);

const aboutObs = function(entries){
    const [entry] = entries;
    
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navAbout.classList.add('active-link');
    }

};

const aboutObserver = new IntersectionObserver(aboutObs, {
    root:null,
    threshold:.1,
});
aboutObserver.observe(discuss);

const homeObs = function(entries){
    const [entry] = entries;
    if(entry.isIntersecting){
navlinks.forEach(el=> el.classList.remove('active-link'));
navHome.classList.add('active-link');
    }

};

const homeObserver = new IntersectionObserver(homeObs, {
    root:null,
    threshold:.1,
});
homeObserver.observe(home);