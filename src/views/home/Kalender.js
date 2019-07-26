import React, { Component, Fragment } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import kalender from './kalenderAkademik.pdf';
import Sidebar from '../../components/sidebar/Sidebar';
import Navigation from '../../components/navigation/Navigation.js';
import { GlobalConsumer } from '../../context/context';
import { Link } from 'react-router-dom'


class Kalender extends Component {

    render() {
        return (
            <Fragment>
                <Navigation />
                <div className="wrapper">
                    <Sidebar />
                    <div className={this.props.state.sidebar ? "wrapper-content-close wrapper-content-blur" : "wrapper-content-open"}>
                        <div className={this.props.state.sidebar ? "container" : "container-fluid"}>
                            <Row className="mt-2 mb-4">
                                <Col>
                                    <div>
                                        <Breadcrumb className="breadcrumb-me">
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Kalender Akademik</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <h4 className="text-center mb-2">Kalender Akademik</h4>
                                    <Row className="">
                                        <Col sm="12">
                                            <Form className="mb-4">
                                                <FormGroup row>
                                                    <Col lg="3" sm="6" md="12" className="pt-3">
                                                        <Label for="exampleSelect">Pilih Tahun :</Label>
                                                        <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                            <option>2019</option>
                                                            <option>2018</option>
                                                            <option>2017</option>
                                                            <option>2016</option>
                                                            <option>2015</option>
                                                            <option>2014</option>
                                                            <option>2013</option>
                                                        </Input>
                                                    </Col>
                                                    <Col sm="3" className="pt-3 mt-auto">
                                                        <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                    </Col>
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                        <Col sm="12" className="text-center">
                                            <embed src={kalender} type="application/pdf" width="100%" height="600px" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default GlobalConsumer(Kalender);
