import {
    CLEAR_QUESTION_LIST,
    Get_FEATUREQUESTION_PENDING,
    Get_FEATUREQUESTION_FULFILLED,
    Get_FEATUREQUESTION_REJECTED
} from '../const/action';

const initialState = {
    pending: null,
    data: null,
    error: null,
};

const createReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case CLEAR_QUESTION_LIST: {
            return {
                ...initialState,
            }
        }
        case Get_FEATUREQUESTION_PENDING: {
            return {
                ...state,
                pending: true,
                data: null,
                error: null,
            }
        }
        case Get_FEATUREQUESTION_FULFILLED: {
            return {
                ...state,
                pending: false,
                data: payload,
                error: false,
            }
        }
        case Get_FEATUREQUESTION_REJECTED: {
            return {
                ...state,
                pending: false,
                data: null,
                error: payload,
            }
        }
        default:
            return state;
    }
};

export default createReducer;