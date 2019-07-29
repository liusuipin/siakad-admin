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
                                                    <th>Seksi/ Kelas</th>
                                                    <th>Prodi</th>
                                                    <th>Angkatan</th>
                                                    <th>Status Kelas</th>
                                                    <th>Status Pertemuan</th>
                                                    <th>Nama MK</th>
                                                    <th>Dosen</th>
                                                    <th>Waktu</th>
                                                    <th>Lokasi</th>
                                                    <th className="text-center">Daya Tampung/ Peserta</th>
                                                    <th className="th-width">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>1512600001</td>
                                                    <td>PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER/S1</td>
                                                    <td>2016</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td className="text-center">52351402-Praktek Keterampilan Mengajar</td>
                                                    <td>YULIATRI SASTRA WIJAYA </td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>6/0</td>
                                                    <td>
                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-pencil-alt"></i> Edit</Button>
                                                        <Button color="danger" className="btn-sm ml-2" onClick={this.modalData}><i className="fas fa-trash-alt"></i> Hapus</Button>
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
