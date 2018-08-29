import { SET_USER_CREDENTIALS, RESET_USER_CREDENTIALS } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case SET_USER_CREDENTIALS:
      return action.payload
    case RESET_USER_CREDENTIALS:
      return null
    default:
      return state
  }
}
