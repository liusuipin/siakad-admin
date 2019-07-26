import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import fotoMhs from './poto.png';
import Tabs from './Tabs';

class DataMahasiswa extends Component {
    constructor() {
        super()
        this.state = {
            dataDiri: false,
            dataSekolah: false,
            table: false,
            acc: false
        }
    }

    acc = () => {
        this.setState({
            acc: true
        })
    }

    unAcc = () => {
        this.setState({
            acc: false
        })
    }

    dataDiri = () => {
        this.setState({
            dataDiri: !this.state.dataDiri
        })
    }

    dataSekolah = () => {
        this.setState({
            dataSekolah: !this.state.dataSekolah
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
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Data Mahasiswa</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Data Mahasiswa</h4>
                                        <Row className="mt-3">
                                            <Col sm={2} className="mx-auto text-center mt-2">
                                                <img src={fotoMhs} className="img-thumbnail" alt="Foto Mahasiswa" />

                                            </Col>
                                            <Col sm={9} className="mt-2">
                                                <Table borderless size="sm">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Nama</th>
                                                            <td>: &nbsp; Elvira Elsa DIva</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">NIM</th>
                                                            <td>: &nbsp; 5253516178</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Program Studi</th>
                                                            <td>: &nbsp; Pendidikan Teknik Informatika dan Komputer</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Angkatan</th>
                                                            <td>: &nbsp; 2015</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">IPK</th>
                                                            <td>: &nbsp; 4.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">IPS</th>
                                                            <td>: &nbsp; 4.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Detail</th>
                                                            <td>: &nbsp;
                                                                <Button className="btn-success btn-sm" onClick={this.dataDiri}>Data Diri</Button>
                                                                <Button className="btn-success btn-sm ml-2" onClick={this.dataSekolah}>Data Sekolah</Button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Tabs />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>

                <Modal isOpen={this.state.dataDiri} toggle={this.dataDiri} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.dataDiri}>Data Mahasiswa</ModalHeader>
                    <ModalBody>
                        <div className="table-responsive">
                            <Table bordered hover size="">
                                <tbody>
                                    <tr>
                                        <th scope="row">Nama</th>
                                        <td> Elvira Elsa Diva</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NIK</th>
                                        <td> 217373831</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tempat Tanggal Lahir</th>
                                        <td> Wakanda, 30 Januari 1997</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Jenis Kelamin</th>
                                        <td> Lucinta Luna</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Agama</th>
                                        <td> Islam</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td> echa@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">No. HP</th>
                                        <td> 082938371912</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Alamat</th>
                                        <td> Jalan Cikini</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tempat Tinggal</th>
                                        <td> Bawa kereta</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Transportasi</th>
                                        <td> Kuda</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">RT/RW</th>
                                        <td> 009/08</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kelurahan</th>
                                        <td> Cikeas</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kecamatan</th>
                                        <td> Bali</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kabupaten/Kota</th>
                                        <td> Jakrta</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Provinsi</th>
                                        <td> Jawa</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kode Pos</th>
                                        <td> 23121</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kewarganegaraan</th>
                                        <td> Jepang</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.dataDiri} className="btn-sm btn-danger"><i className="fas fa-times"></i> Tutup</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.dataSekolah} toggle={this.dataSekolah} className="modal-dialog-scrollable">
                    <ModalHeader toggle={this.dataSekolah}>Data Mahasiswa</ModalHeader>
                    <ModalBody>
                        <div className="table-responsive">
                            <Table bordered hover size="">
                                <tbody>
                                    <tr>
                                        <th scope="row">NISN</th>
                                        <td> 12213131</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NPSN</th>
                                        <td> 23131</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tahun Masuk</th>
                                        <td> 2012</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tahun Lulus</th>
                                        <td> 2015</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rerata UN</th>
                                        <td> 1212</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rerata Ijazah</th>
                                        <td> 2231</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Jurusan</th>
                                        <td> Pulogadung</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Nama Sekolah</th>
                                        <td> SMA 98</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Jenis Sekolah</th>
                                        <td> Negeri</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Akreditasi</th>
                                        <td> A++</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kecamatan</th>
                                        <td> Wakanda</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kabupaten/Kota</th>
                                        <td> Cipinang</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Provinsi</th>
                                        <td> DKI Jakarta</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.dataSekolah} className="btn-sm btn-danger"><i className="fas fa-times"></i> Tutup</Button>
                    </ModalFooter>
                </Modal>

            </Fragment>
        )
    }
}

export default GlobalConsumer(DataMahasiswa);
