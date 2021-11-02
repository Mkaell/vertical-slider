window.addEventListener('DOMContentLoaded', () => {

    const upBtn = document.querySelector('.up-button'),
          downBtn = document.querySelector('.down-button'),
          sideBar = document.querySelector('.sidebar'),
          container = document.querySelector('.container'),
          mainSlide = document.querySelector('.main-slide'),
          slidesCount = mainSlide.querySelectorAll('div').length;

    
    let activeSlideIndex = 0;  
    
    sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

    upBtn.addEventListener('click', () => {
        changeSlide('up');
    });

    downBtn.addEventListener('click', () => {
        changeSlide('down');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            changeSlide('up');
        } else if(event.key === 'ArrowDown') {
            changeSlide('down');
        }
    });

    function changeSlide(direction) {
        if (direction === 'up') {
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            }
        } else if (direction === 'down'){
            activeSlideIndex--;
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1;
            }
        }

        const viewport = container.clientHeight;

        mainSlide.style.transform = `translateY(-${activeSlideIndex * viewport}px)`;
        sideBar.style.transform = `translateY(${activeSlideIndex * viewport}px)`; 
    }

});