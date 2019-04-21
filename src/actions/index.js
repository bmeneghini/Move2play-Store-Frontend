import axios from 'axios';

export const SET_USER_CREDENTIALS = 'set_user_credentials';
export const RESET_USER_CREDENTIALS = 'reset_user_credentials';
export const UPLOAD_FILE_TO_SERVER = 'upload_file_to_server';
export const DOWNLOAD_FILE_FROM_SERVER = 'download_file_from_server';
export const UPLOAD_GAME_TO_SERVER = 'upload_game_to_server';
export const SEND_USER_INFORMATION = 'send_user_information';
export const GET_GAME = 'get_game';
export const GET_GAMES_LIST = 'get_games_list';
export const GET_SPOTLIGHT_GAMES = 'get_spotlight_games';
export const ADD_GAME_TO_CART = 'add_game_to_cart';
export const REMOVE_GAME_FROM_CART = 'remove_game_from_cart';
export const REMOVE_ALL_GAMES_FROM_CART = 'remove_all_games_from_cart';
export const POST_CHECKOUT = 'post_checkout';
export const GET_GAMES_WITH_FILTER = 'get_games_with_filter';
export const GET_USER_UPLOADED_GAMES = 'get_user_uploaded_games';
export const GET_USER_GAMES = 'get_user_games';
export const POST_RATING = 'post_rating';
export const POST_COMMENT = 'post_comment';
export const POST_PURCHASE = 'post_purchase';

const ROOT_URL = process.env.REACT_APP_API_ROOT_URL;

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

export function downloadFileFromServer(fileDto, successHandler) {
    let request = `${ROOT_URL}/api/File`
    axios.post(request, fileDto)
        .then(result => successHandler(result));
    return {
        type: DOWNLOAD_FILE_FROM_SERVER,
        payload: null
    }
}

export function getGame(id, successHandler) {
    let request = `${ROOT_URL}/api/Games/${id}`
    axios.get(request)
        .then(result => successHandler(result.data[0]));
    return {
        type: GET_GAME,
        payload: {}
    }
}

export function getGamesList(successHandler, errorHandler) {
    let request = `${ROOT_URL}/api/Games`
    axios.get(request)
        .then(result => successHandler(result.data))
        .catch(error => errorHandler(error));
    return {
        type: GET_GAMES_LIST,
        payload: {}
    }
}

export function getSpotlightGames(successHandler) {
    let request = `${ROOT_URL}/api/Games/Spotlights`
    axios.get(request)
        .then(result => successHandler(result.data));
    return {
        type: GET_GAMES_LIST,
        payload: {}
    }
}

export function getUserGames(userId, successHandler) {
    let request = `${ROOT_URL}/api/Games/User`;
    axios.post(request, { userId })
        .then(result => successHandler(result.data));
    return {
        type: GET_USER_GAMES,
        payload: {}
    }
}

export function getUserUploadedGames(userId, successHandler) {
    let request = `${ROOT_URL}/api/Games/User/Uploaded`;
    axios.post(request, { userId })
        .then(result => successHandler(result.data));
    return {
        type: GET_USER_UPLOADED_GAMES,
        payload: {}
    }
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

export function getGamesWithFilter(filterDto, successHandler) {
    let request = `${ROOT_URL}/api/Games/Filters`
    axios.post(request, filterDto)
        .then(result => successHandler(result.data));
    return {
        type: GET_GAMES_LIST,
        payload: {}
    }
}

export function postRating(ratingDto, successHandler) {
    let request = `${ROOT_URL}/api/Ratings`
    axios.post(request, ratingDto)
        .then(result => successHandler(result.data));
    return {
        type: POST_RATING,
        payload: {}
    }
}

export function postComment(commentDto, successHandler) {
    let request = `${ROOT_URL}/api/Comments`
    axios.post(request, commentDto)
        .then(result => successHandler(result.data));
    return {
        type: POST_COMMENT,
        payload: {}
    }
}

export function postCheckout(transactionDto, successHandler) {
    let request = `${ROOT_URL}/api/Transactions`
    axios.post(request, transactionDto)
        .then(result => successHandler(result.data));
    return {
        type: POST_CHECKOUT,
        payload: {}
    }
}

export function postPurchase(transactionDto, successHandler) {
    let request = `${ROOT_URL}/api/Purchases`
    axios.post(request, transactionDto)
        .then(result => successHandler(result.data));
    return {
        type: POST_PURCHASE,
        payload: {}
    }
}