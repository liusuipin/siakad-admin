import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class MataKuliah extends Component {

    constructor() {
        super()
        this.state = {
            modalData: false,
            searchText: '',
            data: [
                {
                    kode_mk: "52350682 ",
                    nama_mk: "Desain Web Lanjut",
                    sks_mk: "2",
                    sks_tatap_muka: "2",
                    sks_praktikum: "0",
                    sks_lapangan: "0",
                    sks_simulasi: "0",
                    semester_kurikulum: "0/0",
                    status: "1",
                    edit: () => (
                        <Button
                            color="success"
                            className="btn-sm"
                            onClick={this.modalData}>
                            <i className="fas fa-user-edit"></i> Edit
                        </Button>
                    )
                },
                {
                    kode_mk: "52350682",
                    nama_mk: "Desain Web Lanjut",
                    sks_mk: "3",
                    sks_tatap_muka: "3",
                    sks_praktikum: "0",
                    sks_lapangan: "0",
                    sks_simulasi: "0",
                    semester_kurikulum: "0/0",
                    status: "1",
                    edit: () => (
                        <Button
                            color="success"
                            className="btn-sm"
                            onClick={this.modalData}>
                            <i className="fas fa-user-edit"></i> Edit
                        </Button>
                    )
                },
                {
                    kode_mk: "15026032",
                    nama_mk: " 	Kewirausahaan",
                    sks_mk: "2",
                    sks_tatap_muka: "2",
                    sks_praktikum: "0",
                    sks_lapangan: "0",
                    sks_simulasi: "0",
                    semester_kurikulum: "0/0",
                    status: "1",
                    edit: () => (
                        <Button
                            color="success"
                            className="btn-sm"
                            onClick={this.modalData}>
                            <i className="fas fa-user-edit"></i> Edit
                        </Button>
                    )
                }
            ]
        }
    }

    modalData = () => {
        this.setState({
            modalData: !this.state.modalData
        })
    }

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value.toLowerCase()
        })
    }

    render() {
        const { searchText, data } = this.state;
        const filteredElements = data.filter(e => (
            e.kode_mk.toLowerCase().includes(searchText) ||
            e.nama_mk.toLowerCase().includes(searchText) ||
            e.sks_mk.toLowerCase().includes(searchText) ||
            e.sks_tatap_muka.toLowerCase().includes(searchText) ||
            e.sks_praktikum.toLowerCase().includes(searchText) ||
            e.sks_lapangan.toLowerCase().includes(searchText) ||
            e.sks_simulasi.toLowerCase().includes(searchText) ||
            e.semester_kurikulum.toLowerCase().includes(searchText) ||
            e.status.toLowerCase().includes(searchText)
        ))
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
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-database mr-2"></i>Database Master</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Database Mata Kuliah</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Database Mata Kuliah Pendidikan Teknik Informatika dan Komputer</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Col md={{ size: "6", offset: "6" }} sm="12" className="mb-3">
                                            <Input type="text" name="search" value={searchText} placeholder="Pencarian" onChange={this.handleSearch} />
                                        </Col>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Kode MK</th>
                                                        <th>Nama MK</th>
                                                        <th>SKS MK</th>
                                                        <th>SKS Tatap Muka</th>
                                                        <th>SKS Praktikum</th>
                                                        <th>SKS Lapangan</th>
                                                        <th>SKS Simulasi</th>
                                                        <th>Semeser/Kurikulum</th>
                                                        <th className="text-center">Status</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        filteredElements.map((isi, index) => (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{isi.kode_mk}</td>
                                                                <td>{isi.nama_mk}</td>
                                                                <td>{isi.sks_mk}</td>
                                                                <td>{isi.sks_tatap_muka}</td>
                                                                <td>{isi.sks_praktikum}</td>
                                                                <td>{isi.sks_lapangan}</td>
                                                                <td>{isi.sks_simulasi}</td>
                                                                <td>{isi.semester_kurikulum}</td>
                                                                <td className="text-center">{isi.status}</td>
                                                                <td>
                                                                    <Col sm="6" className="pt-3 mt-auto">
                                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-user-edit"></i> Edit</Button>
                                                                    </Col>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                    {/* <tr>
                                                        <th scope="row">2</th>
                                                        <td>0024087402</td>
                                                        <td>Hamidillah Ajie</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>197408242005011001</td>
                                                        <td>Laki-Laki</td>
                                                        <td className="text-center">Aktif</td>
                                                        <td>
                                                            <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-user-edit"></i> Edit</Button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>0025037206</td>
                                                        <td>Widodo</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>197203252005011002</td>
                                                        <td>Laki-Laki</td>
                                                        <td className="text-center">Aktif</td>
                                                        <td>
                                                            <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-user-edit"></i> Edit</Button>
                                                        </td>
                                                    </tr> */}
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
                    <ModalHeader toggle={this.modalData}>Edit Mata Kuliah</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Kode Mata Kuliah</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="52350682" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Nama Mata Kuliah</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Desain Web Lanjut" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Nama Mata Kuliah (Inggris)</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Advanced Web Design" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Jenis Mata Kuliah</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Pilih Jenis MK</option>
                                        <option>Wajib</option>
                                        <option>Pilihan</option>
                                        <option>Wajib Peminatan</option>
                                        <option>Pilihan Peminatan</option>
                                        <option>TA/SKRIPSI/THESIS</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">SKS Tatap Muka</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">SKS Praktek</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">SKS Praktek Lapangan</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">SKS Simulasi</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">SAP</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Tidak Ada</option>
                                        <option>Ada</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Silabus</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Tidak Ada</option>
                                        <option>Ada</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Bahan Ajar</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Tidak Ada</option>
                                        <option>Ada</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Acara Praka Diktat</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Tidak Ada</option>
                                        <option>Ada</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Semester</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Kurikulum</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="0" />
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <Label>Kepemilikan MK</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Umum
            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Khusus Prodi
            </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Program Studi</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>S1 Pendidikan Teknik Informatika dan Komputer</option>
                                        <option>S1 Pendidikan Bahasa Perancis</option>
                                        <option>S1 Manajemen</option>
                                        <option>S1 Pendidikan Jasmani</option>
                                        <option>S1 Pendidikan Psikologi</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Jenjang</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Strata 1</option>
                                        <option>Strata 2</option>
                                        <option>Strata 3</option>
                                        <option>Diploma 3</option>
                                        <option>Profesi</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Status MK</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Tatap Muka</option>
                                        <option>Tugas Akhir (Non Tatap Muka)</option>
                                        <option>Seminar (Non Tatap Muka)</option>
                                        <option>Sekolah (Non Tatap Muka)</option>
                                    </Input>
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

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(MataKuliah);

