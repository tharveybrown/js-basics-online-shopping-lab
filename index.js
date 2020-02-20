var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  var price = Math.floor(Math.random() * (100) ) + 1;
  var itemAndPrice = {
    itemName: item,
    itemPrice: price
  };
  cart.push(itemAndPrice);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(!cart.length) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}.`
  } else {
    var itemAtPrice = [];
    for (let i = 0; i < cart.length; i++) {
      itemAtPrice.push(`${cart[i].itemName} at ${cart[i].itemPrice}`)
    }
    var last = itemAtPrice.pop()
    return `In your cart, you have ${itemAtPrice.join(', ')}, and ${last}.`
  }
}

function total() {
  // write your code here
  var prices = [];
  for (let i = 0; i < cart.length; i++) {
    prices.push(cart[i].itemPrice);
  }
  return prices.reduce((a, b) => a + b, 0)
}

function removeFromCart(item) {
  // write your code here
  var names = [];
  for (let i = 0; i < cart.length; i++) {
    names.push(cart[i].itemName);
  }
  if (!names.includes(item)) {
    return "That item is not in your cart."
  }
  var p = names.indexOf(item);
  let removed = cart.splice(p, 1)
  return removed
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var finalPrice = total();
  setCart([]);
  return `Your total cost is $${finalPrice}, which will be charged to the card ${cardNumber}.`
}
