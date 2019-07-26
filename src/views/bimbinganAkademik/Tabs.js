import React, { Component, Fragment } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Form, FormGroup, Input, Label, Button, Table, FormText } from 'reactstrap'
import classnames from 'classnames';

export default class Tabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '3',
            acc: false
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
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
    render() {
        return (
            <Fragment>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            DHS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            KHS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            KRS
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12" className="mt-3">
                                <h5 className="text-center">Daftar Hasil Studi</h5>

                                <Row className="mb-3 mt-2">
                                    <Col sm={3} className="">
                                        <h6 className="text-dark">Total SKS : 24</h6>
                                    </Col>
                                    <Col sm={5} className="">
                                        <h6 className="text-dark">IPS : 3.00</h6>
                                    </Col>
                                </Row>

                                <div className="table-responsive">
                                    <Table bordered hover size="">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-center">No</th>
                                                <th className="text-center">Kode Seksi</th>
                                                <th className="text-center">Mata Kuliah</th>
                                                <th className="text-center">SKS</th>
                                                <th className="text-center">Bobot</th>
                                                <th className="text-center">Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-center">1</th>
                                                <td>12313</td>
                                                <td>Pemograman Web</td>
                                                <td className="text-center">3</td>
                                                <td className="text-center">12</td>
                                                <td className="text-center">A</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>

                            <Col sm="12" className="mt-3">
                                <h5 className="text-center">Kartu Hasil Studi</h5>
                                <Form className="mb-3">
                                    <FormGroup row>
                                        <Col lg="5" sm="" md="12" className="pt-3">
                                            <Label for="exampleSelect">Pilih Semester: </Label>
                                            <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                <option>110 2019/2020</option>
                                                <option>109 2018/2019</option>
                                                <option>108 2018/2019</option>
                                                <option>107 2017/2018</option>
                                            </Input>
                                        </Col>
                                        <Col sm="3" className="pt-3 mt-auto">
                                            <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Filter</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>

                                <Row className="mb-3 mt-2">
                                    <Col sm={4}>
                                        <h6 className="text-dark">Kartu Hasil Studi Semester 110</h6>
                                    </Col>
                                    <Col sm={3} className="">
                                        <h6 className="text-dark">Total SKS : 24</h6>
                                    </Col>
                                    <Col sm={5} className="">
                                        <h6 className="text-dark">IPS : 3.00</h6>
                                    </Col>
                                </Row>

                                <div className="table-responsive">
                                    <Table bordered hover size="">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-center">No</th>
                                                <th className="text-center">Kode Seksi</th>
                                                <th className="text-center">Mata Kuliah</th>
                                                <th className="text-center">SKS</th>
                                                <th className="text-center">Bobot</th>
                                                <th className="text-center">Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-center">1</th>
                                                <td>12313</td>
                                                <td>Pemograman Web</td>
                                                <td className="text-center">3</td>
                                                <td className="text-center">12</td>
                                                <td className="text-center">A</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12" className="border-right mt-3">
                                <h5 className="text-center">Kartu Rencana Studi Semester</h5>
                                <Row className="">
                                    <Col sm={12}>
                                        <h6 className="text-dark">Kartu Rencana Studi Semester 110</h6>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <FormText color="muted">
                                            <span><b>Keterangan: </b> <br />
                                                1. Klik tombol (<i className="fas fa-check text-success"></i>) jika menyetujui matakuliah yang akan diambil mahasiswa bimbingan akademik <br />
                                                2. Klik tombol (<i className="fas fa-times text-danger"></i>) jika tidak menyetujui matakuliah yang akan diambil mahasiswa bimbingan akademik<br />
                                                3. Status setuju/tidak setuju akan tersimpan otomatis ketika tombol diklik
                                        </span>
                                        </FormText>
                                    </Col>
                                </Row>

                                <div className="table-responsive">
                                    <Table bordered hover size="">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-center">No</th>
                                                <th className="text-center">Kode Seksi</th>
                                                <th className="text-center">Mata Kuliah</th>
                                                <th className="text-center">SKS</th>
                                                <th className="text-center">Nama Dosen</th>
                                                <th className="text-center th-width140">Aksi</th>
                                                <th className="text-center">STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-center">1</th>
                                                <td>123131</td>
                                                <td>Pemograman Web</td>
                                                <td className="text-center">3</td>
                                                <td className="text-center">Hamidillah Ajie</td>
                                                <td className="text-center ">
                                                    <Button className="btn-sm btn-success" onClick={this.acc}><i className="fas fa-check"></i></Button>
                                                    <Button className="btn-sm btn-danger ml-2" onClick={this.unAcc}><i className="fas fa-times pl-1 pr-1"></i></Button>
                                                </td>
                                                <td className="text-center"><b> {this.state.acc ? 'SETUJU' : 'TIDAK SETUJU'} </b></td>
                                            </tr>
                                            <tr>
                                                <td colSpan={7} className="text-center">Total SKS : <b>24</b></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Fragment>
        )
    }
}
