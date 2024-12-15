console.log("Navbar loaded successfully.");

// Menu
function toggleMenu() {
    const menuSuggestions = document.getElementById('menuSuggestions');
    menuSuggestions.style.display = menuSuggestions.style.display === 'block' ? 'none' : 'block';
}


window.onclick = function(event) {
    if (!event.target.matches('.nav-menu') && !event.target.matches('.nav-menu *')) {
        const menuSuggestions = document.getElementById('menuSuggestions');
        menuSuggestions.style.display = 'none';
    }
};

// Search Suggestion
const suggestions = [
    "Sony TV",
    "LG TV",
    "Samsung TV",
    "Philips Speaker",
    "Boats Speaker",
    "JBL Speaker",
    "Sony Speaker",
    "Haier Refrigerator",
    "LG Refrigerator",
    "Samsung Refrigerator",
    "Sony PlayStation",
    "HP Laptop",
    "Dell Laptop",
    "Asus Laptop",
    "Mackbook Air",
    "Mackbook Air m1",
    "Mackbook Air m2",
    "Mackbook Pro",
    "Washing Machine",
    "Camera",
    "Redmi TV",
    "Smartphone",
    "Bluetooth Headphones",
    "refrigerators",
    "fridge",
    "fridge 5 stars",
    "mobile",
    "mobile under 10000",
    "mobile under 20000",
    "mobile under 30000",
    "mobile under 40000",
    "mobile under 50000",
    "mobile under 60000",
    "iphone 16 plus",
    "iphone 16 pro max",
    "iphone 16 pro",
    "iphone 15",
    "iphone 14",
    "samsung mobile",
    "samsung mobile under 30000",
    "samsung mobile under 50000",
    "samsung mobile under 20000",
];

function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; 

    if (value.length === 0) {
        suggestionsBox.style.display = 'none'; 
        return;
    }

    const filteredSuggestions = suggestions.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredSuggestions.length > 0) {
        suggestionsBox.style.display = 'block'; 
        filteredSuggestions.forEach(item => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = item;
            suggestionItem.onclick = () => selectSuggestion(item);
            suggestionsBox.appendChild(suggestionItem);
        });
    } else {
        suggestionsBox.style.display = 'none'; 
    }
}

function selectSuggestion(value) {
    document.getElementById('searchInput').value = value; 
    document.getElementById('suggestions').style.display = 'none'; 
}





// TV Images
const tvImages = [
    'HP_Rotating_iPhone16Pro_22oct2024_pwznpo.webp',
    'HP_Rotating_Laptops_22oct2024_ji1cbb.webp',
    'HP_Rotating_PS5_22oct2024_eaml6u.webp',
    'HP_Rotating_BTS_22oct2024_yput91.webp',
    'HP_Rotating_TV_22oct2024_w0ehgn.webp',
    'HP_Rotating_WM_22oct2024_ofbijj.webp'
];

let currentTVIndex = 0;

function changeTVBackgroundImage() {
    currentTVIndex = (currentTVIndex + 1) % tvImages.length;
    document.querySelector('.tv').style.backgroundImage = `url(${tvImages[currentTVIndex]})`;
}

setInterval(changeTVBackgroundImage, 2200);

// Bank Offers
const bankImages = [
    'ICICI.jpg',
    'SBI.webp'
];

let currentBankIndex = 0;

function changeBankBackgroundImage() {
    currentBankIndex = (currentBankIndex + 1) % bankImages.length;
    document.querySelector('.bank-image').style.backgroundImage = `url(${bankImages[currentBankIndex]})`;
}

setInterval(changeBankBackgroundImage, 2200);

