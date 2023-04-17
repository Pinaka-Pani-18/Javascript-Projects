let userLocationEl = document.querySelector(".user-location");
let mylocationBtnEl = document.querySelector(".myLocationBtn");

//To get geographical location of the user we use Geolocation API
mylocationBtnEl.addEventListener("click", () => {
    //If the Geolocation is supported returns your location 
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(getLocation);
    }
    // If the Geolocation is not supported by the browser
    else{
        userLocationEl.innerText = "The geolocation is not supported in this browser";
    }
});

// to get the given API link. search "Openstreetmap.org" API in google
const getLocation = async (position) => {
    let response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);

    let data = await response.json();
    console.log(data)
    userLocationEl.innerText = `${data.address.state_district}, ${data.address.state}, ${data.address.country}`;
};
