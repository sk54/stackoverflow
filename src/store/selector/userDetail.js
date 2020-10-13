import { createSelector } from 'reselect'

const getuserDetail = (state) => state.userDetails;
const getUserData = (state) => state.userDetails.userData;
const getQuestionData = (state) => state.userDetails.questionData;
const getTagData = (state) => state.userDetails.tagsData;

export const getuserDetailPending = createSelector(
    [getuserDetail],
    (userDetail) => {
        if (userDetail.userPending || userDetail.questionPending || userDetail.tagsPending) {
            return true
        }
        return false;
    }
)

export const getuserDetailData = createSelector(
    [getUserData,
        getQuestionData,
        getTagData],
    (userData, questionData, tagData) => {
        if (userData && questionData && tagData) {
            return {
                userData,
                questionData,
                tagData
            }
        }
        return null;
    }
)