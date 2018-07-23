import axios from 'axios'

export const AUTHORIZED_SESSION = ''
export const AUTHORIZATION_TOKEN = ''
export const USER_INFO = ''
export const END_SESSION = ''

const IDENTITY_SERVER_URL = 'http://localhost:52516/'
const CONNECT = '/connect'
const AUTHORIZATION_END_POINT = '/authorize'
const TOKEN_END_POINT = '/token'
const USER_INFO_END_POINT = '/userinfo' 
const END_SESSION_END_POINT = '/endsession'

export function authorizeSession(token){
    const request = axios.post(`${IDENTITY_SERVER_URL}${CONNECT}${AUTHORIZATION_END_POINT}`, token)
    return {
        type: AUTHORIZED_SESSION,
        payload: request
    }
}

export function getAuthorizationToken(){
    const request = axios.get(`${IDENTITY_SERVER_URL}${CONNECT}${TOKEN_END_POINT}`)
    return {
        type: AUTHORIZATION_TOKEN,
        payload: request
    }
}

export function getUserInfo(){
    const request = axios.get(`${IDENTITY_SERVER_URL}${CONNECT}${USER_INFO_END_POINT}`)
    return {
        type: USER_INFO,
        payload: request
    }
}

export function endSession(){
    const request = axios.get(`${IDENTITY_SERVER_URL}${CONNECT}${END_SESSION_END_POINT}`)
    return {
        type: END_SESSION,
        payload: request
    }
}