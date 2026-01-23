// Remplace par TA CLE GRATUITE OpenWeatherMap (inscris-toi sur openweathermap.org)
const API_KEY = 'TA_CLE_OPENWEATHERMAP';

async function fetchMeteo(ville, elementId) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville},CG&appid=${API_KEY}&units=metric&lang=fr`);
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById(elementId).innerHTML = `
            <img src="${icon}" alt="${desc}" style="width:50px;">
            <strong>${ville} :</strong> ${temp}°C - ${desc}
        `;
    } catch (err) {
        document.getElementById(elementId).innerHTML = `${ville} : Erreur`;
    }
}

fetchMeteo('Brazzaville', 'meteo-brazzaville');
fetchMeteo('Pointe-Noire', 'meteo-pointe-noire');
fetchMeteo('Dolisie', 'meteo-dolisie');