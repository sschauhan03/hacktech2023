fetch('https://www2.hm.com/en_us/women/new-arrivals/view-all.html')
  .then(response => response.text())
  .then(html => {
    const prices = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const items = doc.querySelectorAll('.product-item');
    items.forEach(item => {
      const price = item.querySelector('.price.regular').textContent;
      prices.push(price);
    });
    console.log(prices);
  });
