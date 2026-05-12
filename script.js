// 1. List your item folder names here
const items = ['item_1', 'item_2']; 

const container = document.getElementById('card-container');

async function loadCards() {
    for (const item of items) {
        try {
            // 2. Fetch the JSON data for this item
            const response = await fetch(`data/${item}/info.json`);
            const data = await response.json();

            // 3. Create the HTML structure for the card
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <img src="data/${item}/image.jpg" alt="${data.title}">
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <p class="price">${data.price}</p>
                <a href="${data.instagram}" target="_blank">View on Instagram</a>
            `;

            container.appendChild(card);
        } catch (error) {
            console.error(`Error loading ${item}:`, error);
        }
    }
}

loadCards();
