import { ADD_GAME_TO_CART } from '../actions'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_GAME_TO_CART:
            let newState = [...state];
            newState.push(action.payload);
            return newState;
        default:
            return state
    }
}
