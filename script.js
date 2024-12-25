document.addEventListener("DOMContentLoaded", () => {
    const sendTab = document.getElementById("send-tab");
    const convertTab = document.getElementById("convert-tab");
    const conversionForm = document.getElementById("conversion-form");
    const convertButton = document.getElementById("convert-button");
    const amountInput = document.getElementById("amount");
    const resultInput = document.getElementById("result");
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
  
    // Example conversion rates
    const conversionRates = {
      "USD_TO_SAR": 3.75,
      "SAR_TO_USD": 0.27,
    };
  
    // Handle tab switching
    sendTab.addEventListener("click", () => {
      sendTab.classList.add("bg-blue-500", "text-white");
      sendTab.classList.remove("bg-gray-200", "text-blue-900");
      convertTab.classList.remove("bg-blue-500", "text-white");
      convertTab.classList.add("bg-gray-200", "text-blue-900");
    });
  
    convertTab.addEventListener("click", () => {
      convertTab.classList.add("bg-blue-500", "text-white");
      convertTab.classList.remove("bg-gray-200", "text-blue-900");
      sendTab.classList.remove("bg-blue-500", "text-white");
      sendTab.classList.add("bg-gray-200", "text-blue-900");
    });
  
    // Handle conversion
    convertButton.addEventListener("click", () => {
      const from = fromCurrency.value.includes("USD") ? "USD" : "SAR";
      const to = toCurrency.value.includes("USD") ? "USD" : "SAR";
      const key = `${from}_TO_${to}`;
  
      const amount = parseFloat(amountInput.value) || 0;
      const rate = conversionRates[key] || 1;
      const result = amount * rate;
  
      resultInput.value = result.toFixed(2);
    });
  });
  