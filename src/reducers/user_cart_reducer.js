import { ADD_GAME_TO_CART, REMOVE_GAME_FROM_CART, REMOVE_ALL_GAMES_FROM_CART } from '../actions'

export default function (state = [], action) {
    let newState = [...state];
    switch (action.type) {
        case ADD_GAME_TO_CART:
            newState.push(action.payload);
            return newState;
        case REMOVE_GAME_FROM_CART:
            return newState.filter(function(value){
                return value !== action.payload;
            });
        case REMOVE_ALL_GAMES_FROM_CART:
            newState = []
            return newState;
        default:
            return state
    }
}
