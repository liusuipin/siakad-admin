import React, { Component, Fragment } from 'react';
import {
    Button,
    Navbar,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './Navigation.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/unj.png';
import { GlobalConsumer } from '../../context/context';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Fragment>
                <Navbar className="bg-unj fixed-top" light expand="md" sm="12">
                    <div className="nav">
                        <Button className="mr-3 float-left btn-unj-nav" onClick={() => this.props.dispatch({ type: 'HANDLER_SIDEBAR' })}><i className="fas fa-bars"></i></Button>
                        <div className="text-white float-left my-auto brand">
                            <Link to="/">
                                <img src={logo} width="35" alt="logo unj" className="float-left" />
                                <h5 className="float-left mt-1 ml-2"><b>SIAKAD UNJ</b></h5>
                            </Link>
                        </div>
                    </div>
                    {/* <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar> */}
                    <Nav className="ml-auto" navbar>
                        {/* <NavItem>
                                                <NavLink href="/components/">Components</NavLink>
                                            </NavItem> */}
                        {/* <div className="topbar-divider d-none d-sm-block"></div> */}
                        {/* //inNavbar */}
                        <UncontrolledDropdown nav>
                            <DropdownToggle nav className="text-white akun">
                                <i className="fas fa-user"></i><span className="d-none d-sm-inline ml-2"><b>Koord. Prodi...</b></span> <i className="fas fa-caret-down"></i>
                            </DropdownToggle>
                            <DropdownMenu right className="biodata">
                                <Link to="/biodata">
                                    <DropdownItem className="text-secondary dropdownitem">
                                        <i className="fas fa-user fa-sm fa-fw mr-2"></i> Data Prodi
                                    </DropdownItem>
                                </Link>
                                <Link to="/ubah-kata-sandi">
                                    <DropdownItem className="text-secondary dropdownitem">
                                        <i className="fas fa-cogs fa-sm fa-fw mr-2"></i> Ubah Kata Sandi
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider className="text-secondary" />
                                <Link to="/login">
                                    <DropdownItem className="text-secondary dropdownitem"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2"></i> Keluar</DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* </Collapse> */}
                </Navbar>
            </Fragment >
        )
    }
}

export default GlobalConsumer(Navigation);
