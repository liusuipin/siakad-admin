import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class KrsKosong extends Component {

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
                                            <BreadcrumbItem active>KRS Kosong</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">KRS Kosong</h4>
                                        {/* <DataDosen data={this.dataSet} /> */}
                                        <Row>
                                            <Col sm="12">
                                                <Form className="mb-4">
                                                    <FormGroup row>
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
                                                        <Col lg="3" md="12" className="pt-3">
                                                            <Label for="exampleSelect">Status :</Label>
                                                            <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                                <option>Pilih Status</option>
                                                                <option>Bayar</option>
                                                                <option>Belum Bayar</option>
                                                                <option>Cuti</option>
                                                                <option>Mangkir</option>
                                                                <option>Lainnya</option>
                                                            </Input>
                                                        </Col>
                                                        <Col sm="3" className="pt-3 mt-auto">
                                                            <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Proses</Button>
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
                                                        <th>Status Mahasiswa</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>5235150233</td>
                                                        <td>Azizah Khoiro Nisah</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>Bayar</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>5235151078</td>
                                                        <td>Nia Septiani</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>Bayar</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>5235150646</td>
                                                        <td>Cindy Desmayanti</td>
                                                        <td>SNMPTN</td>
                                                        <td>Pendidikan Teknik Informatika dan Komputer</td>
                                                        <td>Bayar</td>
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

            
            </Fragment>
        )
    }

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(KrsKosong);

