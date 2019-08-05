import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, UncontrolledCollapse, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';
import KRS from '../akademik/output-krs.pdf'
import KHS from '../akademik/output-khs.pdf'
import DHS from '../akademik/output-dhs.pdf'
class StudiMahasiswa extends Component {

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
                                            <BreadcrumbItem active>Studi Mahasiswa</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Studi Mahasiswa</h4>
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
                                                            <Input type="text" name="select" id="exampleSelect" className="form-control-sm" placeholder="Ketik NIM / Nama Mahasiswa" />
                                                        </Col>
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            <Button id="toggler" color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
                                                        </Col>
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <UncontrolledCollapse toggler="#toggler">
                                            <div className="table-responsive">
                                                <Table bordered>
                                                    <thead className="thead-light">

                                                        <tr>
                                                            <th className="text-center">No.</th>
                                                            <th className="text-center">NIM Mahasiswa</th>
                                                            <th className="text-center">Nama Mahasiswa</th>
                                                            <th className="text-center">Jalur Masuk</th>
                                                            <th className="text-center">Program Studi</th>
                                                            <th className="th-width250">Aksi</th>
                                                        </tr>

                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan={6}>Ditemukan sebanyak 3</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>5235150233</td>
                                                            <td>Azizah Khoiro Nisah</td>
                                                            <td>SNMPTN</td>
                                                            <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                            <td className="text-center">
                                                                <a href={KRS} download><Button color="info" className="btn-sm mr-2" onClick={this.modalData}><i className="fas fa-book"></i> KRS</Button></a>
                                                                <a href={KHS} download><Button color="info" className="btn-sm" onClick={this.modalData}><i className="fas fa-book"></i> KHS</Button></a>
                                                                <a href={DHS} download><Button color="info" className="btn-sm ml-2" onClick={this.modalData}><i className="fas fa-book"></i> DHS</Button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>5235151078</td>
                                                            <td>Nia Septiani</td>
                                                            <td>SNMPTN</td>
                                                            <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                            <td className="text-center">
                                                                <a href={KRS} download><Button color="info" className="btn-sm mr-2" onClick={this.modalData}><i className="fas fa-book"></i> KRS</Button></a>
                                                                <a href={KHS} download><Button color="info" className="btn-sm" onClick={this.modalData}><i className="fas fa-book"></i> KHS</Button></a>
                                                                <a href={DHS} download><Button color="info" className="btn-sm ml-2" onClick={this.modalData}><i className="fas fa-book"></i> DHS</Button></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>5235150646</td>
                                                            <td>Cindy Desmayanti</td>
                                                            <td>SNMPTN</td>
                                                            <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                            <td className="text-center">
                                                                <a href={KRS} download><Button color="info" className="btn-sm mr-2" onClick={this.modalData}><i className="fas fa-book"></i> KRS</Button></a>
                                                                <a href={KHS} download><Button color="info" className="btn-sm" onClick={this.modalData}><i className="fas fa-book"></i> KHS</Button></a>
                                                                <a href={DHS} download><Button color="info" className="btn-sm ml-2" onClick={this.modalData}><i className="fas fa-book"></i> DHS</Button></a>
                                                            </td>
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



            </Fragment>
        )
    }

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(StudiMahasiswa);

