export const getTotalItem = (cart) => {
    return cart.reduce((init, current) => init + current.quantity, 0)
}