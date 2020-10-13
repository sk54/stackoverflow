import React from 'react'

const UserProfilePage = (props) => {
    const {
        id,
        name,
        userDetailData,
        userDetailPending
    } = props;

    const renderUserView = (data) => {
        const { userData, questionData, tagData } = data
        return (
            <div class="container-fluid bg-grey justify-content m-2">
                <div class="row justify-content-center">
                    <div className="col-8">
                        <div class="row justify-content-center">
                            <div class="col-sm-4">
                                <div class="thumbnail m-1">
                                    <img src={userData.items[0].profile_image} alt="Paris" width="200" height="150" />
                                    <p>{userData.items[0].reputation} REPUTATIONS</p>
                                    <div>
                                        <button type="button" className="btn btn-sm btn-light m-1 text-warning" > {userData.items[0].badge_counts.gold}</button>
                                        <button type="button" className="btn btn-sm btn-light m-1 text-primary" > {userData.items[0].badge_counts.bronze}</button>
                                        <button type="button" className="btn btn-sm btn-light m-1 text-secondary" > {userData.items[0].badge_counts.silver}</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <h2>{userData.items[0].display_name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row justify-content-center">
                        <div className="col-8">
                            <p className="text-center"><strong>Tags  {tagData.quota_max}</strong></p>
                            <br />
                            <ul class="list-group">
                                {tagData.items.map(item =>
                                    <li class="list-group-item">
                                        <button type="button" className="btn btn-sm btn-light m-1 text-warning" > {item.name} </button>
                                        <span>{item.count}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div class="row justify-content-center">
                        <div className="col-8">
                            <p className="text-center"><strong>Questions</strong></p>
                            <ul class="list-group">
                                {questionData.items.map(item =>
                                    <li class="list-group-item">
                                        <button type="button" className="btn btn-sm btn-light m-1 text-warning"  > {item.is_answered ? "A" : "Q"} </button>
                                        <span>{item.title}</span>
                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        )

    }

    return (
        <div>
            {userDetailData ? renderUserView(userDetailData) : "loading"}

        </div>
    )
}

export default UserProfilePage;
