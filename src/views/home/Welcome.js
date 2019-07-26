import React, { Component } from 'react';
import { UncontrolledAlert, Row, Col } from 'reactstrap';

export default class Welcome extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <UncontrolledAlert color="success">
                        <i className="fas fa-user-check"></i> <span>Selamat Datang KOORD. PRODI S1 PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER, <br />
                            di <b>SIAKAD (Sistem Informasi Akademik)(versi-3)</b>. Semoga dapat membantu pada setiap kegiatan administrasi akademik anda.</span>
                    </UncontrolledAlert>
                </Col>
            </Row>
        )
    }
}