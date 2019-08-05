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
import PetaDosen from './PetaDosen';
import KelasDosen from './KelasDosen';
// import DataDosen from './DataDosen';
// import Footer from '../../components/footer/Footer';
// import DataMengajar from './DataMengajar';

class JadwalDosen extends Component {

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
                                            <BreadcrumbItem active>Jadwal Dosen</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-4">Jadwal Dosen</h4>

                                        <Row>
                                            <Col sm="12">
                                                <Nav tabs>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '1' })}
                                                            onClick={() => { this.toggle('1'); }}
                                                        >
                                                            <i className="fas fa-map-marked-alt mr-2"></i>Peta Dosen
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.toggle('2'); }}
                                                        >
                                                            <i className="fas fa-list-alt mr-2"></i>Kelas Dosen
                                                        </NavLink>
                                                    </NavItem>
                                                    
                                                </Nav>


                                                <TabContent activeTab={this.state.activeTab}>

                                                    <PetaDosen />
                                                    <KelasDosen />

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

}

export default GlobalConsumer(JadwalDosen);

