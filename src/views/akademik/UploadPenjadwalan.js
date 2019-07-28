import React, { Component, Fragment } from 'react';
import { Row, Col, TabPane, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class InputData extends Component {
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
                                    <Button type="button" className="btn-info btn-sm"><i className="fas fa-file-download mr-2"></i>Unduh Format</Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                    <Row className="mt-3">
                        <Col sm="12" className="text-center mx-auto">
                            <Button className="btn-success"><i className="fas fa-cloud-upload-alt mr-2"></i>Upload</Button>
                        </Col>
                    </Row>
                </TabPane>
            </Fragment>
        )
    }
}
