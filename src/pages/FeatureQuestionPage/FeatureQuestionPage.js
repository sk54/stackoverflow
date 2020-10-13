import React from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Container, Row, Col } from 'react-bootstrap'

import { timeSince } from "../../commonFunction";

const FeatureQuestionPage = ({
    FeatureQuestionData,
    FeatureQuestionPending,
    FeatureQuestionError,
    handleUserClick
}) => {

    const renderRow = (item) => {
        return (
            <Container fluid>
                <Row>
                    <Col sm={0} md={2}  >
                        <div className="d-sm-none d-md-block">

                            <div className="d-inline-block p-2">
                                <p class="text-center text-sm font-weight-light p-0 m-0" >{item.score}</p>
                                <p class="text-center text-xl font-weight-lighter">votes</p>
                            </div>

                            <div className="d-inline-block p-2">
                                <p class="text-center font-weight-light m-0">{item.answer_count}</p>
                                <p class="text-center font-weight-lighter">answers</p>
                            </div>

                            <div className="d-inline-block p-2">
                                <p class="text-center font-weight-light m-0">{item.view_count}</p>
                                <p class="text-center font-weight-lighter m-0">views</p>
                            </div>

                        </div>
                    </Col>
                    <Col sm={12} md={9}>
                        <Container fluid>
                            <div>
                                <button type="button" className="btn btn-link text-left p=0" style={{ color: "blue" }}>
                                    <p className="text-primary m-0" >{item.title}</p>
                                </button>
                            </div>
                            <div>
                                {item.tags && item.tags.map((tagitem) => (
                                    <button type="button" className="btn btn-sm btn-light m-1 text-primary" > {tagitem}</button>
                                ))}
                            </div>
                            <div>
                                <div className="text-left">
                                    <span>{timeSince(item.last_activity_date - item.creation_date)} ago</span>
                                    <button type="button" className="btn btn-link" style={{ color: "blue" }} onClick={() => handleUserClick(item)}>
                                        {item.owner.display_name}
                                    </button>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container >
        )
    }

    const listData = [];
    for (let i = 0; i < 23; i++) {
        listData.push({
            "tags": [
                "java",
                "arrays"
            ],
            "owner": {
                "reputation": 1,
                "user_id": 14281412,
                "user_type": "registered",
                "profile_image": "https://lh3.googleusercontent.com/-U1VELHHNDRQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnFCwevEzRtRuorSsfd5Z5kP3ujTA/photo.jpg?sz=128",
                "display_name": "吴至琛",
                "link": "https://stackoverflow.com/users/14281412/%e5%90%b4%e8%87%b3%e7%90%9b"
            },
            "is_answered": false,
            "view_count": 14,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1602501246,
            "creation_date": 1602500999,
            "last_edit_date": 1602501246,
            "question_id": 64316686,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/64316686/questions-about-copyeven-in-java",
            "title": "Questions about copyEven in java"
        });
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <div class="card shadow-lg border-0 rounded-lg m-1">
            <div class="card-header">
                <h3 class="text-center font-weight-light my-4"><b>Featured Questions</b></h3>
            </div>
            <div class="card-body">
                {!FeatureQuestionPending && !FeatureQuestionError && (
                    < List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 20,
                        }}
                        dataSource={FeatureQuestionData && FeatureQuestionData.items || []}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                            >
                                {renderRow(item)}
                            </List.Item>
                        )}
                    />)
                }
            </div>
        </div>
    );
}

export default FeatureQuestionPage;
