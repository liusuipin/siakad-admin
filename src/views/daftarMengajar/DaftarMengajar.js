import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import Absensi from './absensi/absensi.pdf'
import cetakNilai from '../pengisianNilai/pdf/cetakNilai.pdf'
// import Footer from '../../components/footer/Footer';

class DaftarMengajar extends Component {
    constructor() {
        super()
        this.state = {
            modalDetail: false
        }
    }
    modalDetail = () => {
        this.setState({
            modalDetail: !this.state.modalDetail
        })
    }
    render() {
        return (
            <Fragment>
                <Navigation />
                <div className="wrapper">
                    <Sidebar />
                    <div className={this.props.state.sidebar ? "wrapper-content-close wrapper-content-blur" : "wrapper-content-open"}>
                        <div className={this.props.state.sidebar ? "container" : "container-fluid"}>
                            <Row className="mt-2 mb-2">
                                <Col>
                                    <div>
                                        <Breadcrumb className="breadcrumb-me">
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Daftar Mengajar</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Daftar Mengajar</h4>
                                        <Form className="mb-3">
                                            <FormGroup row>
                                                <Col lg="3" sm="6" md="12" className="pt-3">
                                                    <Label for="exampleSelect">Pilih Semester :</Label>
                                                    <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                        <option>107 - 1 2017/2018</option>
                                                        <option>106 - 3 2016/2017</option>
                                                        <option>105 - 1 2015/2016</option>
                                                        <option>104 - 3 2014/2015</option>
                                                        <option>103 - 1 2013/2014</option>
                                                        <option>102 - 3 2012/2013</option>
                                                    </Input>
                                                </Col>
                                                <Col sm="3" className="pt-3 mt-auto">
                                                    <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <h5 className="mt-4 mb-3">Daftar Mengajar Semester 107</h5>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="text-center">No</th>
                                                        <th>Seksi MK</th>
                                                        <th>Nama MK</th>
                                                        <th>SKS MK</th>
                                                        <th className="text-center th-width185">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center">1</th>
                                                        <td>1517800003</td>
                                                        <td>Struktur Data</td>
                                                        <td>3</td>
                                                        <td className="text-center">
                                                            <Button onClick={this.modalDetail} className="btn-sm btn-info mr-2" color="info"><i className="fas fa-eye"></i> Detail</Button>
                                                            <a href={Absensi} download ><Button className="btn-sm btn-info" color="info"><i className="fas fa-print"></i> CO6</Button></a>
                                                            <a href={cetakNilai} download>
                                                                <Button color="info" className="btn-sm ml-2"><i className="fas fa-print"></i> PDF</Button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center">2</th>
                                                        <td>1517800004</td>
                                                        <td>Basis Data</td>
                                                        <td>2</td>
                                                        <td className="text-center">
                                                            <Button onClick={this.modalDetail} className="btn-sm btn-info mr-2" color="info"><i className="fas fa-eye"></i> Detail</Button>
                                                            <a href={Absensi} download ><Button className="btn-sm btn-info" color="info"><i className="fas fa-print"></i> CO6</Button></a>
                                                            <a href={cetakNilai} download>
                                                                <Button color="info" className="btn-sm ml-2"><i className="fas fa-print"></i> PDF</Button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center">3</th>
                                                        <td>1517800045</td>
                                                        <td>Pemograman Web</td>
                                                        <td>3</td>
                                                        <td className="text-center">
                                                            <Button onClick={this.modalDetail} className="btn-sm btn-info mr-2" color="info"><i className="fas fa-eye"></i> Detail</Button>
                                                            <a href={Absensi} download ><Button className="btn-sm btn-info" color="info"><i className="fas fa-print"></i> CO6</Button></a>
                                                            <a href={cetakNilai} download>
                                                                <Button color="info" className="btn-sm ml-2"><i className="fas fa-print"></i> PDF</Button>
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

                <Modal isOpen={this.state.modalDetail} toggle={this.modalDetail} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.modalDetail}>Detail Daftar Mengajar</ModalHeader>
                    <ModalBody>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td className="font-weight-bold">Nama MK</td>
                                    <td>Struktur Data</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Seksi MK & Kode MK</td>
                                    <td>1517800003 & 52462033 </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">SKS MK</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Program Studi</td>
                                    <td>Pendidikan Teknik Informatika & Komputer</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Lokasi</td>
                                    <td>Gedung L2(404) </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Waktu</td>
                                    <td>Senin 15:00 sd 15:00 </td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Pengajar</td>
                                    <td>Ke-2</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Tim Pengajar</td>
                                    <td>0006075806 Yuliatri Sastra Wijaya & 00224087402 Hamidillah Ajie</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold">Jumlah Mahasiswa</td>
                                    <td>40</td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.modalDetail} className="btn-danger btn-sm"><i className="fas fa-times"></i> Tutup</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }
}

export default GlobalConsumer(DaftarMengajar);
