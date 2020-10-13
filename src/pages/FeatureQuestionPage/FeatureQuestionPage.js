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

    return (
        <div class="card shadow-lg border-0 rounded-lg m-1">
            <div class="card-header">
                <h3 class="text-center font-weight-light my-4"><b>Featured Questions</b></h3>
            </div>
            <div class="card-body">
                {(!FeatureQuestionPending && !FeatureQuestionError) ? (
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
                    />) : "Loading"
                }
            </div>
        </div>
    );
}

export default FeatureQuestionPage;
