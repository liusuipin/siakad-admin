import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';
import Swal from 'sweetalert2'
class PembimbingAkademik extends Component {

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
                                            <BreadcrumbItem active>Pembimbing Akademik</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Pembimbing Akademik</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Row>
                                            <Col sm="12">
                                                <Form className="mb-4">
                                                    <FormGroup row>
                                                        <Col lg="3" md="12" className="pt-3">
                                                            <Label for="exampleSelect">Dosen Bimbingan Akademik :</Label>
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
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                        </Col>
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="12">
                                                <h4>Daftar Mahasiswa Bimbingan Akademik</h4>
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
                                        <Row>
                                            <Col sm="12">
                                                <Form className="mb-4">
                                                    <FormGroup row>
                                                        <Col lg="3" md="12" className="pt-3">
                                                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" placeholder="Ketik NIM" />
                                                        </Col>
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            <Button color="success" type="button" className="btn-sm"><i className="fas fa-user-plus"></i> Tambah Mahasiswa</Button>
                                                        </Col>
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <div className="table-responsive mt-2">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>NIM</th>
                                                        <th>Nama Mahasiswa</th>
                                                        <th>Jalur Masuk</th>
                                                        <th>Program Studi</th>
                                                        <th>IP. Kumulatif</th>
                                                        <th className="text-center th-width185">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>5235150233</td>
                                                        <td>Azizah Khoiro Nisah</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>3.65</td>
                                                        <td className="text-center">
                                                            <Button color="danger" className="btn-sm mr-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>5235151078</td>
                                                        <td>Nia Septiani</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>3.70</td>
                                                        <td className="text-center">
                                                            <Button color="danger" className="btn-sm mr-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                        </td>
                                                    </tr>

                                                     <tr>
                                                        <th scope="row">2</th>
                                                        <td>5235150646</td>
                                                        <td>Cindy Desmayanti</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>3.80</td>
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

export default GlobalConsumer(PembimbingAkademik);

