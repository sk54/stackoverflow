import {
    CLEAR_USERDETAILS,
    Get_USER_PENDING,
    Get_USER_FULFILLED,
    Get_USER_REJECTED,
    Get_USERTAGS_PENDING,
    Get_USERTAGS_FULFILLED,
    Get_USERTAGS_REJECTED,
    Get_USERQUESTIONS_PENDING,
    Get_USERQUESTIONS_FULFILLED,
    Get_USERQUESTIONS_REJECTED
} from '../const/action';

const initialState = {
    userPending: null,
    userData: null,
    userError: null,
    questionPending: null,
    questionData: null,
    questionError: null,
    tagsPending: null,
    tagsData: null,
    tagsError: null,
};

const createReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case CLEAR_USERDETAILS: {
            return {
                ...initialState,
            }
        }
        case Get_USER_PENDING: {
            return {
                ...state,
                userPending: true,
                userData: null,
                userError: null,
            }
        }
        case Get_USER_FULFILLED: {
            return {
                ...state,
                userPending: false,
                userData: payload,
                userError: false,
            }
        }
        case Get_USER_REJECTED: {
            return {
                ...state,
                userPending: false,
                userData: null,
                userError: payload,
            }
        }
        case Get_USERQUESTIONS_PENDING: {
            return {
                ...state,
                questionPending: true,
                questionData: null,
                questionError: null,
            }
        }
        case Get_USERQUESTIONS_FULFILLED: {
            return {
                ...state,
                questionPending: false,
                questionData: payload,
                questionError: false,
            }
        }
        case Get_USERQUESTIONS_REJECTED: {
            return {
                ...state,
                questionPending: false,
                questionData: null,
                questionError: payload,
            }
        }
        case Get_USERTAGS_PENDING: {
            return {
                ...state,
                tagsPending: true,
                tagsData: null,
                tagsError: null,
            }
        }
        case Get_USERTAGS_FULFILLED: {
            return {
                ...state,
                tagsPending: false,
                tagsData: payload,
                tagsError: false,
            }
        }
        case Get_USERTAGS_REJECTED: {
            return {
                ...state,
                tagsPending: false,
                tagsData: null,
                tagsError: payload,
            }
        }

        default:
            return state;
    }
};

export default createReducer;