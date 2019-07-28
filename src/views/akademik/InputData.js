import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class InputData extends Component {
    render() {
        return (
            <Fragment>
                <TabPane tabId="1" className="mt-3">
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#" className="bg-light"><i className="fas fa-check-circle mr-2"></i>Pengisian Jadwal Perkuliahan Semester 110</ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col sm="8">
                                    <Form>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Semester</Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="text" name="email" id="exampleEmail" defaultValue="110" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="examplePassword" sm={2}>Seksi/Kelas<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="text" name="password" id="examplePassword" placeholder="password placeholder" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleSelect" sm={2}>Status Perkuliahan<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="bg-white my-auto">
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />{' '}
                                                        Program Studi
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />{' '}
                                                        Fakultas
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />{' '}
                                                        Universitas
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleSelect" sm={2}>Status Pertemuan<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="bg-white my-auto">
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />{' '}
                                                        Tatap Muka
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio" name="radio2" />{' '}
                                                        Tidak Ada Tatap Muka
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Daya Tampung<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="text" name="email" id="exampleEmail" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Angkatan Kelas<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Mata Kuliah<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={12}><b>Pengajar</b></Label>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Pengajar I<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Pengajar II</Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                            <FormGroup check row>
                                                <Col sm={{ size: 10, offset: 2 }}>
                                                    <Button className="btn-success">Simpan</Button>
                                                    <Button className="ml-2 btn-danger">Reset</Button>
                                                </Col>
                                            </FormGroup>
                                    </Form>
                                </Col>
                                <Col sm="4">
                                    <h5>Keterangan</h5>
                                    <ol>
                                        <li><span className="text-danger">*</span> (1 tanda bintang merah) wajib terisi</li>
                                        <li><span className="text-danger">**</span> (2 tanda bintang merah) wajib terisi bila ada tatap muka kelas</li>
                                        <li>Semester secara otomatis akan terbuka sesuai jadwal.</li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ol>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </TabPane>
            </Fragment>
        )
    }
}
