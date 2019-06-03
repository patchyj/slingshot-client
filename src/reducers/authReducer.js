import {
  SET_CURRENT_USER,
  REGISTER_USER_STARTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_STARTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  VERIFY_USER_STARTED,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAILURE,
  RESET_AUTH
} from '../actions/types';

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    // ====== REGISTRATION ======
    case REGISTER_USER_STARTED:
      return {
        ...state,
        loading: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.validations.errors
      };
      // ====== LOGIN ======
    case LOGIN_USER_STARTED:
      return {
        ...state,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.validations.errors
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      };
      // ====== MISC ======
    case VERIFY_USER_STARTED:
      return {
        ...state,
        loading: true
      };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true
      };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case RESET_AUTH:
      return {
        ...state,
        user: {},
        loading: false,
        isAuthenticated: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    default:
      return state;
  }
}
