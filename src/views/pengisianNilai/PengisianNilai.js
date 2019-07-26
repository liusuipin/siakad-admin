import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './PengisianNilai.css';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import cetakNilai from './pdf/cetakNilai.pdf'
// import Footer from '../../components/footer/Footer';

class PengisianNilai extends Component {

    constructor() {
        super()
        this.state = {
            unggahModal: false
        }
    }

    unggahModal = () => {
        this.setState({
            unggahModal: !this.state.unggahModal
        })
    }

    render() {
        return (
            <Fragment>
                <Navigation />
                <div className="wrapper">
                    <Sidebar sidebar={this.props.state.sidebar} sidebarHandler={this.props.state.sidebar} />
                    <div className={this.props.state.sidebar ? "wrapper-content-close wrapper-content-blur" : "wrapper-content-open"}>
                        <div className={this.props.state.sidebar ? "container" : "container-fluid"}>
                            <Row className="mt-2 mb-4">
                                <Col>
                                    <div>
                                        <Breadcrumb className="breadcrumb-me">
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Pengisian Nilai</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Pengisian Nilai</h4>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="text-center">No</th>
                                                        <th>Seksi MK</th>
                                                        <th>Kode MK</th>
                                                        <th>Nama MK</th>
                                                        <th className="text-center">SKS MK</th>
                                                        <th className="th-width185">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center">1</th>
                                                        <td>1512600022</td>
                                                        <td>52350063</td>
                                                        <td>Pemograman Web</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-center">
                                                            <Link to="/pengisian-nilai/struktur-data">
                                                                <Button color="info" className="btn-sm mr-1"><i className="fas fa-pencil-alt"></i> Isi Nilai</Button>
                                                            </Link>
                                                            {/* <Button onClick={this.unggahModal} color="info" className="btn-sm mr-1"><i className="fas fa-upload"></i> Unggah</Button> */}
                                                            <a href={cetakNilai} download>
                                                            <Button color="info" className="btn-sm"><i className="fas fa-print"></i> PDF</Button>
                                                                </a>
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

                <Modal isOpen={this.state.unggahModal} toggle={this.unggahModal}>
                    <ModalHeader>Unggah Nilai</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted mt-3">
                                    Contoh Format:
                                </FormText>
                                <div className="table-responsive mt-1">
                                    <Table bordered size="sm">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>NIM<span className="text-danger">*</span></th>
                                                <th>Nama Mahasiswa</th>
                                                <th className="text-center">Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>5235151927</td>
                                                <td>Devin</td>
                                                <td className="text-center">A</td>
                                            </tr>
                                            <tr>
                                                <td>5235155768</td>
                                                <td>Arif Budi Setiawan</td>
                                                <td className="text-center">A-</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-sm btn-info"><i className="fas fa-upload"></i> Unggah</Button>
                        <Button onClick={this.unggahModal} className="btn-sm btn-danger"><i className="fas fa-window-close"></i> Batal</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }
}

export default GlobalConsumer(PengisianNilai);
