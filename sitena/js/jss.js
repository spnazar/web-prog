document.addEventListener("DOMContentLoaded", () => {
    const collection = document.getElementById("collection");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Пример товаров с категориями
    const items = [
        { name: "Длинная стеганая куртка", price: "45 990 ₸", image: "../img-video/11.jpeg", description: "Классическая куртка.", category: "outerwear" },
        { name: "Кожаная куртка", price: "39 990 ₸", image: "../img-video/11.jpeg", description: "Элегантная кожаная куртка.", category: "outerwear" },
        { name: "Свитер вязаный", price: "19 990 ₸", image: "../img-video/11.jpeg", description: "Теплый свитер.", category: "sweaters" },
        { name: "Худи с капюшоном", price: "25 990 ₸", image: "../img-video/11.jpeg", description: "Удобное худи.", category: "hoodies" },
        { name: "Рубашка в клетку", price: "15 990 ₸", image: "../img-video/11.jpeg", description: "Классическая рубашка.", category: "shirts" },
        { name: "Футболка базовая", price: "8 990 ₸", image: "../img-video/11.jpeg", description: "Повседневная футболка.", category: "tshirts" },
        { name: "Джинсы классические", price: "29 990 ₸", image: "../img-video/11.jpeg", description: "Удобные джинсы.", category: "bottoms" },
        { name: "Шапка шерстяная", price: "5 990 ₸", image: "../img-video/11.jpeg", description: "Теплая шапка.", category: "accessories" },
        { name: "Кроссовки спортивные", price: "39 990 ₸", image: "../img-video/11.jpeg", description: "Спортивные кроссовки.", category: "shoes" }
    ];

    // Генерация карточек товаров
    function renderItems(filteredItems) {
        collection.innerHTML = ""; // Очищаем коллекцию
        filteredItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.dataset.category = item.category;

            card.innerHTML = `
                <div class="image-container">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            `;

            card.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImg.src = item.image;
                modalName.textContent = item.name;
                modalPrice.textContent = item.price;
                modalDescription.textContent = item.description;
            });

            collection.appendChild(card);
        });
    }

    renderItems(items); // Отображаем все товары изначально

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    document.querySelectorAll(".filter-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            if (filter === "all") {
                renderItems(items); // Показываем все товары
            } else {
                const filteredItems = items.filter(item => item.category === filter);
                renderItems(filteredItems); // Показываем отфильтрованные товары
            }
        });
    });
});


function renderItems(filteredItems) {
    const allCards = document.querySelectorAll(".card");

    // Скрываем все карточки
    allCards.forEach(card => {
        card.classList.remove("visible");
        card.classList.add("hidden");
    });

    setTimeout(() => {
        // Очищаем коллекцию
        collection.innerHTML = "";

        // Добавляем новые карточки
        filteredItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "card visible";
            card.dataset.category = item.category;

            card.innerHTML = `
                <div class="image-container">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3>${item.name}</h3>
                <div class="price">${item.price}</div>
            `;

            card.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImg.src = item.image;
                modalName.textContent = item.name;
                modalPrice.textContent = item.price;
                modalDescription.textContent = item.description;
            });

            collection.appendChild(card);
        });
    }, 500); // Ждем, пока старая анимация завершится (0.5 секунды)
}
