import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import DaftarPenjadwalan from '../akademik/Daftar-Penjadwalan.xls'
import DaftarRuangan from '../akademik/Daftar-Ruangan.xls'
import PenjadwalanProdi from '../akademik/Penjadwalan-Prodi.pdf'
import Swal from 'sweetalert2'
export default class DaftarJadwal extends Component {

    // constructor(){
    //     super()
    //     this.state={

    //     }
    // }

    delAlert = () => {
        return Swal.fire({
            title: 'Anda yakin ingin menghapus data ini?',
            text: "Anda tidak akan dapat mengembalikannya!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus data!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Terhapus!',
                    'Data berhasil dihapus',
                    'success'
                )
            }
        })
    }

    render() {
        return (
            <Fragment>
                <TabPane tabId="2" className="mt-3">
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#" className="bg-light"><i className="fas fa-list-alt mr-2"></i>Hasil Penginputan Jadwal Perkuliahan Semester 110</ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <a href={DaftarPenjadwalan} download><Button className="btn-info"><i className="far fa-file-excel mr-2"></i>Daftar Penjadwalan</Button></a>
                                </Col>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <a href={DaftarRuangan} download><Button className="btn-info"><i className="far fa-file-excel mr-2"></i>Daftar Ruangan</Button></a>
                                </Col>
                                <Col sm="4" className="mx-auto text-center mt-2">
                                    <a href={PenjadwalanProdi} download><Button className="btn-info"><i className="far fa-file-pdf mr-2"></i>Penjadwalan Prodi</Button></a>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col sm="12">
                                    <div className="table-responsive">
                                        <Table bordered>
                                            <thead className="thead-light">
                                                <tr>

                                                    <th>No</th>
                                                    <th>Seksi/Kelas</th>
                                                    <th>Kode MK</th>
                                                    <th>Nama MK</th>
                                                    <th>Angkatan</th>
                                                    <th>Status Kelas</th>
                                                    <th>Status Pertemuan</th>
                                                    <th>Dosen</th>
                                                    <th className="text-center">Waktu dan Lokasi</th>
                                                    <th className="text-center">Peserta/Daya Tampung</th>
                                                    <th className="th-width">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>1512600001</td>
                                                    <td className="text-center">52351402</td>
                                                    <td className="text-center">Praktek Keterampilan Mengajar</td>
                                                    <td>2016</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>Yuliatri Sastrawijaya</td>
                                                    <td>0</td>

                                                    <td>0/6</td>
                                                    <td>
                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-pencil-alt"></i> Edit</Button>
                                                        <Button color="danger" className="btn-sm ml-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>1512600002</td>
                                                    <td className="text-center">52351402</td>
                                                    <td className="text-center">Praktek Keterampilan Mengajar</td>
                                                    <td>All</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>Hamidillah Ajie</td>
                                                    <td>0</td>

                                                    <td>0/6</td>
                                                    <td>
                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-pencil-alt"></i> Edit</Button>
                                                        <Button color="danger" className="btn-sm ml-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>1512600003</td>
                                                    <td className="text-center">52351402</td>
                                                    <td className="text-center">Praktek Keterampilan Mengajar</td>
                                                    <td>2016</td>
                                                    <td>2</td>
                                                    <td>0</td>
                                                    <td>Diat Nurhidayat</td>
                                                    <td>0</td>

                                                    <td>0/6</td>
                                                    <td>
                                                        <Button color="success" className="btn-sm" onClick={this.modalData}><i className="fas fa-pencil-alt"></i> Edit</Button>
                                                        <Button color="danger" className="btn-sm ml-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
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
