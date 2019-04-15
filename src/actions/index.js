import axios from 'axios';

export const SET_USER_CREDENTIALS = 'set_user_credentials';
export const RESET_USER_CREDENTIALS = 'reset_user_credentials';
export const UPLOAD_FILE_TO_SERVER = 'upload_file_to_server';
export const UPLOAD_GAME_TO_SERVER = 'upload_game_to_server';
export const SEND_USER_INFORMATION = 'send_user_information';
export const GET_GAMES_LIST = 'get_games_list';
export const ADD_GAME_TO_CART = 'add_game_to_cart';
export const REMOVE_GAME_FROM_CART = 'remove_game_from_cart';
export const REMOVE_ALL_GAMES_FROM_CART = 'remove_all_games_from_cart';

const ROOT_URL = process.env.REACT_APP_API_ROOT_URL

export function setUserCredentials(params) {
    return {
        type: SET_USER_CREDENTIALS,
        payload: params
    }
}

export function resetUserCredentials() {
    return {
        type: RESET_USER_CREDENTIALS,
        payload: {}
    }
}

export function postUserInformation(user) {
    let request = `${ROOT_URL}/api/Users`
    axios.post(request, user);
    return {
        type: SEND_USER_INFORMATION,
        payload: {}
    }
}

export function uploadGameToServer(gameUploadDto, successHandler, errorHandler) {
    let request = `${ROOT_URL}/api/Games`;
    axios.post(request, gameUploadDto)
        .then(result => successHandler(result))
        .catch(error => errorHandler(error));
    return {
        type: UPLOAD_GAME_TO_SERVER,
        payload: {}
    }
}

export function uploadFileToServer(gameId, file, uploadProgressHandler) {
    let formData = new FormData();
    formData.append('file', file);
    axios(`${ROOT_URL}/api/File/${gameId}`, {
        method: 'POST',
        data: formData,
        onUploadProgress: (progressEvent) => {
            uploadProgressHandler(progressEvent);
        }
    });
    return {
        type: UPLOAD_FILE_TO_SERVER,
        payload: {}
    }
}

export function getGamesList(successHandler, errorHandler) {
    let request = `${ROOT_URL}/api/game`
    axios.get(request)
        .then(result => successHandler(result))
        .catch(error => errorHandler(error));
}

export function addGameToCart(gameId) {
    return {
        type: ADD_GAME_TO_CART,
        payload: gameId
    }
}

export function removeGameFromCart(gameId) {
    return {
        type: REMOVE_GAME_FROM_CART,
        payload: gameId
    }
}

export function removeAllGamesFromCart() {
    return {
        type: REMOVE_ALL_GAMES_FROM_CART,
        payload: []
    }
}