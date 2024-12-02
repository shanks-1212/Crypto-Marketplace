// Fetching cryptocurrency data from CoinGecko API
const cryptoList = document.getElementById("crypto-list");

async function fetchCryptoData() {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        // Passing query parameters for the coins you want to track (e.g., Bitcoin, Ethereum, etc.)
        body: null
    });

    if (response.ok) {
        const data = await response.json();
        displayCryptoData(data);
    } else {
        console.error("Failed to fetch data from CoinGecko API");
    }
}

function displayCryptoData(data) {
    // Clear previous content
    cryptoList.innerHTML = "";

    // Loop through the data and create HTML for each cryptocurrency
    data.forEach((coin) => {
        const coinCard = document.createElement("div");
        coinCard.classList.add("crypto-card");

        coinCard.innerHTML = `
            <h2>${coin.name}</h2>
            <img src="${coin.image}" alt="${coin.name}" width="50">
            <p>Price: ₹${coin.current_price}</p>
            <p>24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
        `;

        // Append the card to the list
        cryptoList.appendChild(coinCard);
    });
}

// Call the fetch function to display data when the page loads
fetchCryptoData();
