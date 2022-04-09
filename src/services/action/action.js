import { ADD_TO_CART, REMOVE_TO_CART } from "../constant"

export const add_to_cart = (getData) => {
    // console.warn("when action is called the date are get is :", getData);
    return {
        type: ADD_TO_CART,
        data: getData
    }
}

export const remove_to_cart = () => {
    console.warn("action called");
    return {
        type: REMOVE_TO_CART,
    }
}

