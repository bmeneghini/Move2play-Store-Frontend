import axios from 'axios'
import Keys from './../utils/keys'
import _ from 'lodash'

export const SET_USER_CREDENTIALS = "set_user_credentials"
export const RESET_USER_CREDENTIALS = "reset_user_credentials"
export const POST_LOGO_IMAGE = "post_logo_image"

const ROOT_URL = Keys.API.ROOT_URL

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

export function uploadLogoImage(image, imageName) {

    const formFile = {
        ContentType: image.type,
        Length: image.size,
        Name: image.name,
        FileName: image.name
    }

    axios(`${ROOT_URL}/api/Uploads/Image`, {
        method: 'POST',
        data: formFile,
        headers: {
            'Content-Type': image.type
        }
    })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });

    return {
        type: POST_LOGO_IMAGE,
        payload: {}
    }
}