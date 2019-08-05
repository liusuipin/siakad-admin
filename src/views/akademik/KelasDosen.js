
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, UncontrolledCollapse, TabPane, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';
import DaftarKelasSeksi from '../akademik/Daftar_Kelas_Seksi_Skripsi.xls'
import NilaiSkripsi from '../akademik/Nilai-Skripsi.pdf'
import Swal from 'sweetalert2';
export default class KelasDosen extends Component {

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

    delAlert = () => {
        return Swal.fire({
            title: 'Anda yakin ingin menghapus data ini?',
            text: "Anda tidak akan dapat mengembalikannya!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus data!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Terhapus!',
                    'Data berhasil dihapus',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <Fragment>
                <TabPane tabId="2" className="mt-3">
                    <Row className="mt-2 mb-4">
                        <Col>
                            <div className="col-md-12 mx-auto mt-2">
                                <Row>
                                    <Col sm="12">
                                        <Form className="mb-4">
                                            <FormGroup row>
                                                <Col lg="3" sm="6" md="12" className="pt-3">
                                                    <Label for="exampleSelect">Dosen Pengampu :</Label>
                                                    <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                        <option>Pilih Dosen Pengampu</option>
                                                        <option>0006075806 Yuliatri Sastrawijaya</option>
                                                        <option>0024087402 Hamidillah Ajie</option>
                                                        <option>0024097304 M. Ficky Duskarnaen</option>
                                                        <option>0025037206 Widodo</option>
                                                        <option>0025028303 Bambang Prasetya Adhi</option>
                                                        <option>0021067904 Prasetyo Wibowo Yunanto</option>
                                                        <option>0029127601 Lipur Sugiyanta</option>
                                                    </Input>
                                                </Col>
                                                <Col lg="3" md="12" className="pt-3">
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
                                                <Col sm="3" className="pt-3 mt-auto">
                                                    <Button id="toggler" color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                    </Col>
                                </Row>
                                <UncontrolledCollapse toggler="#toggler">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Daftar Kelas Dosen Semester 110</h4>
                                            <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="6">
                                            <p><b>NIDN</b><br />0024087402</p>
                                            <p><b>Nama Dosen</b><br />Hamidillah Ajie</p>
                                        </Col>
                                        <Col sm="6">
                                            <p><b>Homebase</b><br />S1 Pendidikan Teknik Informatika dan Komputer</p>
                                            <p><b>NIP</b><br />197408242005011001</p>
                                        </Col>
                                    </Row>
                                    <div className="table-responsive mt-2">
                                        <Table bordered>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th>Seksi</th>
                                                    <th>Mata Kuliah</th>
                                                    <th>SKS</th>
                                                    <th>Status</th>
                                                    <th>Jumlah MHS</th>
                                                    <th className="text-center th-width185">Detail</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>1512600014</td>
                                                    <td>Desain Web Lanjutan</td>
                                                    <td>2</td>
                                                    <td>Pengajar ke.1</td>
                                                    <td>26</td>
                                                    <td className="text-center">
                                                        <Button color="info" className="btn-sm mr-2" onClick={this.modalData}><i className="fas fa-th-list"></i> Detail</Button>
                                                        <a href={DaftarKelasSeksi} download><Button color="info" className="btn-sm"><i className="far fa-file-excel"></i> C06</Button></a>
                                                        <a href={NilaiSkripsi} download><Button color="info" className="btn-sm ml-2"><i className="fas fa-print"></i> Nilai</Button></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </UncontrolledCollapse>
                            </div>
                        </Col>
                    </Row>
                </TabPane>

                <Modal isOpen={this.state.modalData} toggle={this.modalData} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.modalData}>Edit Kelas Dosen</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">NIDN</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="0006075806" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Nama Dosen</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Yuliatri Sastrawijaya" />
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
                                    <Label for="exampleSelect">Home Base</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>15126-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                        <option>17056-S1 Manajemen</option>
                                        <option>12046-S1 Pendidikan Bahasa Perancis</option>
                                        <option>16016-S1 Pendidikan Jasmani</option>
                                        <option>18016-S1 Pendidikan Psikologi</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">NIP</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Kode Seksi MK</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Mata Kuliah</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Jakarta" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">SKS</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Status</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Pengajar I</option>
                                        <option>Pengajar II</option>
                                        <option>Pengajar III</option>
                                        <option>Pengajar IV</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Jumlah Mahasiswa</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-info" onClick={this.modalData}>Simpan</Button>
                        <Button className="btn-danger" onClick={this.modalData}>Tutup</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }
}



