// FOR ADD ITEM TO CART
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// FOR ADD ITEM TO CART
export const delCart = (product) => {
    return{
        type: "DELCART",
        payload: product
    }
}