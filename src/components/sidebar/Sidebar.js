import React, { Component, Fragment } from 'react';
import { Row, Col, UncontrolledCollapse, Card } from 'reactstrap';
import { NavLink } from 'react-router-dom'

import './Sidebar.css';
import { GlobalConsumer } from '../../context/context';

import Panduan from './panduan/panduan.doc'
import FormEmail from './form/formEmail.doc'
import FormInput from './form/formInput.doc'
import FormPass from './form/formPass.doc'



class Sidebar extends Component {
    render() {
        return (
            <Fragment>

                {/* SIDEBAR MODE PC */}
                <div className={this.props.state.sidebar ? "sidebar-close sidebar overflow-sidebar  bg-white d-none d-lg-block" : "sidebar-open overflow-sidebar sidebar bg-white d-none d-lg-block"}>
                    <div md="2" className="text-dark">
                        <Row>
                            <Col>

                                <div className="sidebar-menu">
                                    <ul>
                                        <h5 className="text-center mt-1 p-2">Admin Prodi Pendidikan Teknik Informatika dan Komputer</h5>
                                        <NavLink exact to="/" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-home mr-2" ></i>Beranda</li></NavLink>
                                        <NavLink exact to="/kalender" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-calendar-alt mr-2"></i> Kalender Akademik</li></NavLink>

                                        <NavLink exact to="/database" id="akademik" className="text-decoration-none"><li className="p-2"><i className="fas fa-landmark mr-2"></i> Akademik <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#akademik">
                                            <Card className="mt-1 p-2">
                                                <NavLink exact to="/penjadwalan" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Penjadwalan</span></li></NavLink>
                                                <NavLink exact to="/peta-ruang" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Peta Ruang</span></li></NavLink>
                                                <NavLink exact to="/pembimbing-akademik" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Pembimbing Akademik</span></li></NavLink>
                                                <NavLink exact to="/jadwal-dosen" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Jadwal Dosen</span></li></NavLink>
                                                <NavLink exact to="/studi-mahasiswa" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Studi Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/krs-kosong" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> KRS Kosong</span></li></NavLink>
                                                <NavLink exact to="/dosen-belum-isi-nilai" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Dosen Belum Isi Nilai</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>

                                        <NavLink exact to="/database" id="database" className="text-decoration-none"><li className="p-2"><i className="fas fa-database mr-2"></i> Database Master <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#database">
                                            <Card className="mt-1 mb-4 p-2">
                                                <NavLink exact to="/dosen" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Dosen</span></li></NavLink>
                                                <NavLink exact to="/mahasiswa" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/mata-kuliah" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Mata Kuliah</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >


                {/* SIDEBAR MODE HP */}
                <div className={this.props.state.sidebar ? "sidebar-close sidebar overflow-sidebar  bg-white d-lg-none d-xl-none" : "sidebar-open overflow-sidebar sidebar bg-white d-lg-none d-xl-none"}>
                    <div md="2" className="text-dark">
                        <Row>
                            <Col>
                                <div className="sidebar-menu">
                                    <ul>
                                        <NavLink exact to="/" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-home mr-2" ></i>Beranda</li></NavLink>
                                        <NavLink exact to="/kalender" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-calendar-alt mr-2"></i> Kalender Akademik</li></NavLink>

                                        <NavLink exact to="/database" id="akademik" className="text-decoration-none"><li className="p-2"><i className="fas fa-landmark mr-2"></i> Akademik <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#akademik">
                                            <Card className="mt-1 p-2">
                                                <NavLink exact to="/penjadwalan" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Penjadwalan</span></li></NavLink>
                                                <NavLink exact to="/peta-ruang" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Peta Ruang</span></li></NavLink>
                                                <NavLink exact to="/pembimbing-akademik" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Pembimbing Akademik</span></li></NavLink>
                                                <NavLink exact to="/jadwal-dosen" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} ><li className="p-2"><span className=""> Jadwal Dosen</span></li></NavLink>
                                                <NavLink exact to="/studi-mahasiswa" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Studi Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/krs-kosong" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> KRS Kosong</span></li></NavLink>
                                                <NavLink exact to="/dosen-belum-isi-nilai" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Dosen Belum Isi Nilai</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>

                                        <NavLink exact to="/database" id="database" className="text-decoration-none"><li className="p-2"><i className="fas fa-database mr-2"></i> Database Master <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#database">
                                            <Card className="mt-1 mb-5 p-2">
                                                <NavLink exact to="/dosen" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Dosen</span></li></NavLink>
                                                <NavLink exact to="/mahasiswa" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/mata-kuliah" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className=""> Mata Kuliah</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>


                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >

            </Fragment>
        )
    }
}

export default GlobalConsumer(Sidebar);
