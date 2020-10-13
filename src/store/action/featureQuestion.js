import axios from 'axios'
import { SERVER_URL } from '../const/api';
import { Get_FEATUREQUESTION_PENDING, Get_FEATUREQUESTION_FULFILLED, Get_FEATUREQUESTION_REJECTED, CLEAR_QUESTION_LIST } from "../const/action";


const getFeatureQuestionSuccess = (response) => {
    return {
        type: Get_FEATUREQUESTION_FULFILLED,
        payload: response.data
    }
}

const getFeatureQuestionError = (response) => {
    return {
        type: Get_FEATUREQUESTION_REJECTED,
        payload: response.error
    }
}


export function getFeatureQuestion() {
    let url = `${SERVER_URL}/2.2/questions?order=desc&sort=activity&site=stackoverflow`;
    return function (dispatch) {
        dispatch({
            type: Get_FEATUREQUESTION_PENDING,
            data: true
        });
        axios.get(url)
            .then((response) => {
                dispatch(getFeatureQuestionSuccess(response))
            }).catch((error) => {
                dispatch(getFeatureQuestionError(error))
            })
    }
}

export const clearFeatureQuestion = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_QUESTION_LIST
        })
    }
}