import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Swal from 'sweetalert2'
export default class InputData extends Component {
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
                                                <Input type="text" name="password" id="examplePassword" placeholder="Seksi" />
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
                                                <Input type="text" name="email" id="exampleEmail" placeholder="maximal 40 mahasiswa"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Angkatan Kelas<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Angkatan</option>
                                                    <option>Semua Angkatan</option>
                                                    <option>2015</option>
                                                    <option>2016</option>
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Mata Kuliah<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Mata Kuliah</option>
                                                    <option>Desain Web</option>
                                                    <option>Desain Wen Lanjutan</option>
                                                    <option>Struktur Data</option>
                                                    <option>Matematika</option>
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
                                                    <option>Pilih Dosen Pengajar I</option>
                                                    <option>Hamidillah Ajie-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Yuliatri Sastrawijaya-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Widodo-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Bambang Prasetya Adhi-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Pengajar II</Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Dosen Pengajar II</option>
                                                    <option>Hamidillah Ajie-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Yuliatri Sastrawijaya-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Widodo-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Bambang Prasetya Adhi-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Pengajar III</Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Dosen Pengajar III</option>
                                                    <option>Hamidillah Ajie-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Yuliatri Sastrawijaya-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Widodo-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Bambang Prasetya Adhi-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Pengajar IV</Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Dosen Pengajar IV</option>
                                                    <option>Hamidillah Ajie-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Yuliatri Sastrawijaya-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Widodo-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                    <option>Bambang Prasetya Adhi-S1 Pendidikan Teknik Informatika dan Komputer</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={12}><b>Ruang Pertama</b></Label>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Hari I<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Pertemuan Hari I</option>
                                                    <option>Senin</option>
                                                    <option>Selasa</option>
                                                    <option>Rabu</option>
                                                    <option>Kamis</option>
                                                    <option>Jumat</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Jam I<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Jam Pertemuan I</option>
                                                    <option>Jam I (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam II (09:00:00 sd 09:50:00)</option>
                                                    <option>Jam III (11:00:00 sd 11:50:00)</option>
                                                    <option>Jam IV (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam V (12:00:00 sd 12:50:00)</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Gedung Pertemuan I<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Gedung Pertemuan I</option>
                                                    <option>Gedung L1</option>
                                                    <option>Gedung L2</option>
                                                    <option>RA. Kartini</option>
                                                    <option>RA. Sartika</option>
                                                    <option>Gedung L3</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Ruang Pertemuan I<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Ruang Pertemuan I</option>
                                                    <option>208</option>
                                                    <option>302</option>
                                                    <option>304</option>
                                                    <option>307</option>
                                                    <option>404</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup row>
                                            <Label for="exampleEmail" sm={12}><b>Ruang Kedua</b></Label>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Hari II<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Pertemuan Hari II</option>
                                                    <option>Senin</option>
                                                    <option>Selasa</option>
                                                    <option>Rabu</option>
                                                    <option>Kamis</option>
                                                    <option>Jumat</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Jam II<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Jam Pertemuan II</option>
                                                    <option>Jam I (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam II (09:00:00 sd 09:50:00)</option>
                                                    <option>Jam III (11:00:00 sd 11:50:00)</option>
                                                    <option>Jam IV (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam V (12:00:00 sd 12:50:00)</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Gedung Pertemuan II<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Gedung Pertemuan II</option>
                                                    <option>Gedung L1</option>
                                                    <option>Gedung L2</option>
                                                    <option>RA. Kartini</option>
                                                    <option>RA. Sartika</option>
                                                    <option>Gedung L3</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Ruang Pertemuan II<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Ruang Pertemuan II</option>
                                                    <option>208</option>
                                                    <option>302</option>
                                                    <option>304</option>
                                                    <option>307</option>
                                                    <option>404</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup row>
                                            <Label for="exampleEmail" sm={12}><b>Ruang Ketiga</b></Label>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Hari III<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Pertemuan Hari III</option>
                                                    <option>Senin</option>
                                                    <option>Selasa</option>
                                                    <option>Rabu</option>
                                                    <option>Kamis</option>
                                                    <option>Jumat</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Jam III<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Jam Pertemuan III</option>
                                                    <option>Jam I (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam II (09:00:00 sd 09:50:00)</option>
                                                    <option>Jam III (11:00:00 sd 11:50:00)</option>
                                                    <option>Jam IV (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam V (12:00:00 sd 12:50:00)</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Gedung Pertemuan III<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Gedung Pertemuan III</option>
                                                    <option>Gedung L1</option>
                                                    <option>Gedung L2</option>
                                                    <option>RA. Kartini</option>
                                                    <option>RA. Sartika</option>
                                                    <option>Gedung L3</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Ruang Pertemuan III<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Ruang Pertemuan III</option>
                                                    <option>208</option>
                                                    <option>302</option>
                                                    <option>304</option>
                                                    <option>307</option>
                                                    <option>404</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup row>
                                            <Label for="exampleEmail" sm={12}><b>Ruang Keempat</b></Label>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Hari IV<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Pertemuan Hari IV</option>
                                                    <option>Senin</option>
                                                    <option>Selasa</option>
                                                    <option>Rabu</option>
                                                    <option>Kamis</option>
                                                    <option>Jumat</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                         <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Jam IV<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Jam Pertemuan IV</option>
                                                    <option>Jam I (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam II (09:00:00 sd 09:50:00)</option>
                                                    <option>Jam III (11:00:00 sd 11:50:00)</option>
                                                    <option>Jam IV (08:00:00 sd 08:50:00)</option>
                                                    <option>Jam V (12:00:00 sd 12:50:00)</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Gedung Pertemuan IV<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Gedung Pertemuan IV</option>
                                                    <option>Gedung L1</option>
                                                    <option>Gedung L2</option>
                                                    <option>RA. Kartini</option>
                                                    <option>RA. Sartika</option>
                                                    <option>Gedung L3</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup className="bg-light p-1" row>
                                            <Label for="exampleEmail" sm={2}>Ruang Pertemuan IV<span className="text-danger">*</span></Label>
                                            <Col sm={10} className="my-auto">
                                                <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                                    <option>Pilih Ruang Pertemuan IV</option>
                                                    <option>208</option>
                                                    <option>302</option>
                                                    <option>304</option>
                                                    <option>307</option>
                                                    <option>404</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>

                                            <FormGroup check row>
                                                <Col sm={{ size: 10, offset: 2 }}>
                                                    <Button className="btn-success" onClick={this.update}>Simpan</Button>
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
                                        <li>Semester secara otomatis akan terbuka sesuai jadwal.</li>
                                        <li>Seksi secara otomatis di generate oleh sistem, namun tetap memunculkan seksi dengan susunan 5 digit pertama ada kode prodi dan 5 digit berikutnya adalah urutan seksi, contoh : 1201600001. Penjelasan seksi ini untuk prodi Bahasa Indonesia dengan urutan 1.</li>
                                        <li>Status Perkuliahan adalah status seksi untuk mahasiswa, apabila berstatus "Universitas" makan mahasiswa se-Universitas dapat mengambil seksi ini, bila "Fakultas" maka mahasiswa se-Fakultas bisa mengambil seksi ini, bila "Program Studi" maka hanya program studi ini yang hanya bisa mengambil seksi ini.</li>
                                        <li>Status Pertemuan adalah seksi ini apakah ada pertemuan atau kah tidak?. Bila Ya maka klik pada "Tatap Muka", bila Tidak maka klik pada "Tidak Ada Tatap Muka".</li>
                                        <li>Daya Tampung hanya diperbolehkan sampai batas atas 999 peserta menurut program(bukan kelas)</li>
                                        <li>Angkatan Kelas adalah kewenangan mahasiswa untuk mengambil seksi ini, bila ditetapkan untuk angkatan 2017 (misalnya) maka hanya untuk mahasiswa angkatan 2017 yang boleh mengambil ini.</li>
                                        <li>Mata Kuliah yang ditampilkan adalah mata kuliah yang umum dan mata kuliah pemilikan program studi itu sendiri</li>
                                        <li>Pengajar I,II,III dan IV sudah jelas</li>
                                        <li>Hari I adalah hari pertemuan pertama</li>
                                        <li>Jam I adalah jam pertemuan pertama</li>
                                        <li>Gedung I adalah gedung pertemuan pertama</li>
                                        <li>Ruang I adalah ruang pertemuan pertama</li>
                                        <li>Hari II adalah hari pertemuan kedua, bila ada</li>
                                        <li>Jam II adalah jam pertemuan kedua, bila ada</li>
                                        <li>Gedung II adalah gedung pertemuan kedua, bila ada</li>
                                        <li>Ruang II adalah ruang pertemuan kedua, bila ada</li>
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
