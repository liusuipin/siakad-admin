import React, { Component, Fragment } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import './Home.css'
import Sidebar from '../../components/sidebar/Sidebar';
import Navigation from '../../components/navigation/Navigation.js';
import { GlobalConsumer } from '../../context/context';
import { Link } from 'react-router-dom'

import fip from './bpa/fip.pdf'
import fe from './bpa/fe.pdf'
import fbs from './bpa/fbs.pdf'
import ft from './bpa/ft.pdf'
import fik from './bpa/fik.pdf'
import fmipa from './bpa/fmipa.pdf'
import fis from './bpa/fis.pdf'


class Bpa extends Component {

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
                                            <BreadcrumbItem active>BPA</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <h4 className="text-center mb-2">Buku Pedoman Akademik</h4>
                                    <Row>
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
                                    </Row>
                                    <Row className="mt-2">
                                        <Col sm="8">
                                            <div className="table-responsive">
                                                <Table bordered>
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th className="text-center">Fakultas</th>
                                                            <th className="text-center">Aksi</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ilmu Pendidikan (FIP)</td>
                                                            <td className="text-center">

                                                                <a href={fip} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bahasa & Seni (FBS)</td>
                                                            <td className="text-center">

                                                                <a href={fbs} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ilmu Sosial (FIS)</td>
                                                            <td className="text-center">

                                                                <a href={fis} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Teknik (FT)</td>
                                                            <td className="text-center">

                                                                <a href={ft} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Matematika & Ilmu Pengetahuan Alam (FMIPA)</td>
                                                            <td className="text-center">

                                                                <a href={fmipa} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ilmu Keolahragaan (FIK)</td>
                                                            <td className="text-center">

                                                                <a href={fik} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ilmu Ekonomi (FE)</td>
                                                            <td className="text-center">

                                                                <a href={fe} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pendidikan Psikologi (FPPSI)</td>
                                                            <td className="text-center">

                                                                <a href={fip} download>
                                                                    <Button color="success" className="btn-sm"><i className="fas fa-cloud-download-alt"></i> Unduh</Button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
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

export default GlobalConsumer(Bpa);
