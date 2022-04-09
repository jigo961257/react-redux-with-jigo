import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialState = {
    cartData: []
}

export default function cart_item(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("called Reducaer :", action);
            return [
                ...state,
                { cartData: action.data }
            ]
            break;

        case REMOVE_TO_CART:
            state.pop()
            return [
                ...state
            ]
            return state;

        default:
            return state;
    }
}