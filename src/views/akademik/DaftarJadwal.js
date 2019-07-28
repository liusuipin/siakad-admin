import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';

export default class DaftarJadwal extends Component {
    render() {
        return (
            <Fragment>
                <TabPane tabId="2" className="mt-3">
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#" className="bg-light"><i className="fas fa-list-alt mr-2"></i>Hasil Penginputan Jadwal Perkuliahan Semester 110</ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <Button className="btn-info"><i className="far fa-file-excel mr-2"></i>Jadwal Dibuka Ekspor (Excel)</Button>
                                </Col>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <Button className="btn-info"><i className="far fa-file-excel mr-2"></i>Penggunaan Ruang Ekspor (Excel)</Button>
                                </Col>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <Button className="btn-info"><i className="far fa-file-pdf mr-2"></i>Jadwal Dibuka Cetak (PDF)</Button>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col sm="12">
                                    <div className="table-responsive">
                                        <Table bordered>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th>NIDN</th>
                                                    <th>Nama Dosen</th>
                                                    <th>Prodi</th>
                                                    <th>NIP</th>
                                                    <th>Jenis Kelamin</th>
                                                    <th className="text-center">Status</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>123213</td>
                                                    <td>Yuliatri SastraWidjaya</td>
                                                    <td>PTIK</td>
                                                    <td>312313</td>
                                                    <td>Perempuan</td>
                                                    <td className="text-center">Aktif</td>
                                                    <td>
                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-user-edit"></i> Edit</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </TabPane>
            </Fragment>
        )
    }
}
