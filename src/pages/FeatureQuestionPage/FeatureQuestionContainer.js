import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import FeatureQuestionPage from "./FeatureQuestionPage";
import * as actions from "../../store/action/featureQuestion";

export const FeatureQuestionContainer = (props) => {
    const {
        FeatureQuestionData,
        FeatureQuestionPending,
        FeatureQuestionError,
        getFeatureQuestion
    } = props;

    useEffect(() => {
        document.title = "Featured-question"
        getFeatureQuestion();
    }, [getFeatureQuestion]);

    let history = useHistory();

    const onUserClick = (item) => {
        history.push(`/users/${item.owner.user_id}/${item.owner.display_name}`);
    }

    return (
        <FeatureQuestionPage
            FeatureQuestionData={FeatureQuestionData}
            FeatureQuestionPending={FeatureQuestionPending}
            FeatureQuestionError={FeatureQuestionError}
            handleUserClick={onUserClick}
        />
    )
}

const mapStateToProps = (state) => ({
    FeatureQuestionData: state.FeatureQuestion.data,
    FeatureQuestionPending: state.FeatureQuestion.pending,
    FeatureQuestionError: state.FeatureQuestion.error,
})

const mapDispatchToProps = {
    getFeatureQuestion: actions.getFeatureQuestion,
    clearFeatureQuestion: actions.clearFeatureQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureQuestionContainer)
