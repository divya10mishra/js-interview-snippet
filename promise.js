let cartItems = [
  { name: "potato", price: 20, quantity: 2 },
  { name: "tomato", price: 10, quantity: 3 },
];
function createOrder(cartItems) {
  return new Promise((resolve, reject) => {
    let orderId = {};
    let cartAmount = cartItems.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
    setTimeout(() => {
      orderId = {
        id: Math.floor(Math.random() + 1),
        value: cartAmount,
      };
      if (orderId) {
        resolve(orderId);
      }
    }, 5000);
  });
}
function makePayment(orderId) {
  if (Object.keys(orderId).length > 0) {
    console.log("Payment Successful");
  } else {
    console.log("Payment Unsuccessful");
  }
}

createOrder(cartItems)
  .then((result) => {
    makePayment(result);
  })
  .catch((err) => console.error);
