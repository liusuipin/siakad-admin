import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import Footer from '../../components/footer/Footer';

class BimbinganAkademik extends Component {
    constructor() {
        super()
        this.state = {
            modalView: false,
            table: false
        }
    }

    toggle = () => {
        this.setState({
            modalView: !this.state.modalView
        })
    }

    dataMhs=()=>{
        this.props.history.push(`/bimbingan-akademik/data-mahasiswa`)
    }

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
                                            <BreadcrumbItem active>Bimbingan Akademik</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Daftar Mahasiswa Bimbingan Akademik</h4>
                                        <Form className="mb-3">
                                            <FormGroup row>
                                                <Col lg="3" sm="" md="12" className="pt-3">
                                                    <Label for="exampleSelect">Filter Angkatan</Label>
                                                    <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                        <option>2015</option>
                                                        <option>2016</option>
                                                        <option>2017</option>
                                                        <option>2018</option>
                                                    </Input>
                                                </Col>
                                                <Col sm="3" className="pt-3 mt-auto">
                                                    <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Filter</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="text-center">No</th>
                                                        <th>No. Mahasiswa</th>
                                                        <th>Nama Mahasiswa</th>
                                                        <th className="text-center">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center">1</th>
                                                        <td>5235151283</td>
                                                        <td>Elvira Elsa Diva</td>
                                                        <td className="th-width140">
                                                            <Button onClick={this.dataMhs} color="info" className="btn-sm"><i className="fas fa-eye"></i> Detail</Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>

                <Modal isOpen={this.state.modalView} toggle={this.toggle} className="modal-dialog-centered">
                    <ModalHeader toggle={this.toggle}>Data Mahasiswa</ModalHeader>
                    <ModalBody>
                        <Table bordered >
                            <tbody>
                                <tr>
                                    <th scope="row">NIM</th>
                                    <td>5235151927</td>
                                </tr>
                                <tr>
                                    <th scope="row">Nama Lengkap</th>
                                    <td>Devin</td>
                                </tr>
                                <tr>
                                    <th scope="row">Program Studi</th>
                                    <td>Pendidikan Teknik Informatika & Komputer</td>
                                </tr>
                                <tr>
                                    <th scope="row">IPS Akhir</th>
                                    <td>4.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">IPK</th>
                                    <td>4.00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle} className="btn-sm btn-danger"><i className="fas fa-times"></i> Tutup</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }
}

export default GlobalConsumer(BimbinganAkademik);
