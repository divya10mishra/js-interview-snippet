let cartItems = [
  { name: "potato", price: 20, quantity: 2 },
  { name: "tomato", price: 10, quantity: 3 },
];

async function createOrder(cartItems) {
  let cartAmount = cartItems.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  let orderId = await getOrderId(cartAmount);
  makePayment(orderId);
}

createOrder(cartItems).then((result) => {
  console.log(result, "result");
});

function getOrderId(cartAmount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: Math.floor(Math.random() * 10),
        value: cartAmount,
      });
    }, 5000);
  });
}

function makePayment(orderId) {
  if (Object.keys(orderId).length > 0) {
    console.log("Payment successful");
  } else {
    console.log("Unsuccessful payment");
  }
}
