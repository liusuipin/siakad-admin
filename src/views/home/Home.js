import React, { Component, Fragment } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Sidebar from '../../components/sidebar/Sidebar';
import Navigation from '../../components/navigation/Navigation.js';
// import Footer from '../../components/footer/Footer.js';
import Tabs from './Tabs';
import Welcome from './Welcome';
import { GlobalConsumer } from '../../context/context';


class Home extends Component {

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
                                            <BreadcrumbItem active><i className="fas fa-home mr-1"></i> Beranda</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <Welcome />
                                    <Tabs />
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

export default GlobalConsumer(Home);
