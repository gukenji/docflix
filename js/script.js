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
const searchButton = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');

var newWidth = 0;
var slideAtual = 0;

const setSlidePosition = (slide, index) => {
    width = slide.getBoundingClientRect().width;
    slide.style.left = (width * index) + 'px';
};

const moveToSlide = (track, currentSlide, targetSlide) => {
    toggleTransitionOn();
    moveSlide();
    currentSlide.classList.remove('active-slide');
    targetSlide.classList.add('active-slide');
}

// desloca os demais slides para a direita
slides.forEach(setSlidePosition);


window.addEventListener('resize', e => {
    toggleTransitionOff();
    moveSlide();
})

const moveSlide = () => {
    slides.forEach(setSlidePosition);
    newWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + newWidth * slideAtual + 'px)';

}

const toggleTransitionOff = () => {
    track.classList.remove('transition');
    track.classList.add('no-transition');
}

const toggleTransitionOn = () => {
    track.classList.remove('no-transition');
    track.classList.add('transition');
}


nextButton.addEventListener('click', e => {
    slideAtual += 1;
    if (slideAtual == slides.length - 1) {
        nextButton.classList.add('hidden');
    } else {
        carouselContainer.style.padding = '0';
    };
    const currentSlide = track.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    const currentNav = carouselIndicatorNav.querySelector('.active-slide');
    const nextNav = currentNav.nextElementSibling;
    currentNav.classList.remove('active-slide');
    nextNav.classList.add('active-slide');
    prevButton.classList.remove('hidden');
});

prevButton.addEventListener('click', e => {
    slideAtual -= 1;
    if (slideAtual == 0) {
        carouselContainer.style.paddingLeft = '4%';
        prevButton.classList.add('hidden');
    } else {
        null;
    };
    const currentSlide = track.querySelector('.active-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    const currentNav = carouselIndicatorNav.querySelector('.active-slide');
    const prevNav = currentNav.previousElementSibling;
    currentNav.classList.remove('active-slide');
    prevNav.classList.add('active-slide');
    nextButton.classList.remove('hidden');
});

// clicando no nav do carrossel:
carouselIndicatorNav.addEventListener('click', e => {
    const targetNav = e.target.closest('button');
    if (!targetNav) return;
    const currentSlide = track.querySelector('.active-slide');
    const currentNav = carouselIndicatorNav.querySelector('.active-slide');
    const targetIndex = carouselIndicator.findIndex(nav => nav === targetNav);
    slideAtual = targetIndex;
    if (slideAtual === 0) {
        prevButton.classList.add('hidden')
        nextButton.classList.remove('hidden');
        carouselContainer.style.paddingLeft = '4%';
    } else if (slideAtual === 3) {
        nextButton.classList.add('hidden');
        prevButton.classList.remove('hidden')
        carouselContainer.style.padding = '0';
    } else {
        carouselContainer.style.padding = '0';
        nextButton.classList.remove('hidden');
        prevButton.classList.remove('hidden');
    }
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    currentNav.classList.remove('active-slide');
    targetNav.classList.add('active-slide');

})


// animacoes botoes
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
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.add('active');

    }

     if (document.activeElement !== searchButton && document.activeElement !== searchInput) {
        searchInput.classList.add('animate-input');
     }   

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
    })
});


// busca
searchButton.addEventListener('click', e => {
    searchInput.classList.remove('animate-input');
})