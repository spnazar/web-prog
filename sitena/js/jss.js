document.addEventListener("DOMContentLoaded", function() {
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeModal = document.getElementById("close-modal");

    // Открытие модального окна при клике на корзину
    cartBtn.addEventListener("click", function() {
        cartModal.style.display = "block";
        setTimeout(() => cartModal.classList.add("show"), 10);  // Добавляем класс для анимации
    });

    // Закрытие модального окна при клике на крестик
    closeModal.addEventListener("click", function() {
        cartModal.classList.remove("show");  // Убираем анимацию
        setTimeout(() => cartModal.style.display = "none", 300);  // Закрываем окно после анимации
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener("click", function(event) {
        if (event.target === cartModal) {
            cartModal.classList.remove("show");  // Убираем анимацию
            setTimeout(() => cartModal.style.display = "none", 300);  // Закрываем окно после анимации
        }
    });
});







document.addEventListener("DOMContentLoaded", () => {
    const collection = document.getElementById("collection");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalName = document.getElementById("modal-name");
    const modalPrice = document.getElementById("modal-price");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");
    const carouselContainer = document.getElementById("carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const addToCartButton = document.getElementById("add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");


    let selectedSize = null;
    let cart = [];
    
    // Пример товаров с категориями
    const items = [

        { name: "Длинная стеганая куртка", 
            price: "45 990 ₸", 
            image: "../img-video/11.jpeg",
            description: "Классическая куртка.", 
            category: "outerwear" 
        },
        { name: "Кожаная куртка", 
            price: "39 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Элегантная кожаная куртка.", 
            category: "outerwear"
        },
        { name: "Кожаная куртка", 
            price: "39 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Элегантная кожаная куртка.", 
            category: "outerwear"
        },
        { name: "Кожаная куртка", 
            price: "39 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Элегантная кожаная куртка.", 
            category: "outerwear"
        },

        { name: "Свитер вязаный", 
            price: "19 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Теплый свитер.", 
            category: "sweaters" },
            { name: "Свитер вязаный", 
                price: "19 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Теплый свитер.", 
                category: "sweaters" },
                { name: "Свитер вязаный", 
                    price: "19 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Теплый свитер.", 
                    category: "sweaters" },

        { name: "Худи с капюшоном", 
            price: "25 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Удобное худи.", 
            category: "hoodies" },
            { name: "Худи с капюшоном", 
                price: "25 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Удобное худи.", 
                category: "hoodies" },
                { name: "Худи с капюшоном", 
                    price: "25 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Удобное худи.", 
                    category: "hoodies" },

        { name: "Рубашка в клетку", 
            price: "15 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Классическая рубашка.", 
            category: "shirts" },
            { name: "Рубашка в клетку", 
                price: "15 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Классическая рубашка.", 
                category: "shirts" },
                { name: "Рубашка в клетку", 
                    price: "15 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Классическая рубашка.", 
                    category: "shirts" },

        { name: "Футболка базовая", 
            price: "8 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Повседневная футболка.", 
            category: "tshirts" },
            { name: "Футболка базовая", 
                price: "8 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Повседневная футболка.", 
                category: "tshirts" },
                { name: "Футболка базовая", 
                    price: "8 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Повседневная футболка.", 
                    category: "tshirts" },


        { name: "Джинсы классические", 
            price: "29 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Удобные джинсы.", 
            category: "bottoms" },
            { name: "Джинсы классические", 
                price: "29 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Удобные джинсы.", 
                category: "bottoms" },
                { name: "Джинсы классические", 
                    price: "29 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Удобные джинсы.", 
                    category: "bottoms" },


        { name: "Шапка шерстяная", 
            price: "5 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Теплая шапка.", 
            category: "accessories" },
            { name: "Шапка шерстяная", 
                price: "5 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Теплая шапка.", 
                category: "accessories" },
                { name: "Шапка шерстяная", 
                    price: "5 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Теплая шапка.", 
                    category: "accessories" },

        { name: "Кроссовки спортивные", 
            price: "39 990 ₸", 
            image: "../img-video/11.jpeg", 
            description: "Спортивные кроссовки.", 
            category: "shoes" },
            { name: "Кроссовки спортивные", 
                price: "39 990 ₸", 
                image: "../img-video/11.jpeg", 
                description: "Спортивные кроссовки.", 
                category: "shoes" },
                { name: "Кроссовки спортивные", 
                    price: "39 990 ₸", 
                    image: "../img-video/11.jpeg", 
                    description: "Спортивные кроссовки.", 
                    category: "shoes" }
    ];



    function addToCart(product, size) {
        const item = { ...product, size };
        cart.push(item);
        updateCartCount();
        renderCart();
    }

    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }

    function calculateTotal() {
        let total = cart.reduce((sum, item) => {
            return sum + parseFloat(item.price.replace("₸", "").replace(" ", ""));
        }, 0);
        totalPriceElement.textContent = `Общая стоимость: ${total.toLocaleString()} ₸`;
    }

    function renderCart() {
        cartItemsList.innerHTML = ""; // Очищаем корзину
        cart.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("cart-item");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>Размер: ${item.size}</p>
                    <p>${item.price}</p>
                </div>
            `;
            cartItemsList.appendChild(li);
        });
        calculateTotal();
    }

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

        card.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.image;
            modalName.textContent = item.name;
            modalPrice.textContent = item.price;
            modalDescription.textContent = item.description;
            selectedSize = null;
            addToCartButton.disabled = true;
        });

        collection.appendChild(card);
    });

    // Закрытие при нажатии на крестик
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие при клике вне модального окна
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    document.querySelectorAll(".size-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            selectedSize = button.dataset.size;
            addToCartButton.disabled = false;
        });
    });

    addToCartButton.addEventListener("click", () => {
        const item = items.find(i => i.name === modalName.textContent);
        if (item && selectedSize) {
            addToCart(item, selectedSize);
            modal.style.display = "none";
        }
    });




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
    
};





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

