import React, { Component, Fragment } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation.js';
import Sidebar from '../../components/sidebar/Sidebar.js';
// import Footer from '../../components/footer/Footer.js';
import { GlobalConsumer } from '../../context/context.js';
import Swal from 'sweetalert2';


class UbahPass extends Component {
    update = () => {
        return Swal.fire(
            'Sukses!',
            `Kata Sandi <b>15126</b> berhasil di ubah !`,
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
                                        <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>Ubah Kata Sandi</BreadcrumbItem>
                                    </Breadcrumb>
                                    <h4 className="text-center pb-2">Ubah Kata Sandi</h4>
                                    <Col md="6" className="mx-auto">
                                        <Form>
                                            <FormGroup>
                                                <Label for="exampleEmail">Kata Sandi Lama</Label>
                                                <Input type="text" name="email" id="exampleEmail" className="" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Kata Sandi Baru</Label>
                                                <Input type="text" name="password" id="examplePassword" className="" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="examplePassword">Konfirmasi Kata Sandi Baru</Label>
                                                <Input type="text" name="password" id="examplePassword" className="" />
                                            </FormGroup>
                                            <Button type="button" color="primary" className="btn-sm" onClick={this.update}><i className="fas fa-save"></i> Simpan</Button>
                                            <Button type="reset" color="danger" className="ml-2 btn-sm"><i className="fas fa-undo"></i> Reset</Button>
                                        </Form>
                                    </Col>
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

export default GlobalConsumer(UbahPass);