import { ADD_GAME_TO_CART } from '../actions'

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_GAME_TO_CART:
            let return_state = [...state, action.payload];
            return return_state;
        default:
            return state
    }
}
