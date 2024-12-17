// главная замена фото или видео
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        // Скрыть все слайды
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        // Показать текущий слайд
        const slide = slides[index];
        slide.style.display = "block";

        // Если это видео, дождаться окончания
        const video = slide.querySelector("video");
        if (video) {
            video.play();
            video.onended = () => {
                nextSlide();
            };
        } else {
            // Если изображение, сменить через 5 секунд
            setTimeout(nextSlide, 5000);
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Запуск слайдера
    showSlide(currentSlide);
});

// товары 
document.addEventListener("DOMContentLoaded", () => {
    const collection = document.getElementById("collection");

    // Пример товаров
    const items = [
        { name: "Пуховик с капюшоном", price: "50 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Пальто из шерсти", price: "50 990,00", image: "./../img-video/котик ❤️.jpg" },
        { name: "Куртка комбинированная", price: "50 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Джинсы Cropped", price: "21 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Джинсы Baggy Fit", price: "21 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Свитер из шерсти", price: "42 990,00", image: "../img-video/котик ❤️.jpg"},
        { name: "Джинсы Cropped", price: "21 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Джинсы Baggy Fit", price: "21 990,00", image: "../img-video/котик ❤️.jpg" },
        { name: "Свитер из шерсти", price: "42 990,00", image: "../img-video/котик ❤️.jpg"},
        { name: "Джинсы Cropped", price: "21 990,00", image: "../img-video/котик ❤️.jpg" }
    ];

    // Добавление карточек
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price} ₸</p>
        `;
        collection.appendChild(card);
    });
});