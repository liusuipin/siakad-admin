import React, { Component } from 'react';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './Home.css';
import Berita from './Berita.js';

export default class Tabs extends Component {

    constructor(props) {
        super(props);

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
            <div>
                <Nav tabs className="text-secondary tabss">
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <i className="fas fa-info-circle"></i> Informasi Terbaru
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="text-secondary">
                    <Berita />
                </TabContent>
            </div>
        )
    }
}
