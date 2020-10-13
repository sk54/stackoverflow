import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";

import UserProfilePage from "./UserProfilePage";

import * as actions from "../../store/action/userDeatils";
import { getuserDetailData, getuserDetailPending } from "../../store/selector/userDetail";

export const UserProfileContainer = (props) => {
    let {
        id,
        name,
    } = useParams();

    const {
        userDetailData,
        userDetailPending
    } = props

    const {
        getUserDeatils,
        getUserQuestions,
        getUsertags
    } = props


    useEffect(() => {
        document.title = "user-profile-page"
        getUserDeatils(id);
        getUserQuestions(id);
        getUsertags(id);
    }, [id, getUserDeatils, getUserQuestions, getUsertags]);
    return (
        <UserProfilePage
            id={id}
            name={name}
            userDetailData={userDetailData}
            userDetailPending={userDetailPending}
        />
    )
}

const mapStateToProps = (state) => ({
    userDetailData: getuserDetailData(state),
    userDetailPending: getuserDetailPending(state)

})

const mapDispatchToProps = {
    getUserDeatils: actions.getUserDeatils,
    getUserQuestions: actions.getUserQuestions,
    getUsertags: actions.getUsertags
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer)
