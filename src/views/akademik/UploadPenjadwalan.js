import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import FormatUpload from '../akademik/Format-Upload.xls'
import Swal from 'sweetalert2'
export default class InputData extends Component {
    update = () => {
        return Swal.fire(
            'Sukses!',
            `Data berhasil di unggah !`,
            'success'
        )
    }
    render() {
        return (
            <Fragment>
                <TabPane tabId="3" className="mt-3">
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#" className="bg-light"><i className="fas fa-cloud-upload-alt mr-2"></i>Import Penjadwalan</ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col sm="12">
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleFile">File</Label>
                                            <Input type="file" name="file" id="exampleFile" />
                                        </FormGroup>
                                    </Form>
                                    <a href={FormatUpload} download><Button type="button" className="btn-info btn-sm"><i className="fas fa-file-download mr-2"></i>Unduh Format</Button></a>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                    <Row className="mt-3">
                        <Col sm="12" className="text-center mx-auto">
                            <Button className="btn-success" onClick={this.update}><i className="fas fa-cloud-upload-alt mr-2" ></i>Unggah</Button>
                        </Col>
                    </Row>
                </TabPane>
            </Fragment>
        )
    }
}
