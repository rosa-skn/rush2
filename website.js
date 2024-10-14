function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('open');}

    function toggleBestMatchOptions() {
        const bestMatchOptions = document.getElementById('bestMatchOptions');
        bestMatchOptions.style.display = bestMatchOptions.style.display === 'block' ? 'none' : 'block';
    }

    function setSortOption(sortType) {
        const bestMatchButton = document.querySelector('.best-match-button');
        let buttonText;

        switch(sortType) {
            case 'priceLow':
                buttonText = 'Price: Low to High';
                break;
            case 'priceHigh':
                buttonText = 'Price: High to Low';
                break;
            case 'nameAZ':
                buttonText = 'Name: A-Z';
                break;
            case 'nameZA':
                buttonText = 'Name: Z-A';
                break;
            default:
                buttonText = 'Best match';
        }

        bestMatchButton.innerHTML = `${buttonText} <span style="margin-left: 5px;">▼</span>`;
        sortProducts(sortType);
        toggleBestMatchOptions();
    }

    function filterProducts() {
        let filter = document.getElementById("name").value.toLowerCase();
        let products = document.querySelectorAll(".product");
    
        products.forEach(function(product) {
            let productName = product.querySelector(".namefilter");
            let productCategory = product.querySelector("category"); 
    
            if (productName) {
                if (productName.textContent.toLowerCase().includes(filter) || 
                    (productCategory && productCategory.textContent.toLowerCase().includes(filter))) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        });
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        let searchInput = document.getElementById("name");
        if (searchInput) {
            searchInput.addEventListener("keyup", filterProducts);
        }
    });
    const cart = {};

    function addToCart(productId) {
        cart[productId] = (cart[productId] || 0) + 1;
        updateCartCount();
    }

    function updateCartCount() {
        const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
        document.getElementById('cartCount').textContent = totalItems;
    }

    function viewCart() {
        const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
        alert(totalItems + " items in the cart");
    }
