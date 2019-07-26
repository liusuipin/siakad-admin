import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/home/Home.js';
import Biodata from '../views/biodata/Biodata.js';
import UbahPass from '../views/biodata/UbahPass.js';
import JadwalMengajar from '../views/jadwalMengajar/JadwalMengajar.js';
import PengisianNilai from '../views/pengisianNilai/PengisianNilai.js';
import DaftarMengajar from '../views/daftarMengajar/DaftarMengajar.js';
import EvaluasiPerkuliahan from '../views/evaluasiPerkuliahan/EvaluasiPerkuliahan.js';
import BimbinganAkademik from '../views/bimbinganAkademik/BimbinganAkademik.js';
import Bpa from '../views/home/Bpa'
import Kalender from '../views/home/Kalender'
import NotFound from '../views/notFound/NotFound.js';

import GlobalProvider from '../context/context';
import Loginn from '../views/login/Loginn.js';
import IsiNilai from '../views/pengisianNilai/IsiNilai.js';
import DetailInformasi from '../views/home/DetailInformasi';
import DataMahasiswa from '../views/bimbinganAkademik/DataMahasiswa.js';
import Dosen from '../views/databaseMaster/Dosen.js';
import Mahasiswa from '../views/databaseMaster/Mahasiswa';
import MataKuliah from '../views/databaseMaster/MataKuliah.js';
import Penjadwalan from '../views/akademik/Penjadwalan';
import PetaRuang from '../views/akademik/PetaRuang';
import PetaDosen from '../views/akademik/PetaDosen';
import KelasDosen from '../views/akademik/KelasDosen';
import KelasSeksi from '../views/akademik/KelasSeksi';
import PembimbingAkademik from '../views/akademik/PembimbingAkademik';
import StudiMahasiswa from '../views/akademik/StudiMahasiswa';
import KrsKosong from '../views/akademik/KrsKosong';
import DosenBelumIsiNilai from '../views/akademik/DosenBelumIsiNilai';



class Router extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Loginn} exact />
                        <Route path='/' component={Home} exact />
                        <Route path='/biodata' component={Biodata} exact />
                        <Route path='/ubah-kata-sandi' component={UbahPass} exact />
                        <Route path='/jadwal-mengajar' component={JadwalMengajar} exact />
                        <Route path='/pengisian-nilai' component={PengisianNilai} exact />
                        <Route path='/pengisian-nilai/:matakuliah' component={IsiNilai} exact />
                        <Route path='/daftar-mengajar' component={DaftarMengajar} exact />
                        <Route path='/evaluasi-perkuliahan' component={EvaluasiPerkuliahan} exact />
                        <Route path='/bimbingan-akademik' component={BimbinganAkademik} exact />
                        <Route path='/bpa' component={Bpa} exact />
                        <Route path='/kalender' component={Kalender} exact />
                        <Route path='/detail-informasi' component={DetailInformasi} exact />
                        <Route path='/bimbingan-akademik/data-mahasiswa' component={DataMahasiswa} exact />

                        <Route path='/dosen' component={Dosen} exact />
                        <Route path='/mahasiswa' component={Mahasiswa} exact />
                        <Route path='/mata-kuliah' component={MataKuliah} exact />

                        <Route path='/penjadwalan' component={Penjadwalan} exact />
                        <Route path='/peta-ruang' component={PetaRuang} exact />
                        <Route path='/peta-dosen' component={PetaDosen} exact />
                        <Route path='/kelas-dosen' component={KelasDosen} exact />
                        <Route path='/kelas-seksi' component={KelasSeksi} exact />
                        <Route path='/pembimbing-akademik' component={PembimbingAkademik} exact />
                        <Route path='/studi-mahasiswa' component={StudiMahasiswa} exact />
                        <Route path='/krs-kosong' component={KrsKosong} exact />
                        <Route path='/dosen-belum-isi-nilai' component={DosenBelumIsiNilai} exact />


                        <Route path='*' component={NotFound} exact />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default GlobalProvider(Router);


