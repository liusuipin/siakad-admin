import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem } from 'reactstrap';

export default class InputData extends Component {
    render() {
        return (
            <Fragment>
                <TabPane tabId="1" className="mt-3">
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#" className="bg-light"><i className="fas fa-check-circle mr-2"></i>Pengisian Jadwal Perkuliahan Semester 110</ListGroupItem>
                        <ListGroupItem disabled tag="a" href="#">
                            <Row>
                                <Col sm="8">
                                    Test
                                        </Col>
                                <Col sm="4">
                                    <h5>Keterangan</h5>
                                    <ol>
                                        <li><span className="text-danger">*</span> (1 tanda bintang merah) wajib terisi</li>
                                        <li><span className="text-danger">**</span> (2 tanda bintang merah) wajib terisi bila ada tatap muka kelas</li>
                                        <li>Semester secara otomatis akan terbuka sesuai jadwal.</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ol>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </TabPane>
            </Fragment>
        )
    }
}
