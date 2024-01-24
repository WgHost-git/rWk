
// загрузка основной страницы
const mainPage = () => {
    const main = document.querySelector('.main');
    // добавление шарика UI прокрутки
    addBouncy(main);

    const container = document.querySelector('.container');
    // добавление пузырьков в контейнер
    addBubbles(container);
    // добавление волн на контейнер
    addWaves(container);

    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('skills__container');
    container.append(skillsContainer);
    //const skillsContainer = document.querySelector('.skills__container');

    // добавление книги в скилл контейнер
    addBook(skillsContainer)
    // добавление карточек в контейнер
    addCard(skillsContainer);
    // добавление опыта работы
    addExperience(container);
    // добавление галерии
    addGallery(container);

    // добовление обо мне
    container.insertAdjacentHTML('beforeend', `<div class="aboutMe"></div>`);
}

mainPage();

// добавление шарика UI прокрутки
function addBouncy (element){
    const html = `      
      <div class="loader-container">
        <div>
          <div class="bouncybox">
            <div class="bouncy"></div>
          </div>
        </div>
      </div>
    `

    element.insertAdjacentHTML('afterbegin', html);
}

// добавление пузырьков в контейнер
function addBubbles (element){
    const html = `      
      <div class="bubbels">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
    `

    element.insertAdjacentHTML('afterbegin', html);
}

// добавление волн на контейнер
function addWaves (element){
    const html = `      
        <div class="waves__container">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
    `

    element.insertAdjacentHTML('beforeend', html);
}

// добавление книги в скилл контейнер
function addBook(element){
    const html = `
     <div class="skills__book__container">      
       <div class="book">
         <div class="gap"></div>
         <div class="pages">
           <div class="page"></div>
           <div class="page"></div>
           <div class="page"></div>
           <div class="page"></div>
           <div class="page"></div>
           <div class="page"></div>
         </div>
         <div class="flips">
           <div class="flip flip1">
             <div class="flip flip2">
               <div class="flip flip3">
                 <div class="flip flip4">
                   <div class="flip flip5">
                     <div class="flip flip6">
                       <div class="flip flip7"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    `

    element.insertAdjacentHTML('afterbegin', html);
}

// добавление карточек в контейнер
function addCard(element){

    const arrSkills = {
        names: [
            "ASP.NET Core",
            "HTML CSS JS",
            "Docker",
            "PostgreSQL",
            "Kafka & RebbitMQ",
        ],
        description: [
            " ASP.NET Core <br/> кросс-платформенный фреймворк для разработки веб-приложений.",
            " HTML, CSS и JS  <br/> три основных языка веб-разработки для создания веб-страниц.",
            " Docker  <br/> платформа для разработки, доставки и запуска приложений в контейнерах.",
            " PostgreSQL  <br/> расширяемая объектно-реляционная система управления базами данных.",
            " Kafka и RabbitMQ  <br/> популярные системы сообщений, используются для обмена данными между компонентами приложений и систем.",
        ],
        backgroundImg: [
            "../images/asp.jpg",
            "../images/js.jpg",
            "../images/docker.jpg",
            "../images/postgres.jpg",
            "../images/kafka.jpg",
        ]
    }

    const html = `<div class="card-container"></div>`
    element.insertAdjacentHTML('beforeend', html);

    const cardContainer = document.querySelector('.card-container');

    arrSkills.names.forEach((element, index) => {
        const card = `
            <a class="card">
              <div class="card-inner">
                <div class="card-back">
                  <span>${arrSkills.description[index]}</span>
                </div>
                <div class="card-front numberCard-${index}"><span>${element}</span></div>
              </div>
            </a>
        `
        cardContainer.insertAdjacentHTML('beforeend', card);

        // const cardItem = document.querySelector(`.numberCard-${index}`);
        // cardItem.style.backgroundImage = `url(${arrSkills.backgroundImg[index]})`;
    })



}

// добавление опыта работы
function addExperience(element){
    const html = `<div class="experience"><p>Стаж работы: ~ 5 лет</p></div>`
    element.insertAdjacentHTML('beforeend', html);
}

// добавление галерии
function addGallery(element){
    const html = `
     <div class="examples__container">
      <div class="container__gallery">
        <div class="gallery-wrap">
          <div class="item item-1"></div>
          <div class="item item-2"></div>
          <div class="item item-3"></div>
          <div class="item item-4"></div>
          <div class="item item-5"></div>
        </div>
      </div>
     /div>
    `
    element.insertAdjacentHTML('beforeend', html);
}
