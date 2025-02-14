document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    setupFooterVisibility();
});


function initializeSlider() {
    console.log('Initializing slider...');
    fetch('public/productList.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            console.log('Products loaded:', products);
            const recommendedProducts = getRandomProducts(products, 10); // 추천 상품 10개 선택
            renderProducts(recommendedProducts);
            setupSliderControls(recommendedProducts.length);
            showSlide(0, recommendedProducts.length); // 첫 번째 슬라이드 보여주기
        })
        .catch(error => console.error('Error loading product list:', error));
}

function getRandomProducts(products, count) {
    console.log('Selecting random products...');
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderProducts(products) {
    console.log('Rendering products...');
    const slider = document.querySelector('.slider');
    slider.innerHTML = products.map(product => `
        <div class="slider-item" onclick="location.href='productDetail.html?id=${product.id}'">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
        </div>
    `).join('');
}

function setupSliderControls(totalItems) {
    console.log('Setting up slider controls...');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1, totalItems);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1, totalItems);
    });

    function showSlide(index, totalItems) {
        console.log(`Showing slide ${index} of ${totalItems}`);
        const visibleItems = 3; // 한번에 보여지는 아이템 수
        const maxIndex = totalItems - visibleItems;

        if (index < 0) {
            currentIndex = 0;
        } else if (index > maxIndex) {
            currentIndex = maxIndex;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 33.3333;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === maxIndex;
    }
}

function setupFooterVisibility() {
    const footer = document.querySelector('footer');
    let isFooterVisible = false;

    document.addEventListener('mousemove', (event) => {
        const yOffset = window.innerHeight - event.clientY;
        if (yOffset < 50 && !isFooterVisible) {
            footer.classList.add('visible');
            isFooterVisible = true;
        } else if (yOffset >= 50 && isFooterVisible) {
            footer.classList.remove('visible');
            isFooterVisible = false;
        }
    });
}
