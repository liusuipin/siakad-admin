import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import UnjLogo from '../../assets/img/unj.png'
import './Login.css';
import Swal from 'sweetalert2'

export default class Loginn extends Component {

    constructor() {
        super()
        this.state = {
            nidn: '',
            password: '',
            jawaban: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    doLogin = (e) => {
        e.preventDefault()
        const { nidn, password, jawaban } = this.state
        if (nidn === '12345' && password === '12345' && jawaban === '7') {
            this.props.history.push('/')
        } else if (nidn === '' && password === '' && jawaban === '') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'Form tidak boleh kosong!'
            })
        } else if (nidn === '12345' && password !== '12345') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'Kata sandi salah!'
            })
        } else if (nidn !== '12345' && password === '12345') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'NIDN salah!'
            })
        } else if (nidn === '') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'NIDN harus diisi!'
            })
        } else if (password === '') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'Kata sandi harus diisi!'
            })
        } else if (jawaban === '') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'Jawaban harus diisi!'
            })
        } else if (jawaban !== '8') {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'Jawaban salah!'
            })
        } else {
            return Swal.fire({
                type: 'error',
                title: 'Gagal Masuk!',
                text: 'NIDN dan Kata sandi tidak ditemukan!'
            })
        }
    }
    render() {
        return (
            <Fragment>
                <Row className="mt-5 mx-auto">
                    <Col sm="8" className="mx-auto o-hidden border-0 shadow-lg bg-unj-login mt-5">
                        <Row>
                            <Col sm="6" className="text-white">
                                <div className="mt-5 d-none d-lg-block text-center p-3 mt-5 left-login">
                                    <div className="text-center mb-4 mt-3">
                                        <img src={UnjLogo} alt="logo" width="150" />
                                    </div>
                                    <h3 className="text-center d-inline"><b>SIAKAD UNJ</b></h3>
                                    <p className="">Sistem Informasi Akademik Universitas Negeri Jakarta</p>
                                    <p className="font-weight-bold">© 2019 UPT-TIK UNJ</p>
                                </div>
                            </Col>
                            <Col sm="6" className="bg-white">
                                <div className="p-5">
                                    <div className="text-center d-lg-none d-xl-none mb-2 mt-4">
                                        <img src={UnjLogo} alt="logo" width="40" className="d-inline mb-3 " />
                                        <h2 className="text-center d-inline"><b>SIAKAD UNJ</b></h2>
                                    </div>
                                    <h3 className="text-center d-none d-lg-block mb-4">Silahkan Masuk</h3>
                                    <Form className="">
                                        <FormGroup>
                                            <Input type="text" onChange={this.onChange} value={this.state.nidn} name="nidn" placeholder="Kode Program Studi" className="form-control" required />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" onChange={this.onChange} value={this.state.password} name="password" placeholder="Kata Sandi" required />
                                        </FormGroup>
                                        <Alert color="warning">
                                            Berapakah 3 + 4 ?
                                                        </Alert>
                                        <FormGroup>
                                            <Input type="text" onChange={this.onChange} value={this.state.jawaban} name="jawaban" placeholder="Jawaban Anda" required />
                                        </FormGroup>

                                        <Button className="col-sm-12 btn-unj mt-2" type="submit" onClick={this.doLogin}><i className="fas fa-sign-in-alt fa-sm fa-fw mr-2"></i>Masuk</Button>

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col sm="12">
                        <div className="text-center mt-5">
                            <p className="font-weight-bold">© 2019 UPT-TIK UNJ</p>
                        </div>
                    </Col> */}
                </Row>
            </Fragment>
        )
    }
}
