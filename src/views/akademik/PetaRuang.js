import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, UncontrolledCollapse, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// masukin UncontrolledCollapse di import yg reactstrap
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class PetaRuang extends Component {

    constructor() {
        super()
        this.state = {
            modalData: false
        }
    }

    modalData = () => {
        this.setState({
            modalData: !this.state.modalData
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
                            <Row className="mt-2 mb-4">
                                <Col>
                                    <div>
                                        <Breadcrumb className="breadcrumb-me">
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-landmark mr-2"></i>Akademik</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Peta Ruang</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Peta Ruang</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Row>
                                            <Col sm="12">
                                                <Form className="mb-4">
                                                    <FormGroup row>
                                                        <Col lg="3" sm="6" md="12" className="pt-3">
                                                            <Label for="exampleSelect">Semester :</Label>
                                                            <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                                <option>Pilih Semester</option>
                                                                <option>103-20151</option>
                                                                <option>104-20152</option>
                                                                <option>105-20161</option>
                                                                <option>106-20162</option>
                                                                <option>107-20171</option>
                                                                <option>108-20172</option>
                                                                <option>109-20181</option>
                                                                <option>110-20191</option>
                                                            </Input>
                                                        </Col>
                                                        <Col lg="3" md="12" className="pt-3">
                                                            <Label for="exampleSelect">Ruang :</Label>
                                                            <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                                <option>Pilih Ruang</option>
                                                                <option>Gedung L-Ruang 208</option>
                                                                <option>Gedung L-Ruang 302</option>
                                                                <option>Gedung L-Ruang 304</option>
                                                                <option>Gedung L-Ruang 305</option>
                                                                <option>Gedung L-Ruang 307</option>
                                                                <option>Gedung L-Ruang 403</option>
                                                                <option>Gedung L-Ruang 404</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            {/* kasih id="toggler" di button yg mau dklik */}
                                                            <Button id="toggler" color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                        </Col>

                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        {/* bungkus semua file yg ingin ditampilkan dalam 
                                        <UncontrolledCollapse toggler="#toggler">
                                            {file yg mau ditampilkan}
                                        </UncontrolledCollapse>
                                        */}
                                        <UncontrolledCollapse toggler="#toggler">
                                            <div className="table-responsive">
                                                <Table bordered>
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th rowSpan={2} className="text-center">No</th>
                                                            <th rowSpan={2} className="text-center">Jam Perkuliahan</th>
                                                            <th colSpan={7} className="text-center">Hari Perkuliahan</th>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-center">Senin</th>
                                                            <th className="text-center">Selasa</th>
                                                            <th className="text-center">Rabu</th>
                                                            <th className="text-center">Kamis</th>
                                                            <th className="text-center">Jumat</th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>8:00</td>
                                                            <td className="bg-danger text-white">1501600027, Elektronika Industri, Yuliatri Sastrawijaya</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1501600005, Algoritma dan Pemrograman, Hamidillah Ajie</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>9:00</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600017, Data Warehouse, Bambang Prasetya Adhi</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>10:00</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600046, Metode Penelitian, Ivan Hanafi</td>
                                                            <td className="bg-danger text-white">1512600068, Teori Bahasa dan Automata, Bambang Prasetya Adhi</td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td>11:00</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600046, Metode Penelitian, Ivan Hanafi</td>
                                                            <td className="bg-danger text-white">1512600068, Teori Bahasa dan Automata, Bambang Prasetya Adhi</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <td>12:00</td>
                                                            <td className="bg-danger text-white">1501600027, Elektronika Industri, Yuliatri Sastrawijaya</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1501600005, Algoritma dan Pemrograman, Hamidillah Ajie</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">6</th>
                                                            <td>13:00</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600017, Data Warehouse, Bambang Prasetya Adhi</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">7</th>
                                                            <td>14:00</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600017, Data Warehouse, Bambang Prasetya Adhi</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">8</th>
                                                            <td>15:00</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600017, Data Warehouse, Bambang Prasetya Adhi</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="text-center">Avail</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">9</th>
                                                            <td>16:00</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td>Avail</td>
                                                            <td className="bg-danger text-white">1512600046, Metode Penelitian, Ivan Hanafi</td>
                                                            <td className="bg-danger text-white">1512600068, Teori Bahasa dan Automata, Bambang Prasetya Adhi</td>

                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </UncontrolledCollapse>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>

                <Modal isOpen={this.state.modalData} toggle={this.modalData} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.modalData}>Edit Data Dosen</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">NIDN</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Nama</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="YULIATRI SASTRA WIJAYA" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Gelar Depan</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Dr" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Gelar Belakang</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="M.Pd." />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">NIP</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Home Base</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <Label>Jenis Kelamin</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Laki-laki
            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Perempuan
            </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Tempat Lahir</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Tanjungkarang Lampung" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Tempat Lahir</Label>
                                    <Input type="date" name="password" id="examplePassword" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Keaktifan Dosen</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-info">Simpan</Button>
                        <Button className="btn-danger" onClick={this.modalData}>Tutup</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(PetaRuang);

