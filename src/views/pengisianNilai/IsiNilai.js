import React, { Component, Fragment } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem, Table, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import { GlobalConsumer } from '../../context/context';
import Swal from 'sweetalert2';

class IsiNilai extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mataKuliah: props.match.params.matakuliah
        }
    }

    update=()=>{
        return Swal.fire(
            'Sukses!',
            `Kode seksi <b>1512600022</b> berhasil di isi !`,
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
                            <Row className="mt-2 mb-4">
                                <Col>
                                    <div>
                                        <Breadcrumb className="breadcrumb-me">
                                            <BreadcrumbItem><Link to='/pengisian-nilai'><i className="fas fa-edit mr-1"></i> Pengisian Nilai</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Daftar Nilai</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Daftar Nilai</h4>
                                        <Row>
                                                <Col md="12">
                                                <div>
                                                </div>
                                                    <Table borderless size="sm">
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Kode Seksi</th>
                                                                <td>: &nbsp; 1512600022</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Nama MK</th>
                                                                <td>: &nbsp; Pemograman Web</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Semester</th>
                                                                <td>: &nbsp; 110</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">SKS</th>
                                                                <td>: &nbsp; 3</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
                                        <div className="table-responsive">
                                            <Table striped bordered hover>
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="text-center">No</th>
                                                        <th className="text-center">NIM</th>
                                                        <th className="text-center">Nama Mahasiswa</th>
                                                        <th className="text-center">A</th>
                                                        <th className="text-center">A-</th>
                                                        <th className="text-center">A</th>
                                                        <th className="text-center">B+</th>
                                                        <th className="text-center">B</th>
                                                        <th className="text-center">B-</th>
                                                        <th className="text-center">C+</th>
                                                        <th className="text-center">C</th>
                                                        <th className="text-center">C-</th>
                                                        <th className="text-center">D</th>
                                                        <th className="text-center">E</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center">1</th>
                                                        <td>5235151324</td>
                                                        <td>Juliana</td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center">2</th>
                                                        <td>5235151198</td>
                                                        <td>Arif Budi Setiawan</td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="arif" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row" className="text-center">3</th>
                                                        <td>5235151887</td>
                                                        <td>Elvira Elsa Diva</td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="echa" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center">4</th>
                                                        <td>5235151976</td>
                                                        <td>Erwin Firmansyah</td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                        <td className="text-center">
                                                            <FormGroup check>
                                                                    <Input type="radio" name="erwin" />{' '}
                                                            </FormGroup>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <Button className="btn-info btn-sm mx-auto mt-2" onClick={this.update}><i className="fas fa-save"></i> Simpan</Button>
                                        </div>
                                    </div>
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

export default GlobalConsumer(IsiNilai);

