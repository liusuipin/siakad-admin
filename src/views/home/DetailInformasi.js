import React, { Component, Fragment } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import Navigation from '../../components/navigation/Navigation.js';
import { GlobalConsumer } from '../../context/context';
import { Link } from 'react-router-dom'


class DetailInformasi extends Component {

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
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Informasi Terbaru</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>

                                    <Row>
                                        <Col sm="12">
                                            <h3>Jadwal Kegiatan Akhir Semester 110</h3>
                                            <small className="text-secondary">29 Juli 2019</small>
                                        </Col>
                                        <Col sm="12" className="mt-3">
                                            <p>
                                            Diberitahukan Kepada Seluruh Dosen Universitas Negeri Jakarta terkait dengan jadwal kegiatan akhir semester 110.
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default GlobalConsumer(DetailInformasi);
