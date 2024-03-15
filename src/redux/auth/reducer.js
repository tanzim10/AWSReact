import { AUTH } from "./actiontype";

const initialState = {
    user: null,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case AUTH.LOGOUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
            
    }
};
export default auth;

