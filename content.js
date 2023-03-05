let materials = {"Cotton":4.5,
    "Wool":4,
    "Viscose":4,
    "Acrylics":4.5,
    "Polyester":4.5,
    "Nylon":4.5,
    "Lyocell":5,
    "Modal":4.5,
    "Bamboo":4,
    "Flax":5,
    "Nettle":5,
    "lycra":4,
    "Leather":5.5,
    "Rayon":4.5,
    "Linen":5,
    "Silk":4};

let brand = {"Shein":0.25,"H&M":1.5,"Toad&Co":5};
let type = {"shirt":3,"jacket":3,"jean":5};

function pricePerWear(p,v){
  var pageText = document.body.textContent;
  let m_matches = [];
  let m_keys = Object.keys(materials);
  m_keys.forEach(word => {
    if (pageText.includes(word)) {
      m_matches.push(word);
    }
  });
  
  /*
  let t_matches = [];
  let t_keys = Object.keys(type);
  t_keys.forEach(word => {
    if (pageText.includes(word)) {
      t_matches.push(word);
    }
  });
  */
  //wears = parseInt((materials[m_matches[0]] + type[t_matches[0]]) * v);
  //wears = wears(materials[m_matches[0]],v);
  wears = parseFloat((materials[m_matches[0]] + 3) * v);
  console.log(wears);
  return p/wears;
}


const url = window.location.href;
let num=0;
if (url.includes("https://www2.hm.com/") && url.includes("productpage")){
  const items = document.querySelectorAll('*');
  items.forEach(item => {

    const price = item.querySelector('[class*="price parbase" i]');
    if (price && num==0){
      num++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      console.log(p);
      const ppw = pricePerWear(p,1.5).toFixed(2);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
}
else if (url.includes("https://us.shein.com/")){
  setTimeout(function() {
  }, 5000);
  let num_d = 0;
  let num_o = 0;
  const items = document.querySelectorAll('*');
  items.forEach(item => {
    const price = item.querySelector(".discount .from");
    if (price && num==0){
      num++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,0.25).toFixed(2);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
    const price2 = item.querySelector(".del-price");
    if (price2 && num_d==0){
      num_d++;
      const p = parseFloat(price2.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,0.25).toFixed(2);
      console.log(p);
      price2.textContent = "$" + ppw.toString() + "/wear";
    }
  });
  items.forEach(item => {

    const price = item.querySelector(".original .from");
    if (price && num_o==0){
      num_o++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,0.25).toFixed(2);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
}
else if(url.includes("https://www.toadandco.com/products")){
  const items = document.querySelectorAll('*');
  let num0 = 0;
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  /*
  items.forEach(item => {
    const price = item.querySelector('.ProductMeta__Price.Price.Text--subdued.u-h4');
    if (price && num0==0){
      num0++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,5).toFixed(2);
      console.log(ppw);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
  */
  items.forEach(item => {
    const price = item.querySelector('.ProductMeta__Price.Price.u-h4');
    if (price && num1==0){
      num1++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,5).toFixed(2);
      console.log(ppw);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
  items.forEach(item => {
    const price = item.querySelector('.ProductMeta__Price.Price.Price--highlight.u-h4');
    if (price && num2==0){
      num2++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,5).toFixed(2);
      console.log(ppw);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
  items.forEach(item => {
    const price = item.querySelector('.ProductMeta__Price.Price.Price--compareAt.u-h4');
    if (price && num3==0){
      num3++;
      const p = parseFloat(price.textContent.match(/[\d\.]+/)[0]);
      const ppw = pricePerWear(p,5).toFixed(2);
      console.log(ppw);
      price.textContent = "$" + ppw.toString() + "/wear";
    }
  });
  console.log(num0);
  console.log(num1);
  console.log(num2);
  console.log(num3);
}