export const addToCart = ([cart,setCart],product,size) => {
    //const cart = useContext(CartContext)
    // Check if exist
    // if product and size already exist in cart -> update quantity
    // If not push new entity
    
    // Find existing item
    const existingItem = cart.find(item => { return item.product.id === product.id && item.chosenSize == size});
    
    // If exist in the cart, 
    if(existingItem)
    {   
        // check if quantity exceeds
        // If not exceeds, proceed
        setCart(cart.map(item => {
            if(item.product.id === existingItem.product.id && item.chosenSize == existingItem.chosenSize) 
                return {item, quantity:existingItem.quantity+=1}
        }))}
    else
        cart.push({product, chosenSize:size, quantity: 1});
    
    return cart;
}
