import axios from 'axios'
import Keys from './../utils/keys'

export const SET_USER_CREDENTIALS = "set_user_credentials"
export const RESET_USER_CREDENTIALS = "reset_user_credentials"

const ROOT_URL = Keys.API.ROOT_URL

/*export function getBeneficiario(params, callback, errorHandler) {
    //const id = params.numeroCarteiraBeneficiario
    const  id = 1 // só funciona se mandar 1 por algum motivo
    const request = axios.post(`${ROOT_URL}/Beneficiarios/${id}/autorizar`, params)
        .then((result) => { callback(result) })
        .catch((error) => { errorHandler(error) })
    return {
        type: FETCH_BENEFICIARIO,
        payload: request
    }
}*/

export function setUserCredentials(params) {
    return {
        type: SET_USER_CREDENTIALS,
        payload: params
    }
}

export function resetUserCredentials() {
    return {
        type: RESET_USER_CREDENTIALS,
        payload: { }
    }
}