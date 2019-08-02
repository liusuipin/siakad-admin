import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';
import Swal from 'sweetalert2'
class Dosen extends Component {
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
    constructor() {
        super()
        this.state = {
            modalData: false,
            searchText: '',
            data: [
                {
                    kode_kelas: "0006075806",
                    dosen_pengampu: "Yuliatri Sastrawjaya",
                    prodi: "http://sidos.unj.ac.id/",
                    nip_dosen: "195807061983032002",
                    jenis_kelamin: "Perempuan",
                    status: "Aktif",
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
                    kode_kelas: "0024087402",
                    dosen_pengampu: "Hamidillah Ajie",
                    prodi: "http://sidos.unj.ac.id/",
                    nip_dosen: "197408242005011001",
                    jenis_kelamin: "Laki-Laki",
                    status: "Aktif",
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
                    kode_kelas: "0025037206",
                    dosen_pengampu: "Widodo",
                    prodi: "http://sidos.unj.ac.id/",
                    nip_dosen: "197203252005011002",
                    jenis_kelamin: "Laki-Laki",
                    status: "Aktif",
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
            e.kode_kelas.toLowerCase().includes(searchText) ||
            e.dosen_pengampu.toLowerCase().includes(searchText) ||
            e.prodi.toLowerCase().includes(searchText) ||
            e.nip_dosen.toLowerCase().includes(searchText) ||
            e.jenis_kelamin.toLowerCase().includes(searchText) ||
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
                                            <BreadcrumbItem active>Database Dosen</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Database Dosen Pendidikan Teknik Informatika dan Komputer</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Col md={{ size: "6", offset: "6" }} sm="12" className="mb-3">
                                            <Input type="text" name="search" value={searchText} placeholder="Pencarian" onChange={this.handleSearch} />
                                        </Col>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>NIDN</th>
                                                        <th>Nama Dosen</th>
                                                        <th>Program Studi</th>
                                                        <th>NIP</th>
                                                        <th>Jenis Kelamin</th>
                                                        <th className="text-center">Status</th>
                                                        <th>Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        filteredElements.map((isi, index) => (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{isi.kode_kelas}</td>
                                                                <td>{isi.dosen_pengampu}</td>
                                                                <td><a href={isi.prodi} target="_blank">{isi.prodi}</a></td>
                                                                <td>{isi.nip_dosen}</td>
                                                                <td>{isi.jenis_kelamin}</td>
                                                                <td className="text-center">{isi.status}</td>
                                                                <td>
                                                                    <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-user-edit"></i> Edit</Button>
                                                                    <Button color="danger" className="btn-sm ml-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
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
                    <ModalHeader toggle={this.modalData}>Edit Data Dosen</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">NIDN</Label>
                                    <Input type="text" name="email" id="exampleEmail" placeholder="0006075806" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Nama</Label>
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
                                    <Label for="examplePassword">NIP</Label>
                                    <Input type="text" name="password" id="examplePassword" defaultValue="195807061983032002" />
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
                                    <Input type="text" name="password" id="examplePassword" defaultValue="Jakarta" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Tempat Lahir</Label>
                                    <Input type="date" name="password" id="examplePassword" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Keaktifan Dosen</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Aktif</option>
                                        <option>Meninggal</option>
                                        <option>Pensiun</option>
                                        <option>Lainnya</option>
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

export default GlobalConsumer(Dosen);

