// Function to save cart data to local storage
const saveCart = (cartData) => {
  localStorage.setItem('cart', JSON.stringify(cartData))
}

export { saveCart }
