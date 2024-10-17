const getStoreCart =()=>{
    const storeString = localStorage.getItem('cart');
    if(storeString){
        return JSON.parse(storeString)
    }
    return []
}
const saveCartToLS=cart=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLS=id=>{
    const cart = getStoreCart();
    cart.push(id);
    saveCartToLS(cart);
}

export {addToLS,getStoreCart}