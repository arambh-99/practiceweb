import {
    UPDATE_CART_COUNT,
} from './Actions'

const intialState = {
    cartCount: 0
}

function reducer(state = intialState, action){
    switch(action.type){
        case UPDATE_CART_COUNT:
            return {
                ...state,
                cartCount: state.cartCount + 1
            }
        default:
            return state
    }
}

export default reducer
