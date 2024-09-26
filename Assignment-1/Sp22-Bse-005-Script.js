// Array to hold the items in the cart
let cart = [];

// Function to add items to the cart
// It takes product details like ID, name, quantity, and price
const addItemToCart = (productId, productName, quantity, price) => {
  // Create a product object with the given details
  const product = {
    productId,   // Unique identifier for the product
    productName, // Name of the product
    quantity,    // How many units of this product
    price        // Price per unit
  };

  // Add the product object to the cart
  cart.push(product);
  // Log a message to confirm addition
  console.log(`${productName} added to the cart.`);
};

// Function to remove an item from the cart by product ID
const removeItemFromCart = (productId) => {
  // Find the index of the product using its ID
  const index = cart.findIndex(item => item.productId === productId);

  // If the product exists in the cart (index is not -1)
  if (index !== -1) {
    // Remove the product from the cart using its index
    const removedItem = cart.splice(index, 1); 
    console.log(`${removedItem[0].productName} removed from the cart.`);
  } else {
    // If the product wasn't found, log a message
    console.log(`Product with ID ${productId} not found.`);
  }
};

// Function to update the quantity of an item in the cart
const updateItemQuantity = (productId, newQuantity) => {
  // Go through each item in the cart and update if the ID matches
  cart = cart.map(item => {
    if (item.productId === productId) {
      // Update the quantity for the matched product
      item.quantity = newQuantity;
      console.log(`Quantity of ${item.productName} updated to ${newQuantity}.`);
    }
    return item;
  });
};

// Function to calculate the total cost of all items in the cart
const calculateTotalCost = () => {
  // Use reduce to sum up the total price of all items (price * quantity)
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return totalCost;
};

// Function to show a summary of all items in the cart
const displayCartSummary = () => {
  console.log("Cart Summary:");
  // Use map to display each item's name, quantity, and total price
  cart.map(item => {
    console.log(`${item.productName} (x${item.quantity}) - $${item.price * item.quantity}`);
  });
};

// Function to remove items with zero quantity from the cart
const filterZeroQuantityItems = () => {
  // Filter out items where the quantity is greater than 0
  cart = cart.filter(item => item.quantity > 0);
  console.log("Items with zero quantity removed.");
};

// Optional: Function to apply a discount code
// Discount will reduce the total price by a percentage
const applyDiscount = (discountCode) => {
  // Calculate the total cost before discount
  const totalCost = calculateTotalCost();
  let discount = 0;

  // Check if a valid discount code is entered
  if (discountCode === "SAVE10") {
    // Apply 10% discount
    discount = totalCost * 0.10;
  } else if (discountCode === "SAVE20") {
    // Apply 20% discount
    discount = totalCost * 0.20;
  } else {
    // If the code is invalid, just return the original total cost
    console.log("Invalid discount code.");
    return totalCost;
  }

  // Return the discounted total cost
  return totalCost - discount;
};

// Example usage of the functions

// Adding items to the cart
addItemToCart(1, "Laptop", 1, 1000);
addItemToCart(2, "Mouse", 2, 25);
addItemToCart(3, "Keyboard", 1, 50);

// Displaying the cart summary
displayCartSummary();

// Show total cost of items in the cart
console.log("Total Cost: $" + calculateTotalCost());

// Update the quantity of a product in the cart
updateItemQuantity(2, 3); // Update quantity of Mouse to 3
removeItemFromCart(3); // Remove Keyboard from the cart

// Display the updated cart summary
displayCartSummary();

// Remove items with zero quantity
filterZeroQuantityItems();

// Show total cost with a discount
console.log("Total Cost with Discount: $" + applyDiscount("SAVE10"));
