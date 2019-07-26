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
                <div className={this.props.state.sidebar ? "sidebar-close sidebar  bg-white d-none d-lg-block" : "sidebar-open sidebar bg-white d-none d-lg-block"}>
                    <div md="2" className="text-dark">
                        <Row>
                            <Col>

                                <div className="sidebar-menu">
                                    <ul>
                                        <h5 className="text-center">Admin Prodi</h5>
                                        <NavLink exact to="/" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-home mr-2" ></i>Beranda</li></NavLink>
                                        <NavLink exact to="/kalender" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-calendar-alt mr-2"></i> Kalender Akademik</li></NavLink>
                                        {/* <NavLink exact to="/daftar-mengajar" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-chalkboard-teacher mr-2"></i>Daftar Mengajar</li></NavLink>
                                        <NavLink exact to="/pengisian-nilai" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-edit mr-2"></i>Pengisian Nilai</li></NavLink>
                                        <NavLink exact to="/evaluasi-perkuliahan" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-chart-area mr-2"></i> Evaluasi Perkuliahan</li></NavLink>
                                        <NavLink exact to="/bimbingan-akademik" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-users mr-2"></i>Bimbingan akademik</li></NavLink> */}

                                        {/* <hr /> */}

                                        {/* <NavLink exact to="/bpa" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><i className="fas fa-book mr-2"></i> BPA</li></NavLink> */}

                                        <NavLink exact to="/database" id="akademik" className="text-decoration-none"><li className="p-2"><i className="fas fa-landmark mr-2"></i> Akademik <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#akademik">
                                            <Card className="mt-1">
                                                <NavLink exact to="/penjadwalan" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Penjadwalan</span></li></NavLink>
                                                <NavLink exact to="/peta-ruang" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Peta Ruang</span></li></NavLink>
                                                <NavLink exact to="/peta-dosen" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Peta Dosen</span></li></NavLink>
                                                <NavLink exact to="/kelas-dosen" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Kelas Dosen</span></li></NavLink>
                                                <NavLink exact to="/kelas-seksi" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Kelas Seksi</span></li></NavLink>
                                                <NavLink exact to="/pembimbing-akademik" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Pembimbing Akademik</span></li></NavLink>
                                                <NavLink exact to="/studi-mahasiswa" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Studi Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/krs-kosong" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> KRS Kosong</span></li></NavLink>
                                                <NavLink exact to="/dosen-belum-isi-nilai" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Dosen Belum Isi Nilai</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>

                                        <NavLink exact to="/database" id="database" className="text-decoration-none"><li className="p-2"><i className="fas fa-database mr-2"></i> Database Master <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#database">
                                            <Card className="mt-1">
                                                <NavLink exact to="/dosen" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Dosen</span></li></NavLink>
                                                <NavLink exact to="/mahasiswa" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/mata-kuliah" activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Mata Kuliah</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>

                                        {/* <a href={Panduan} download className="text-decoration-none"><li className="p-2"><i className="fas fa-question-circle mr-2"></i> Panduan SIAKAD</li></a> */}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >


                {/* SIDEBAR MODE HP */}
                <div className={this.props.state.sidebar ? "sidebar-close sidebar  bg-white d-lg-none d-xl-none" : "sidebar-open sidebar bg-white d-lg-none d-xl-none"}>
                    <div md="2" className="text-dark">
                        <Row>
                            <Col>
                                <div className="sidebar-menu">
                                    <ul>
                                        <NavLink exact to="/" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-home mr-2" ></i>Beranda</li></NavLink>
                                        <NavLink exact to="/kalender" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-calendar-alt mr-2"></i> Kalender Akademik</li></NavLink>
                                        {/* <NavLink exact to="/daftar-mengajar" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-chalkboard-teacher mr-2"></i>Daftar Mengajar</li></NavLink>
                                        <NavLink exact to="/pengisian-nilai" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-edit mr-2"></i>Pengisian Nilai</li></NavLink>
                                        <NavLink exact to="/evaluasi-perkuliahan" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-chart-line mr-2"></i> Evaluasi Perkuliahan</li></NavLink>
                                        <NavLink exact to="/bimbingan-akademik" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-users mr-2"></i>Bimbingan akademik</li></NavLink> */}

                                        {/* <hr /> */}

                                       
                                        {/* <NavLink exact to="/bpa" activeClassName="sidebar-item-active" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-book mr-2"></i> BPA</li></NavLink> */}
                                        {/* <NavLink exact to="/unduh" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} id="toggler" className="text-decoration-none"><li className="p-2"><i className="fas fa-download mr-2"></i> Unduh Form <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#toggler">
                                            <Card className="mt-1">
                                                <a href={FormPass} onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2">Pergantian Kata Sandi</li></a>
                                                <a href={FormInput} onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2">Input Pergantian Nilai</li></a>
                                                <a href={FormEmail} onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2">Pembuatan Email UNJ</li></a>
                                            </Card>
                                        </UncontrolledCollapse> */}

                                        {/* <a href={Panduan} download onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} className="text-decoration-none"><li className="p-2"><i className="fas fa-question-circle mr-2"></i> Panduan SIAKAD</li></a> */}

                                        <NavLink exact to="/database" id="akademik" className="text-decoration-none"><li className="p-2"><i className="fas fa-landmark mr-2"></i> Akademik <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#akademik">
                                            <Card className="mt-1">
                                                <NavLink exact to="/penjadwalan" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Penjadwalan</span></li></NavLink>
                                                <NavLink exact to="/peta-ruang" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Peta Ruang</span></li></NavLink>
                                                <NavLink exact to="/peta-dosen" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })} ><li className="p-2"><span className="ml-4"> Peta Dosen</span></li></NavLink>
                                                <NavLink exact to="/kelas-dosen" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Kelas Dosen</span></li></NavLink>
                                                <NavLink exact to="/kelas-seksi" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Kelas Seksi</span></li></NavLink>
                                                <NavLink exact to="/pembimbing-akademik" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Pembimbing Akademik</span></li></NavLink>
                                                <NavLink exact to="/studi-mahasiswa" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Studi Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/krs-kosong" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> KRS Kosong</span></li></NavLink>
                                                <NavLink exact to="/dosen-belum-isi-nilai" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Dosen Belum Isi Nilai</span></li></NavLink>
                                            </Card>
                                        </UncontrolledCollapse>
                                        
                                        <NavLink exact to="/database" id="database" className="text-decoration-none"><li className="p-2"><i className="fas fa-database mr-2"></i> Database Master <i className="fas fa-sort-down float-right"></i></li></NavLink>
                                        <UncontrolledCollapse toggler="#database">
                                            <Card className="mt-1">
                                                <NavLink exact to="/dosen" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Dosen</span></li></NavLink>
                                                <NavLink exact to="/mahasiswa" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Mahasiswa</span></li></NavLink>
                                                <NavLink exact to="/mata-kuliah" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}  activeClassName="sidebar-item-active" className="text-decoration-none"><li className="p-2"><span className="ml-4"> Mata Kuliah</span></li></NavLink>
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
