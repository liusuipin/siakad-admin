import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import classnames from 'classnames';
import InputData from './InputData';
import DaftarJadwal from './DaftarJadwal';
import UploadPenjadwalan from './UploadPenjadwalan';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class Penjadwalan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1'
        };
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
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
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-landmark mr-2"></i>Akademik</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Penjadwalan</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Penjadwalan Pendidikan Teknik Informatika dan Komputer</h4>

                                        <Row>
                                            <Col sm="12">
                                                <Nav tabs>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '1' })}
                                                            onClick={() => { this.toggle('1'); }}
                                                        >
                                                            <i className="fas fa-check-circle mr-2"></i>Input Data
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.toggle('2'); }}
                                                        >
                                                            <i className="fas fa-list-alt mr-2"></i>Daftar Jadwal
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '3' })}
                                                            onClick={() => { this.toggle('3'); }}
                                                        >
                                                            <i className="fas fa-cloud-upload-alt mr-2"></i>Upload Penjadwalan
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>


                                                <TabContent activeTab={this.state.activeTab}>

                                                    <InputData />
                                                    <DaftarJadwal />
                                                    <UploadPenjadwalan />

                                                </TabContent>
                                            </Col>
                                        </Row>


                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }

    // dataSet = [
    //     ["1", "1231232", "Yuliatri Sastra Widjaya", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`],
    //     ["2", "321313", "Bambang Adhi", "PTIK", "21311312", "Perempuan", "Aktif", `<Button className="btn-success">Edit</Button>`]
    // ];

}

export default GlobalConsumer(Penjadwalan);

