let cartItems = [
  { name: "potato", price: 20, quantity: 2 },
  { name: "tomato", price: 10, quantity: 3 },
];

function createOrder(cartItems, callbackMakePayment) {
  let orderId = {};

  let cartAmount = cartItems.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  setTimeout(() => {
    orderId = {
      id: Math.floor(Math.random() * 10),
      value: cartAmount,
    };
    callbackMakePayment(orderId, updateWalletAddress);
  }, 5000);

  //   console.log(orderId, "order id");
}

function makePayment(orderId, callbackUpdateWalletAddress) {
  let msg = "";
  if (Object.keys(orderId).length > 0) {
    msg = "payment Successful";
  } else {
    msg = "No order found";
  }
  //   console.log(msg, "msg");
  callbackUpdateWalletAddress(msg);
}

function updateWalletAddress(msg) {
  console.log(msg);
}

createOrder(cartItems, makePayment);

// <!-- Problem Statement -->
// <!--
// 1. Create Order (Cart Item -> Array of object (name, price, quantity))
// 2. Order Id generate Math.floor(Math.random*10)+1)
// 3. Make Payment -> Payment Status
// 4. Payment Success -> Successful Message return
// 5. Wallet Address update

// Using Callback
//  -->
