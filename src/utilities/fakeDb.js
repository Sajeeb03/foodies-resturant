const addToDb = () => {
    let shoppingCart = getTheCart();
}

const getTheCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('food-cart'));
    return savedCart;
}

const setTheCart = (string) => {
    localStorage.setItem('food-cart', JSON.stringify(string))
}
export {
    addToDb,
    getTheCart,
    setTheCart
}