import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.GOOGLE_SING_IN_FAILURE:
    case UserActionTypes.EMAIL_SING_IN_FAILURE:
    case UserActionTypes.SING_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case UserActionTypes.SING_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    default:
      return state;
  }
}

export default userReducer;