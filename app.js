const lookupBtn = document.querySelector(".lookup-btn");

const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loaderContainer = document.querySelector(".loader-container");
const details = document.querySelector(".details");
lookupBtn.addEventListener("click", ()=>{
    
    loaderContainer.style.display = "flex";
    details.style.display = "none";


    axios.get("https://ipapi.co/json/").then(response =>{
    loaderContainer.style.display = "none";
    details.style.display = "block";
    ipDisplay.textContent = `IP: ${response.data.ip}`;
    locationDisplay.textContent = `Location: ${response.data.city} (${response.data.postal}), ${response.data.region}, ${response.data.country_name}`;
    geoDisplay.textContent = `Geo Location: ${response.data.latitude}, ${response.data.longitude} `;
    
    });

});


