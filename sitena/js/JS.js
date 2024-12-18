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





document.addEventListener("DOMContentLoaded", () => {
    const collection = document.getElementById("collection");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Пример товаров
    const items = [
        {
            name: "Длинная стеганая куртка",
            price: "45 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Классическая куртка с высоким воротником и длинными рукавами."
        },
        {
            name: "Кожаная куртка",
            price: "39 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Элегантная кожаная куртка с карманами и прочным материалом."
        },
        {
            name: "Легкая стеганая куртка",
            price: "12 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Легкая куртка с наполнителем для повседневного использования."
        },
        {
            name: "Длинная стеганая куртка",
            price: "45 990 ₸",
            image: "../img-video/котик ❤️.jpg", // Используйте папку 'images' в проекте
            description: "Классическая куртка с высоким воротником и длинными рукавами."
        },
        {
            name: "Кожаная куртка",
            price: "39 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Элегантная кожаная куртка с карманами и прочным материалом."
        },
        {
            name: "Легкая стеганая куртка",
            price: "12 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Легкая куртка с наполнителем для повседневного использования."
        },
        {
            name: "Длинная стеганая куртка",
            price: "45 990 ₸",
            image: "../img-video/котик ❤️.jpg", // Используйте папку 'images' в проекте
            description: "Классическая куртка с высоким воротником и длинными рукавами."
        },
        {
            name: "Кожаная куртка",
            price: "39 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Элегантная кожаная куртка с карманами и прочным материалом."
        },
        {
            name: "Легкая стеганая куртка",
            price: "12 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Легкая куртка с наполнителем для повседневного использования."
        },
        {
            name: "Длинная стеганая куртка",
            price: "45 990 ₸",
            image: "../img-video/котик ❤️.jpg", // Используйте папку 'images' в проекте
            description: "Классическая куртка с высоким воротником и длинными рукавами."
        },
        {
            name: "Кожаная куртка",
            price: "39 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Элегантная кожаная куртка с карманами и прочным материалом."
        },
        {
            name: "Легкая стеганая куртка",
            price: "12 990 ₸",
            image: "../img-video/котик ❤️.jpg",
            description: "Легкая куртка с наполнителем для повседневного использования."
        }
    ];

    // Генерация карточек товаров
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="image-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <div class="price">${item.price}</div>
        `;

        // Открытие модального окна при клике на карточку
        card.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.image;
            modalName.textContent = item.name;
            modalPrice.textContent = item.price;
            modalDescription.textContent = item.description;
        });

        collection.appendChild(card);
    });

    // Закрытие модального окна
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});




function openModal(item) {
    modal.style.display = "block";
    modalImg.src = item.image;
    modalName.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDescription.innerHTML = `
        ${item.description}
        <div class="additional-info">
            <strong>Состав:</strong> 100% полиэстер <br>
            <strong>Доставка и возврат:</strong> Бесплатная доставка по всему Казахстану
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const extraButtons = document.getElementById("extra-buttons");

    toggleBtn.addEventListener("click", () => {
        // Переключаем класс "visible"
        extraButtons.classList.toggle("visible");

        // Меняем текст на кнопке
        if (extraButtons.classList.contains("visible")) {
            toggleBtn.textContent = "Свернуть";
        } else {
            toggleBtn.textContent = "Посмотреть ещё";
        }
    });
});
