import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class Mahasiswa extends Component {

    constructor() {
        super()
        this.state = {
            modalData: false,
            searchText: '',
            data: [
                {
                    nim: "5235150233",
                    nama_mahasiswa: "Azizah Khoiro Nisah",
                    jalur_masuk: "SNMPTN",
                    status_mahasiswa: "Aktif",
                    status_biodata: "Sudah Lengkap",

                },
                {
                    nim: "5235151078",
                    nama_mahasiswa: "Nia Septiani",
                    jalur_masuk: "SNMPTN",
                    status_mahasiswa: "Aktif",
                    status_biodata: "Sudah Lengkap",

                },
                {
                    nim: "5235150646",
                    nama_mahasiswa: "Cindy Desmayanti",
                    jalur_masuk: "SNMPTN",
                    status_mahasiswa: "Aktif",
                    status_biodata: "Sudah Lengkap",

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
            e.nim.toLowerCase().includes(searchText) ||
            e.nama_mahasiswa.toLowerCase().includes(searchText) ||
            e.jalur_masuk.toLowerCase().includes(searchText) ||
            e.status_mahasiswa.toLowerCase().includes(searchText) ||
            e.status_biodata.toLowerCase().includes(searchText)
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
                                            <BreadcrumbItem active>Database Mahasiswa</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Database Mahasiswa Pendidikan Teknik Informatika dan Komputer</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Col md={{ size: "6", offset: "6" }} sm="12">
                                            <Input type="text" name="search" value={searchText} placeholder="Pencarian" onChange={this.handleSearch} />
                                        </Col>
                                        <div className="table-responsive">
                                            <Table bordered>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>NIM</th>
                                                        <th>Nama Mahasiswa</th>
                                                        <th>Jalur Masuk</th>
                                                        <th>Status MHS</th>
                                                        <th>Status Biodata</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        filteredElements.map((isi, index) => (
                                                            <tr>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{isi.nim}</td>
                                                                <td>{isi.nama_mahasiswa}</td>
                                                                <td>{isi.jalur_masuk}</td>
                                                                <td>{isi.status_mahasiswa}</td>
                                                                <td>{isi.status_biodata}</td>

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



            </Fragment>
        )
    }

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(Mahasiswa);

