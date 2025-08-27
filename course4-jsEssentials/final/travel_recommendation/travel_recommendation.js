let travelData = null;

async function loadTravelData() {
    try {
        // const response = await fetch('travel_recommendation_api.json');
        const response = await fetch(' https://raw.githubusercontent.com/Alex-Zechariah/VoyageVista/refs/heads/main/travel_recommendation_api.json');
        travelData = await response.json();
        console.log('Travel data loaded successfully:', travelData);
    } catch (error) {
        console.error('Error loading travel data:', error);
    }
}

function showPage(page) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('searchResults').style.display = 'none';

    const searchContainer = document.getElementById('searchContainer');

    switch (page) {
        case 'home':
            document.getElementById('homePage').style.display = 'flex';
            searchContainer.style.display = 'flex';
            break;
        case 'about':
            document.getElementById('aboutPage').style.display = 'block';
            searchContainer.style.display = 'none';
            break;
        case 'contact':
            document.getElementById('contactPage').style.display = 'block';
            searchContainer.style.display = 'none';
            break;
    }
}

function searchRecommendations() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    if (!travelData) {
        alert('Travel data is still loading. Please try again.');
        return;
    }

    let results = [];

    if (searchTerm.includes('beach')) {
        results = travelData.beaches || [];
    } else if (searchTerm.includes('temple')) {
        results = travelData.temples || [];
    } else if (searchTerm.includes('countr')) {
        travelData.countries.forEach(country => {
            country.cities.forEach(city => {
                results.push({
                    name: `${city.name}, ${country.name}`,
                    imageUrl: city.imageUrl,
                    description: city.description,
                    country: country.name
                });
            });
        });
    }

    if (results.length > 0) {
        displayResults(results);
    } else {
        alert('No results found. Try searching for "beach", "temple", or "country"');
    }
}

function displayResults(results) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('contactPage').style.display = 'none';
    document.getElementById('searchResults').style.display = 'block';

    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';

        let timeHtml = '';
        if (item.country) {
            const timeZone = getTimeZone(item.country);
            const localTime = getLocalTime(timeZone);
            timeHtml = `
                <div class="time-info">
                    <i class="fas fa-clock"></i>
                    <span>Local Time: ${localTime}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="result-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${timeHtml}
            </div>
        `;

        resultsContainer.appendChild(card);
    });
}

function clearResults() {
    document.getElementById('searchInput').value = '';
    document.getElementById('resultsContainer').innerHTML = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('homePage').style.display = 'flex';
}

function getTimeZone(country) {
    const timeZones = {
        'Australia': 'Australia/Sydney',
        'Japan': 'Asia/Tokyo',
        'Brazil': 'America/Sao_Paulo'
    };
    return timeZones[country] || 'UTC';
}

function getLocalTime(timeZone) {
    const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return new Date().toLocaleTimeString('en-US', options);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`);

    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    loadTravelData();
    showPage('home');

    document.getElementById('searchInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchRecommendations();
        }
    });
});