import axios from 'axios'
import { SERVER_URL } from '../const/api';
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
} from "../const/action";


const reqTypeObj = {
    user: "user",
    tags: "tags",
    questions: "questions"
}

const handleUserDetailSuccess = (response, reqType, id) => {
    switch (reqType) {
        case reqTypeObj.user:
            return {
                type: Get_USER_FULFILLED,
                payload: response.data
            };
        case reqTypeObj.questions:
            return {
                type: Get_USERQUESTIONS_FULFILLED,
                payload: response.data
            };
        case reqTypeObj.tags:
            return {
                type: Get_USERTAGS_FULFILLED,
                payload: response.data
            };
        default:
            break;
    }
}

const handleUserDetailError = (response, reqType, id) => {
    switch (reqType) {
        case reqTypeObj.user:
            return {
                type: Get_USER_REJECTED,
                payload: response.error
            }
        case reqTypeObj.questions:
            return {
                type: Get_USERQUESTIONS_REJECTED,
                payload: response.error
            }
        case reqTypeObj.tags:
            return {
                type: Get_USERTAGS_REJECTED,
                payload: response.error
            }
        default:
            break;
    }
}


export function getUserDeatils(id) {
    let url = `${SERVER_URL}/2.2/users/${id}?order=desc&sort=reputation&site=stackoverflow`;
    return function (dispatch) {
        dispatch({
            type: Get_USER_PENDING,
            data: true,
        });
        axios.get(url)
            .then((response) => {
                dispatch(handleUserDetailSuccess(response, reqTypeObj.user, id))
            }).catch((error) => {
                dispatch(handleUserDetailError(error, reqTypeObj.user, id))
            })
    }
}

export function getUsertags(id) {
    let url = `${SERVER_URL}/2.2/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`;
    return function (dispatch) {
        dispatch({
            type: Get_USERTAGS_PENDING,
            data: true,
        });
        axios.get(url)
            .then((response) => {
                dispatch(handleUserDetailSuccess(response, reqTypeObj.tags, id))
            }).catch((error) => {
                dispatch(handleUserDetailError(error, reqTypeObj.tags, id))
            })
    }
}

export function getUserQuestions(id) {
    let url = `${SERVER_URL}/2.2/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`;
    return function (dispatch) {
        dispatch({
            type: Get_USERQUESTIONS_PENDING,
            data: true
        });
        axios.get(url)
            .then((response) => {
                dispatch(handleUserDetailSuccess(response, reqTypeObj.questions, id))
            }).catch((error) => {
                dispatch(handleUserDetailError(error, reqTypeObj.questions, id))
            })
    }
}

export const clearUserDetails = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_USERDETAILS
        })
    }
}