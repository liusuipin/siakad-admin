import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';
import DaftarKelasSeksi from '../akademik/Daftar_Kelas_Seksi_Skripsi.xls'
import NilaiSkripsi from '../akademik/Nilai-Skripsi.pdf'
import Swal from 'sweetalert2'
class KelasSeksi extends Component {

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

    delAlert=()=>{
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
                                            <BreadcrumbItem active>Kelas Seksi</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Kelas Seksi</h4>
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
                                                            <Label for="exampleSelect">Pencarian :</Label>
                                                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" placeholder="1512600019">
                                                            </Input>
                                                        </Col>
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                        </Col>
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <h4>Daftar Kelas Seksi Semester 110</h4>
                                                <hr />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="4">
                                                <p><b>Seksi</b><br />1512600019</p>
                                                <p><b>Nama Mata Kuliah</b><br />Skripsi</p>
                                            </Col>
                                            <Col sm="4">
                                                <p><b>Program Studi</b><br />15126-S1 Pendidikan Teknik Informatika dan Komputer</p>
                                                <p><b>SKS</b><br />4</p>
                                            </Col>
                                            <Col sm="4">
                                                <p><b>Dosen</b><br />1. NIDN : 0006075806 , Nama Dosen : Yuliatri Sastrawijaya </p>
                                                <p><b>Lokasi</b><br />Gedung L2(301) / Jum'at 11:00:00 sd 11:50:00
Gedung L2(301) / Jum'at 12:00:00 sd 12:50:00
Gedung L2(301) / Jum'at 13:00:00 sd 13:50:00</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6" className="pt-3">
                                                <a href={DaftarKelasSeksi} download><Button color="info" className="btn-sm" onClick={this.update}><i className="far fa-file-excel"></i> C06</Button></a>
                                                < a href={NilaiSkripsi} download><Button color="info" className="btn-sm ml-2" onClick={this.update}><i className="fas fa-print"></i> Nilai</Button></a>
                                            </Col>
                                        </Row>
                                        <div className="table-responsive mt-2">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>NIM</th>
                                                        <th>Nama Mahasiswa</th>
                                                        <th>Program Studi</th>
                                                        <th>Nilai</th>
                                                        <th className="text-center">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>5235150233</td>
                                                        <td>Azizah Khoiro Nisah</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td></td>
                                                        <td className="text-center">
                                                            <Button color="danger" className="btn-sm mr-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>5235151078</td>
                                                        <td>Nia Septiani</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td></td>
                                                        <td className="text-center">
                                                            <Button color="danger" className="btn-sm mr-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>5235150646</td>
                                                        <td>Cindy Desmayanti</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td></td>
                                                        <td className="text-center">
                                                            <Button color="danger" className="btn-sm mr-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
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

                <Modal isOpen={this.state.modalData} toggle={this.modalData} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.modalData}></ModalHeader>
                    <ModalBody>
                        <div>
                        <h5>Anda Yakin Untuk Menghapus Data?</h5>
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

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(KelasSeksi);

