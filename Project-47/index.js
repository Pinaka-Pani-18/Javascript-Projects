const amountEl = document.querySelector("input");
const fromCurrencyEl = document.querySelector(".from select");
const toCurrencyEl = document.querySelector(".to select");
const convertedAmountEl = document.querySelector(".convertedAmount");
const convertBtnEl = document.querySelector(".convertBtn");

async function convertCurrencyFun(){
    let inputAmount = amountEl.value;

    convertedAmountEl.innerText = "Currency Converting...";

    // The below API is Exchange rate API.
    // This is available at https://www.exchangerate-api.com/
    // After login with your email account. You will get your API key. You that api key in the place of "YOUR-API-KEY".
    let url = `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/${fromCurrencyEl.value}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        let convertedAmount = data.conversion_rates[toCurrencyEl.value]; 
        let totalConvertedAmount = (inputAmount * convertedAmount).toFixed(2); 
        convertedAmountEl.innerText = `${inputAmount} ${fromCurrencyEl.value} = ${totalConvertedAmount} ${toCurrencyEl.value}`;
    }catch(e){
        convertedAmountEl.innerText = "Oops... Error...!";
    }
}

convertBtnEl.addEventListener("click", () =>{
    convertCurrencyFun();
});