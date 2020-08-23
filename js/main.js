
//remove button
var removeCartItemBtns = document.getElementsByClassName("remove-btn")
console.log(".remove-buttons")
for(var i=0; i < removeCartItemBtns.length; i++){
  var button = removeCartItemBtns[i]
  button.addEventListener('click', removeCartItem)
}


//update total with increase in quantity
var quantityInputs = document.getElementsByClassName('quantity')
for(var i=0; i < quantityInputs.length; i++){
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}

//add to cart
var addToCartBtns = document.getElementsByClassName('add-item')
for(var i=0; i < addToCartBtns.length; i++){
  var addItem = addToCartBtns[i]
  addItem.addEventListener('click', addToCart)

}

function removeCartItem(e){
  var buttonClicked = e.target
    //select the button up to its last parent element
    buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
} 

function quantityChanged(e){
  var input = e.target
  if(isNaN(input.value) || input.value <= 0){
    input.value= 1
  }
  updateCartTotal()
}

function addToCart(e) {
  var addItem = e.target
  var storeProduct = addItem.parentElement.parentElement 
  var title = storeProduct.getElementsByClassName('product-title')[0].innerText
  var price = storeProduct.getElementsByClassName("product-price")[0].innerText
  var imageSrc = storeProduct.getElementsByClassName("product-image")[0].src
  console.log(title, price, imageSrc)

  addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, price, imageSrc){
  var cartItem = document.createElement('div')
  var cartList = document.getElementsByClassName('cart-list')[0]

  cartItem.innerHTML = cartItemContent
  cartList.append(cartItem)
}

//update total in cart
function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('cart-list')[0]
  var cartItems = cartItemContainer.getElementsByClassName('cart-item')
  var total = 0
  taxTotal = 0

  for(var i = 0; i < cartItems.length; i++){
    var cartItem = cartItems[i]
    
    var priceHolder = cartItem.getElementsByClassName('product-price')[0]
    var quantityHolder = cartItem.getElementsByClassName('quantity')[0]
    
    //get the value of price and quantity and convert to numbers
    var price = parseFloat(priceHolder.innerText.replace('$', ''))
    var quantity = quantityHolder.value

    total = total + (price * quantity) 
    
    taxTotal = total + (total * 0.07)
  }
  total = Math.round(total * 100) / 100
  taxTotal = Math.round(taxTotal * 100) / 100
  document.getElementsByClassName('cart-total')[0].innerText = '$' + total
  document.getElementsByClassName('tax-total')[0].innerText = '$' + taxTotal
    //console.log(price, quantity)

} 