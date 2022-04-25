$(function () {
    $(document).scroll(function () {
        var $nav = $(".top-container");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    })
    $("#navegar").mouseover(function () {
        $("#dropdown-icon", this).css('rotate', '180deg')
        $("#dropdown-icon", this).css('transition-duration', '0.5s');
    });
    $("#navegar").mouseout(function () {
        $("#dropdown-icon", this).css('rotate', '0deg')
        $("#dropdown-icon", this).css('transition-duration', '0.5s');
    });

});



const buttons = document.querySelector('.carousel__button');
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const carouselContainer = document.querySelector('.carousel__movies-container');
const track = document.querySelector('.carousel__movies');
const slides = Array.from(track.children);
const carouselIndicatorNav = document.querySelector('.carousel__nav')
const carouselIndicator = Array.from(carouselIndicatorNav.children);
var newWidth = 0;
var slideAtual = 0;

const setSlidePosition = (slide,index) => {
    width = slide.getBoundingClientRect().width;
    slide.style.left = (width * index) + 'px';
};

// desloca os demais slides para a direita
slides.forEach(setSlidePosition);  


window.addEventListener('resize', e => {
    slides.forEach(setSlidePosition); 
    newWidth = slides[0].getBoundingClientRect().width;
    toggleTransitionOff();
    track.style.transform = 'translateX(-' +  newWidth*slideAtual + 'px)';
})

const toggleTransitionOff = () =>{
    track.classList.remove('transition');
    track.classList.add('no-transition');
}

const toggleTransitionOn = () =>{
    track.classList.remove('no-transition');
    track.classList.add('transition');
}


nextButton.addEventListener('click', e => {
    slideAtual += 1;
    if (slideAtual == slides.length-1) {
        nextButton.classList.add('hidden');
    } else{
        carouselContainer.style.padding = '0';
    };
    
    slides.forEach(setSlidePosition); 
    toggleTransitionOn();
    const currentSlide = track.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('active-slide');
    nextSlide.classList.add('active-slide');
    currentNav = carouselIndicatorNav.querySelector('.active-slide');
    const nextNav = currentNav.nextElementSibling;
    currentNav.classList.remove('active-slide');
    nextNav.classList.add('active-slide');
    prevButton.classList.remove('hidden');



});



prevButton.addEventListener('click', e => {
    slideAtual -= 1;
    if (slideAtual==0) {
        carouselContainer.style.padding = '0 4%';
        prevButton.classList.add('hidden');
    } else {
        null;
    };
    toggleTransitionOn();
    const currentSlide = track.querySelector('.active-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('active-slide');
    prevSlide.classList.add('active-slide');
    currentNav = carouselIndicatorNav.querySelector('.active-slide');
    const prevNav = currentNav.previousElementSibling;
    currentNav.classList.remove('active-slide');
    prevNav.classList.add('active-slide');
    nextButton.classList.remove('hidden');
});


nextButton.addEventListener('mouseover', e => {
    nextButton.children[0].style.transition = "ease-in 300ms";
    nextButton.children[0].style.transform = "scale(1.5)";

});

prevButton.addEventListener('mouseover', e => {
    prevButton.children[0].style.transition = "ease-in 300ms";
    prevButton.children[0].style.transform = "scale(1.5)";

});

prevButton.addEventListener('mouseout', e => {
    prevButton.children[0].style.transition = "ease-in 300ms";
    prevButton.children[0].style.transform = "scale(1)";

});

nextButton.addEventListener('mouseout', e => {
    nextButton.children[0].style.transition = "ease-in 300ms";
    nextButton.children[0].style.transform = "scale(1)";

});







document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null ) return;
   
   let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.add('active');

    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
});

