import React, { Component, Fragment } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import Sidebar from '../../components/sidebar/Sidebar.js';
// import Footer from '../../components/footer/Footer.js';
import { Row, Col, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { GlobalConsumer } from '../../context/context.js';
import Swal from 'sweetalert2'

class Biodata extends Component {
    update = () => {
        return Swal.fire(
            'Sukses!',
            `Biodata berhasil di update !`,
            'success'
        )
    }
    render() {
        return (
            <Fragment>
                <Navigation />
                <div className="wrapper">
                    <Sidebar />
                    <div className={this.props.state.sidebar ? "wrapper-content-close wrapper-content-blur" : "wrapper-content-open"}>
                        <div className={this.props.state.sidebar ? "container" : "container-fluid"}>
                            <Row className="mt-2 mb-5">
                                <Col md="12">
                                    <Breadcrumb className="breadcrumb-me">
                                        {/* <BreadcrumbItem active>Beranda</BreadcrumbItem> */}
                                        <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>Data Program Studi</BreadcrumbItem>
                                    </Breadcrumb>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center">Data Program Studi</h4>
                                        <Form className="mt-4">

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>Nama Program Studi</Label>
                                                <Col sm={7}>
                                                    <Input type="text" name="namaDosen" id="namaDosen" defaultValue="PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER" className="" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>Jenjang Pendidikan</Label>
                                                <Col sm={7}>
                                                    <Input type="text" name="namaDosen" id="namaDosen" defaultValue="S1" className="" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>Fakultas</Label>
                                                <Col sm={7}>
                                                <Input type="select" name="select" id="exampleSelect" className="">
                                                        <option defaultValue>Fakultas Teknik</option>
                                                        <option>Fakultas Ilmu Sosial</option>
                                                        <option>Fakultas Bahasa & Seni</option>
                                                        <option>Fakultas Matematika & Pengetahuan Alam</option>
                                                        <option>Fakultas Ilmu Keolahragaan</option>
                                                        <option>Fakultas Ilmu Pendidikan</option>
                                                    </Input>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>Koord. Program Studi</Label>
                                                <Col sm={7}>
                                                    <Input type="select" name="select" id="exampleSelect" className="">
                                                        <option defaultValue>Yuliatri Sastra Widjaya</option>
                                                        <option>Bambang Adhi</option>
                                                        <option>Prasetyo</option>
                                                    </Input>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>NIDN</Label>
                                                <Col sm={7}>
                                                    <Input type="number" name="namaDosen" id="namaDosen" defaultValue="092309380" className="" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>NIP</Label>
                                                <Col sm={7}>
                                                    <Input type="number" name="namaDosen" id="namaDosen" defaultValue="34242" className="" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>SK Pengangkatan Koord. Prodi</Label>
                                                <Col sm={7}>
                                                    <Input type="text" name="namaDosen" id="namaDosen" defaultValue="12313" className="" />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>Nama Admin Prodi</Label>
                                                <Col sm={7}>
                                                    <Input type="text" name="namaDosen" id="namaDosen" defaultValue="NAFISAH" className="" />
                                                </Col>
                                            </FormGroup>





                                            <FormGroup row>
                                                <Label for="exampleEmail" sm={5}>No. HP Admin Prodi</Label>
                                                <Col sm={7}>
                                                    <Input type="number" name="namaDosen" id="namaDosen" defaultValue="08199898393" className="" />
                                                    <Button color="primary" type="button" className="mt-4 btn-sm" onClick={this.update}><i className="fas fa-save"></i> Simpan</Button>
                                                    <Button color="danger" type="reset" className="mt-4 ml-2 btn-sm"><i className="fas fa-undo"></i> Reset</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
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
}

export default GlobalConsumer(Biodata);
