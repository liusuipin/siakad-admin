import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, NavLink, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import DaftarPenjadwalan from '../akademik/Daftar-Penjadwalan.xls'
import DaftarRuangan from '../akademik/Daftar-Ruangan.xls'
import PenjadwalanProdi from '../akademik/Penjadwalan-Prodi.pdf'
import Swal from 'sweetalert2';
import classnames from 'classnames';
export default class DaftarJadwal extends Component {

    constructor() {
        super()
        this.state = {
            modalData: false,
            searchText: '',
            data: [
                {
                    kode_kelas: "1512600001",
                    kode_mk: "52351402",
                    nama_mk: "Prakte Keterampilan Mengajar",
                    angkatan: "2016",
                    status_kelas: "2",
                    status_pertemuan: "0",
                    dosen_pengampu: "Yuliatri Sastrawjaya",
                    waktu_lokasi: "0",
                    daya_tampung: "0/6"
                },
                {
                    kode_kelas: "1512600002",
                    kode_mk: "52351402",
                    nama_mk: "Prakte Keterampilan Mengajar",
                    angkatan: "All",
                    status_kelas: "2",
                    status_pertemuan: "0",
                    dosen_pengampu: "Hamidillah Ajie",
                    waktu_lokasi: "0",
                    daya_tampung: "0/6"
                },
                {
                    kode_kelas: "1512600003",
                    kode_mk: "52351402",
                    nama_mk: "Prakte Keterampilan Mengajar",
                    angkatan: "2016",
                    status_kelas: "2",
                    status_pertemuan: "0",
                    dosen_pengampu: "Diat Nurhidayat",
                    waktu_lokasi: "0",
                    daya_tampung: "0/6"
                }
            ]
        }
    }

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

    handleSearch = (e) => {
        this.setState({
            searchText: e.target.value.toLowerCase()
        })
    }

    render() {
        let num = 1;
        const { searchText, data } = this.state;
        const filteredElements = data.filter(e => (
            e.kode_kelas.toLowerCase().includes(searchText) ||
            e.kode_mk.toLowerCase().includes(searchText) ||
            e.nama_mk.toLowerCase().includes(searchText) ||
            e.angkatan.toLowerCase().includes(searchText) ||
            e.status_kelas.toLowerCase().includes(searchText) ||
            e.status_pertemuan.toLowerCase().includes(searchText) ||
            e.dosen_pengampu.toLowerCase().includes(searchText) ||
            e.waktu_lokasi.toLowerCase().includes(searchText) ||
            e.daya_tampung.toLowerCase().includes(searchText)
        ))

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
                            <hr />
                            <Row>
                                <Col md={{ size: "6", offset: "6" }} sm="12" className=" mt-3">
                                    <Input type="text" name="search" placeholder="Pencarian" onChange={this.handleSearch} />
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
                                                    <th className="th-width250">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    filteredElements.map((isi, index) => (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{isi.kode_kelas}</td>
                                                            <td>{isi.kode_mk}</td>
                                                            <td>{isi.nama_mk}</td>
                                                            <td>{isi.angkatan}</td>
                                                            <td>{isi.status_kelas}</td>
                                                            <td>{isi.status_pertemuan}</td>
                                                            <td>{isi.dosen_pengampu}</td>
                                                            <td>{isi.waktu_lokasi}</td>
                                                            <td>{isi.daya_tampung}</td>
                                                            <td>
                                                                <Button color="success" className={classnames({ active: this.props.activeTab === '1' })} onClick={() => { this.props.toggle('1'); }}><i className="fas fa-pencil-alt"></i> Edit</Button>

                                                                <Button color="danger" className="ml-2" onClick={this.delAlert}><i className="fas fa-trash-alt"></i> Hapus</Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }


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
