const chargingEl = document.querySelector(".charging");
const chargingPercentEl = document.querySelector(".charging-percent");
const chargingTimeRemainingEl = document.querySelector(".charging-time-remaining");

//If the browsers don't support battery status API
window.onload = () => {
  if (!navigator.getBattery()) {
    alert("Your browser doesn't support battery status API");
    return false;
  }
};

//If the browsers support battery status API
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo() {
    updateChargingInfo();
    updateLevelInfo();
  }
  updateAllBatteryInfo();

  //If the charging status changes i.e when plugged in or plugged out
  battery.addEventListener("chargingchange", () => {
    updateAllBatteryInfo();
  });

  //If the Battery level Changes i.e when charging percentage changes 
  battery.addEventListener("levelchange", () => {
    updateAllBatteryInfo();
  });

  function updateChargingInfo() {

    // checks whether the battery is plugged in or plugged out
    if (battery.charging) {
        chargingEl.classList.add("active");
        chargingTimeRemainingEl.innerText = "Charging...";
    } else {
        chargingEl.classList.remove("active");

        // Estimated Charging time remaining
        if (parseInt(battery.dischargingTime)) {
            let hr = parseInt(battery.dischargingTime / 3600);
            let min = parseInt(battery.dischargingTime / 60 - hr * 60);
            chargingTimeRemainingEl.innerHTML = `Estimated charging time remaining :
            <p>${hr}hr ${min}mins</p>`;
        }
    }
  }

  //Updating battery level
  function updateLevelInfo() {
    let chargingPercent = `${parseInt(battery.level * 100)}%`;
    chargingEl.style.width = chargingPercent;
    chargingPercentEl.textContent = chargingPercent;
  }
});