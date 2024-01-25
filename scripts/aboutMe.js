// Добавление текста обо мне при определенной высоте скрола
window.addEventListener('scroll', addTextAboutMe);
function addTextAboutMe() {
    // Определенная высота, на которой нужно добавить блок кода
    const triggerHeight = 500;
    // Текущая прокрутка
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
    const aboutMe = document.querySelector('.aboutMe');

    if (scrollHeight >= triggerHeight) {

        aboutMe.insertAdjacentHTML('afterbegin', `
            <div class="title__aboutMe">
                 <div class="words word-1">
                    <span>О</span>
                    <span></span>
                    <span>Б</span>
                    <span>О</span>
                    <span></span>
                    <span>М</span>
                    <span>Н</span>
                    <span>Е</span>
                </div>
                <div class="words word-2">
                  <span>О</span>
                  <span>П</span>
                  <span>Ы</span>
                  <span>Т</span>
                  <span></span>
                  <span>Р</span>
                  <span>А</span>
                  <span>Б</span>
                  <span>О</span>
                  <span>Т</span>
                  <span>Ы</span>
                </div>
            </div>
        `);

        const cardAboutMe = document.createElement('div');
        cardAboutMe.classList.add('aboutMe__container');
        aboutMe.append(cardAboutMe);

        const aboutMeText = [
            {
                text: [
                    "Привет! Меня зовут Виталий, и я разработчик, специализирующийся на ASP.NET Core, C# и JavaScript.",
                    "Я обладаю опытом работы с этими технологиями и готов писать качественный и лаконичный код.",
                    "Как разработчик ASP.NET Core, есть опыт создания десятка веб-приложений и веб-сервисов. ",
                    "На текущий момент являюсь 'Ведущим программистом ОАО РЖД и занимаю эту должность более 2х лет.",
                    "Начал работу с фриланса, потом попав в РЖД реализовал веб-сервис, который работает по всей",
                    "России и использует Apache Kafka, как брокер сообщений. Сервис соединяет две платформы",
                    "такие как Robin и Chat Navigator компании Црт. Моя команда внедряла ИИ Chat Navigator,",
                    "чаты текстовые и голосовые по всей России и успешно внедренный проект в 2020 – 2021 году ",
                    "принес колоссальные преимущества компании РЖД.",
                ]
            },
            {
                text: [
                    "Я опытен в языке программирования C#. C# является мощным и элегантным языком программирования,",
                    "который я использую для разработки бэкэнд-функциональности в своих проектах. У меня есть опыт ",
                    "работы с объектно-ориентированным программированием, обработкой исключений, ",
                    "асинхронным программированием и другими возможностями C#.",
                    "Кроме того, я также владею JavaScript, который я использую для разработки интерактивного фронтэнда",
                    "и динамических функций веб-приложений.",
                ]
            },
            {
                text: [
                    "Я обладаю значительным опытом в области автоматизации процессов с использованием ",
                    "платформы Robin Studio.  Мной было разработано и внедрено более 100 роботов, успешно ",
                    "функционирующих для автоматизации различных процессов на всей территории России.",
                ]
            },
            {
                text: [
                    "Я нахожусь в постоянном процессе развития и постоянно стремлюсь усовершенствовать ",
                    "свои навыки программирования с каждым днем.",
                    "В целом, я готов применить свои знания и опыт в разработке ваших проектов на основе ",
                    "ASP.NET Core с использованием C# и JavaScript. ",
                ]
            }
        ]

        aboutMeText.forEach((element) => {
            const paragraphСardAboutMe = document.createElement('div');
            paragraphСardAboutMe.classList.add('aboutMe__container__paragraph');
            cardAboutMe.append(paragraphСardAboutMe);

            element.text.forEach((element) => {
                const itemCard = `
              <div class="aboutMe__typing">${element}</div>
            `
                paragraphСardAboutMe.insertAdjacentHTML('beforeend', itemCard);
            });

        });

        window.removeEventListener('scroll', addTextAboutMe);
    }
}
