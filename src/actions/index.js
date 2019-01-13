import axios from 'axios';

export const SET_USER_CREDENTIALS = "set_user_credentials";
export const RESET_USER_CREDENTIALS = "reset_user_credentials";
export const POST_LOGO_IMAGE = "post_logo_image";
export const SEND_USER_INFORMATION = "send_user_information";

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

export function uploadLogoImage(image, imageName) {

    const formFile = {
        ContentType: image.type,
        Length: image.size,
        Name: image.name,
        FileName: image.name
    };

    axios(`${ROOT_URL}/api/Uploads/Image`, {
        method: 'POST',
        data: formFile,
        headers: {
            'Content-Type': image.type
        }})
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