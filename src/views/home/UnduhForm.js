import React, { Component, Fragment } from 'react';
import { TabPane, Row, Col, Card, CardText } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class UnduhForm extends Component {
    render() {
        return (
            <Fragment>
                <TabPane tabId="4">
                    <Row className="mt-2 text-center">
                        <Col sm="1" md="3" className="p-2">
                            <NavLink to="" className="text-decoration-none text-secondary">
                                <Card body>
                                    <h1><i className="fas fa-key"></i></h1>
                                    <CardText>Form Pergantian Kata Sandi</CardText>
                                    {/* <Button>Go somewhere</Button> */}
                                </Card>
                            </NavLink>
                        </Col>
                        <Col sm="1" md="3" className="p-2">
                            <NavLink to="" className="text-decoration-none text-secondary">
                                <Card body>
                                    <h1><i className="fas fa-file-download"></i></h1>
                                    <CardText>Form Input Pergantian Nilai</CardText>
                                    {/* <Button>Go somewhere</Button> */}
                                </Card>
                            </NavLink>
                        </Col>
                        <Col sm="1" md="3" className="p-2">
                            <NavLink to="" className="text-decoration-none text-secondary">
                                <Card body>
                                    <h1><i className="fas fa-mail-bulk"></i></h1>
                                    <CardText>Form Pembuatan Email UNJ</CardText>
                                    {/* <Button>Go somewhere</Button> */}
                                </Card>
                            </NavLink>
                        </Col>
                    </Row>
                </TabPane>
            </Fragment>
        )
    }
}