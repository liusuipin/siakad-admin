import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, CardBody, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import loginimg from './loginimg.png'
import './Login.css';
import UnjLogo from '../../assets/img/unj.png'

export default class Login extends Component {

    render() {
        return (
            <Fragment>
                <div className="">
                    <Container className="my-auto">
                        <Row>
                            <div className="col-xl-10 col-lg-12 col-md-9 mt-6vh mx-auto">
                                <Card className="o-hidden border-0 shadow-lg my-4">
                                    <CardBody>
                                        <Row>
                                            <div className="col-lg-6 mt-2 br-1 d-none d-lg-block bg-unj-login">
                                                <div className="text-center">
                                                    <img src={UnjLogo} alt="logo" width="200" className="d-inline mb-3" />
                                                </div>
                                                <h2 className="text-center d-inline ml-2"><b>SIAKAD UNJ</b></h2>
                                                {/* <img src={loginimg} alt="illustrasi" className="img-thumbnail border-none" /> */}
                                                <p className="text-center text-secondary">Sistem Informasi Akademik Universitas Negeri Jakarta</p>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 p-4 my-auto">
                                                <div className="text-center d-lg-none d-xl-none mb-2">
                                                    <img src={UnjLogo} alt="logo" width="40" className="d-inline mb-3 " />
                                                    <h2 className="text-center d-inline ml-2"><b>SIAKAD UNJ</b></h2>
                                                </div>
                                                <h3 className="text-center d-none d-lg-block mb-4">Masuk</h3>
                                                <Form className="">
                                                    <FormGroup>
                                                        <Input type="text" name="" placeholder="NIDN" className="form-control" />
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input type="password" name="password" placeholder="Kata Sandi" />
                                                    </FormGroup>
                                                    <Alert color="warning">
                                                        Berapakah 2 + 6 ?
                                                    </Alert>
                                                    <FormGroup>
                                                        <Input type="text" name="number" placeholder="Jawaban Anda" />
                                                    </FormGroup>
                                                    <Link to='/'>
                                                        <Button className="col-sm-12 btn-success mt-2"><i className="fas fa-sign-in-alt fa-sm fa-fw mr-2"></i>Masuk</Button>
                                                    </Link>
                                                </Form>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <div className="text-center text-white mt-4">
                                    <p className="font-weight-bold">© 2019 UPT-TIK UNJ</p>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
