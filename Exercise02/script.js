console.log("Hello Jes");


function displayRose() {
  const price = 8.00;
  let quantity = 70;
  quantity -= 20;
  let value = price * quantity;
  

  console.log(quantity, 'Roses');
  console.log(price, "each rose");
  console.log("Total:", value);
}

function displayLily() {
  const price = 10.00;
  let quantity = 50;
  quantity -= 30;
  let value = price * quantity;

  console.log(quantity, "Lilies");
  console.log(price, "each lily");
  console.log("Total:", value);
}

function displayTulip() {
  const price = 2.00;
  let quantity = 120;
  let value = price * quantity;

  console.log(quantity, "Tulips");
  console.log(price, "each tulip");
  console.log("Total:", value);
}