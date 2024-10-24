const slider = document.getElementById('slider');
const price = document.getElementById('price');
const pageviews = document.getElementById('pageviews');
const billingToggle = document.getElementById('billing-toggle');

const pricingData = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 }
];

function updatePricing() {
  const value = slider.value - 1;
  let currentPrice = pricingData[value].price;
  pageviews.textContent = `${pricingData[value].views} PAGEVIEWS`;

  if (billingToggle.checked) {
    currentPrice = (currentPrice * 0.75).toFixed(2); // Apply 25% discount
  }

  price.textContent = `$${currentPrice}`;
}

slider.addEventListener('input', updatePricing);
billingToggle.addEventListener('change', updatePricing);

// Initialize default values
updatePricing();
