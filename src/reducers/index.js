import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import IdentityServerReducer from './identity_server_reducer'

const rootReducer = combineReducers({
  form: formReducer,
  identityServerState: IdentityServerReducer
});

export default rootReducer;
