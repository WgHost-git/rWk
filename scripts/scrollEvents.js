window.onbeforeunload = function() {
    window.scroll(0, 0);
}

const main = document.querySelector('.main');
const container = document.querySelector('.container');
const containerOffsetTop = container.offsetTop;
const leftMenu = document.querySelector('.left-menu');

window.addEventListener('load', () => {
    container.style.transform = `translateY(-${window.scrollY}px)`;
    //container.style.transform = 'none';
});

window.addEventListener('scroll', () => {
    // Получаем размеры и позицию элемента относительно видимой области страницы
    let headerRect = header.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    // Определяем позицию верхней грани элемента относительно всего документа с учетом скролла
    let containerTop = containerRect.top + window.scrollY;

    // console.log(main.scrollTop)
    // console.log(container.offsetTop)
    // console.log(window.innerHeight)
    //console.log(containerRect.top)

    //console.log((((window.scrollY*2)/20) - 50))

    if((((window.scrollY*2)/20) - 50) < 0){
        leftMenu.style.transform = `translateX(${(((window.scrollY*2)/20) - 50)}px)`;
    }

    //container.style.transform = `translateY(-${window.scrollY}px)`;
     if (containerRect.top > 0){
         container.style.transform = `translateY(-${window.scrollY}px)`;
     }
});

window.addEventListener('beforeunload', () => {
    container.style.transform = 'none';
});