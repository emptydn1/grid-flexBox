var layer = document.getElementById('layer');
var ob1 = document.getElementById('object-1');
var ob2 = document.getElementById('object-2');
var ob3 = document.getElementById('object-3');
var ob4 = document.getElementById('object-4');
var nav = document.getElementById('sss');

layer.addEventListener("mousemove", function(e) {
    var x = e.pageX * -1/15;
    var y = e.pageY * -1/15;
    var xx = e.pageY * -1/14;
    var yy = e.pageY * -1/14;
    ob1.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ob2.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ob3.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    ob4.style.transform = `translate3d(${xx}px, ${yy}px, 0)`;
});



// slides
var slides = document.getElementsByClassName('slide-item');
var buttons = document.getElementsByClassName('btn-slide');

remove = (array, classes) => {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove(`${classes}`);
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        remove(buttons, 'active-button');
        this.classList.add('active-button');
        var action = this;
        for (var position = 0; action = action.previousElementSibling; position++) {}
        remove(slides, 'active-slide');
        remove(slides, 'moveRight');
        remove(slides, 'moveLeft');
        clearInterval(clickSlide);
        slides[position].classList.add('active-slide');
        slides[firstPosition].classList.add('moveLeft');
        slides[position].classList.add('moveRight');
        firstPosition = position;
    })
}


//auto Slide
var clickSlide = setInterval(() => {
    autoSlide();
}, 4000);

function autoSlide(){
    var active = document.querySelector('.active-slide');
    for (var position = 0; active = active.previousElementSibling; position++) {}
    if(position < slides.length - 1){
        remove(slides, 'active-slide');
        remove(buttons, 'active-button');
        remove(slides, 'moveRight');
        remove(slides, 'moveLeft');
        buttons[position].nextElementSibling.classList.add('active-button');
        slides[position].nextElementSibling.classList.add('active-slide');
        slides[position].nextElementSibling.classList.add('moveRight');
        slides[position].classList.add('moveLeft');
    }
    else{
        remove(slides, 'active-slide');
        remove(buttons, 'active-button');
        remove(slides, 'moveRight');
        remove(slides, 'moveLeft');
        buttons[0].classList.add('active-button');
        slides[0].classList.add('active-slide');
        slides[0].classList.add('moveRight');
        slides[slides.length - 1].classList.add('moveLeft');
    }
}

// scroll
a = ['effect-section-a', 'effect-content', 'effect-content'];
run = (tag, classes) => {
    var tag = document.getElementsByClassName(`${tag}`);
    for (let i = 0; i < tag.length; i++) {
        for (let j = 0; j < classes.length; j++) {
            if(i == j){
                if(pageYOffset > tag[i].offsetTop - 200){
                    tag[i].classList.add(`${classes[i]}`);
                }   
            }
        }
    }
}

var navBlur = document.getElementsByClassName('nav-blur');
var nav = document.getElementById('sss');
var se = document.getElementById('section-e');
var sg = document.getElementById('section-g');
var sEnd = document.getElementById('section-end');
var time=0;
window.addEventListener('scroll', function(){
    run('effect', a);
    if(pageYOffset > navBlur[0].offsetTop - 100){
        nav.classList.add('active-nav');
    }
    else{
        nav.classList.remove('active-nav')
    }
    if(time == 0 && pageYOffset > se.offsetTop - 100){
        countc();
        time = 1;
    }
    sg.style.backgroundPositionY = `${pageYOffset/2 * - 1}px`;
    sEnd.style.backgroundPositionY = `${pageYOffset/4 * - 0.5}px`;
})



//count
var count = document.getElementsByClassName('count');

function countc(){
    var d = 0;
    var clear = setInterval(function (){
        function ch(){
            for (let i = 0; i < count.length; i++) {
                count[i].innerHTML= `${d}`;
                d+= 10;
                if( d == 1010){
                    return d;
                }
            }
        }
        if(ch() == 1010){
            clearInterval(clear);
        }
    }, 20)
}