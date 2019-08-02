import React, { Component, Fragment } from 'react';
import { TabPane, Row, Col, Card, CardBody, CardTitle, CardText, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Berita extends Component {
    render() {
        return (
            <Fragment>
                <TabPane tabId="1">
                    <Row className="mt-4">
                        <Col sm="12">
                            <Card>
                                <CardBody className="bl-unj">
                                    <Link to="detail-informasi">
                                        <CardTitle className="text-muted"><b>Jadwal Kegiatan Akhir Semester 110.</b></CardTitle>
                                    </Link>
                                    <CardText>Diberitahukan Kepada Seluruh Dosen Universitas Negeri Jakarta terkait dengan jadwal kegiatan akhir semester 110.</CardText>
                                    <CardText>
                                        <small className="text-muted">Terakhir Diperbaharui 8 menit yang Lalu</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card className="mt-3">
                                <CardBody className="bl-unj">
                                    <Link to="detail-informasi">
                                        <CardTitle className="text-muted"><b>Jadwal Penginputan Nilai Semester 110</b></CardTitle>
                                    </Link>
                                    <CardText>Diberitahukan Kepada Seluruh Dosen Universitas Negeri Jakarta terkait dengan jadwal kegiatan akhir semester 110.</CardText>
                                    <CardText>
                                        <small className="text-muted">Terakhir Diperbaharui 1 menit yang Lalu</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" className="mt-3">
                            <Pagination aria-label="Page navigation example">
                                <PaginationItem disabled>
                                    <PaginationLink first href="#" />
                                </PaginationItem>
                                <PaginationItem disabled>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">
                                        1
          </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        2
          </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        3
          </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        4
          </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">
                                        5
          </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink last href="#" />
                                </PaginationItem>
                            </Pagination>
                        </Col>
                    </Row>
                </TabPane>
            </Fragment>
        )
    }
}
