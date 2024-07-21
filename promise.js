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
async function makePayment(orderId) {
  let msg = "";
  if (Object.keys(orderId).length > 0) {
    msg = "Payment Successful";
  } else {
    msg = "Payment Unsuccessful";
  }
  console.log(msg, "msg");
  return msg;
}

function updateWallet(msg) {
  if (msg === "Payment Successful") {
    console.log(`you are less with 70`);
  }
}

createOrder(cartItems)
  .then((result) => {
    return makePayment(result);
  })
  .then((result) => {
    updateWallet(result);
  })
  .catch((err) => {
    console.error(err);
  })

