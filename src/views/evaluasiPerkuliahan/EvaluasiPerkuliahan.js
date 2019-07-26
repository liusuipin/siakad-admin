import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem, Form, Label, FormGroup, Input, Button, Table } from 'reactstrap';
import { GlobalConsumer } from '../../context/context';
import Navigation from '../../components/navigation/Navigation';
import Sidebar from '../../components/sidebar/Sidebar';
import { Line } from 'react-chartjs-2';
// import Footer from '../../components/footer/Footer';

class EvaluasiPerkuliahan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16', 'P17', 'P18', 'P19', 'P20'],
                datasets: [
                    {
                        label: 'Seksi',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: '#dc3545',
                        borderColor: '#dc3545',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#dc3545',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [
                            3.24, 3.11, 3.09, 3.13, 3.13, 3.39, 3.08, 3.08, 3.18, 3.36, 3.11, 3.34, 3.13, 3.11, 3.08, 3.00, 3.05, 3.21, 3.26, 3.08
                        ]
                    },
                    {
                        label: 'Fakultas',
                        type: 'line',
                        data: [2.91, 2.87, 2.86, 2.88, 2.86, 2.88, 2.83, 2.85, 2.87, 2.87, 2.86, 2.86, 2.85, 2.85, 2.85, 2.86, 2.88, 2.87, 2.88, 2.81],
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: '#17a2b8',
                        borderColor: '#17a2b8',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#17a2b8',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10
                    },
                    {
                        label: 'UNJ',
                        type: 'line',
                        data: [3.37, 3.30, 3.31, 3.33, 3.31, 3.35, 3.25, 3.28, 3.33, 3.29, 3.29, 3.29, 3.29, 3.29, 3.29, 3.30, 3.33, 3.30, 3.30, 3.20],
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: '#28a745',
                        borderColor: '#28a745',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#28a745',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10
                    }
                ]
            }
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
                                            <BreadcrumbItem><Link to="/"><i className="fas fa-home mr-1"></i> Beranda</Link></BreadcrumbItem>
                                            <BreadcrumbItem active>Evaluasi Perkuliahan</BreadcrumbItem>
                                        </Breadcrumb>
                                    </div>
                                    <div className="col-md-12 mx-auto mt-2">
                                        <h4 className="text-center mb-2">Evaluasi Perkuliahan</h4>
                                        <Form className="">
                                            <FormGroup row>
                                                <Col lg="3" sm="6" md="12" className="pt-3">
                                                    <Label for="exampleSelect">Semester :</Label>
                                                    <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                        <option>107 - 1 2017/2018</option>
                                                        <option>106 - 3 2016/2017</option>
                                                        <option>105 - 1 2015/2016</option>
                                                        <option>104 - 3 2014/2015</option>
                                                        <option>103 - 1 2013/2014</option>
                                                        <option>102 - 3 2012/2013</option>
                                                    </Input>
                                                </Col>
                                                <Col lg="3" sm="6" md="12" className="pt-3">
                                                    <Label for="exampleSelect">Kode Seksi :</Label>
                                                    <Input type="select" name="select" id="exampleSelect" className="form-control-sm">
                                                        <option>5174</option>
                                                        <option>5176</option>
                                                        <option>5173</option>
                                                        <option>5172</option>
                                                        <option>5177</option>
                                                        <option>5178</option>
                                                    </Input>
                                                </Col>
                                                <Col sm="3" className="pt-3 mt-auto">
                                                    <Button color="info" type="button" className="btn-sm"><i className="fas fa-search"></i> Filter</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <Row className="mt-4">
                                            <Col sm="7" className="">
                                                <h6 className="text-center">Grafik Rata-Rata Evaluasi Perkuliahan</h6>
                                                <Line
                                                    data={this.state.chartData}
                                                    options={{
                                                        legend: {
                                                            display: true,
                                                            position: 'bottom'
                                                        }
                                                    }}
                                                />
                                            </Col>
                                            <Col sm="4" className="mt-4">
                                                <Table borderless size="sm">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Kode Seksi</th>
                                                            <td>: 5174</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Nama MK</th>
                                                            <td>: Pemograman Web</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Semester</th>
                                                            <td>: 107</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">SKS</th>
                                                            <td>: 3</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row className="mt-3">
                                            <Col sm="12">
                                                <div className="table-responsive">
                                                    <Table bordered>
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th className="text-center">No</th>
                                                                <th>Aspek</th>
                                                                <th className="text-center">Re-rata Seksi</th>
                                                                <th className="text-center">Re-rata Fakultas</th>
                                                                <th className="text-center">Re-rata UNJ</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className="text-center">1</th>
                                                                <td>Menyampaikan silabus perkuliahan kepada mahasiswa pada pertemuan pertama.</td>
                                                                <th className="text-center">3.24</th>
                                                                <th className="text-center">2.91</th>
                                                                <th className="text-center">3.37</th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="text-center">2</th>
                                                                <td>Menyampaikan kompetensi dan tujuan pembelajaran di setiap pertemuan perkuliahan.</td>
                                                                <th className="text-center">3.11</th>
                                                                <th className="text-center">2.87</th>
                                                                <th className="text-center">3.30</th>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="text-center">dst.</th>
                                                                <td>.......</td>
                                                                <th className="text-center">.......</th>
                                                                <th className="text-center">.......</th>
                                                                <th className="text-center">.......</th>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
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

export default GlobalConsumer(EvaluasiPerkuliahan);
