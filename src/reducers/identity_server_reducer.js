import _ from 'lodash'
import { AUTHORIZED_SESSION } from './../actions'
import { AUTHORIZATION_TOKEN } from './../actions'
import { USER_INFO } from './../actions'
import { END_SESSION } from './../actions'

export default function (state = {}, action) {
    switch (action.type) {
        case AUTHORIZED_SESSION:
            return _.mapKeys(action.payload.data, 'id')
        case AUTHORIZATION_TOKEN:
            return _.mapKeys(action.payload.data, 'id')
        case USER_INFO:
            return _.mapKeys(action.payload.data, 'id')
        case END_SESSION:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state
    }
}
