import React, { Component } from 'react';
// import './css/jquery.dataTables.css';

const $ = require('jquery');
$.Datatable = require('datatables.net');

export default class DataDosen extends Component {

    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                // columns: [
                //     { title: "Name" },
                //     { title: "Position" },
                //     { title: "Office" },
                //     { title: "Extn." },
                //     { title: "Start date" },
                //     { title: "Salary" },
                // ]
                columns: [
                    { title: "No." },
                    { title: "NIDN" },
                    { title: "Nama Dosen" },
                    { title: "Prodi" },
                    { title: "NIP" },
                    { title: "Jenis Kelamin" },
                    { title: "Status" },
                    { title: "Aksi" }
                ]
            }
        )
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-bordered table-responsive" width="100%" ref={el => this.el = el} >

                </table>
            </div>
        )
    }
}
