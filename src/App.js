import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Icon } from '@iconify/react'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import List from './components/List'
import Footer from './components/Footer'

function App() {
  const [tgl, setTgl] = useState(new Date())
  const [dataJadwal, setDataJadwal] = useState([])
  const [loading, setLoading] = useState(false)
  const url = 'https://script.google.com/macros/s/AKfycbzVc9YtNh_EChY-MjLGjL1Hb4GQCCnsomwggAcbu8CAcHh2YB0koO-4cnEolJnK4PQfFA/exec?sheet='

  useEffect(() => {
    setLoading(true)
    axios.get(url+tgl.getDate()).then((res) => {
      setDataJadwal(res?.data.data ?? [])
      console.log(res.data.data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tgl])

  const getTgl = (data) => {
    console.log(data)
    setTgl(data)
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex flex-column py-5">
          <h3>LAYANAN DAFTAR ONLINE</h3>
          <p>Berkunjung tanpa antri, konsultasi dengan dokter langganan Anda.</p>
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start py-4 mb-5">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 pe-lg-5 pb-5">
            <div className="border-bottom border-dark-subtle mb-4">
              <h5><Icon icon="ion:search" className="me-2" />INPUT PENCARIAN</h5>
            </div>
            <div className="d-flex flex-column gap-1 mb-4">
              <h6>Pilih Tanggal</h6>
              <Calendar setTgl={getTgl} />
            </div>
            <div className="d-flex flex-column gap-1 mb-4">
              <label htmlFor="klinik"><h6>Klinik</h6></label>
              <select name="klinik" id="klinik" className="form-select">
                <option value="semua-klinik">Semua Klinik</option>
                <option value="penyakit-dalam">Penyakit Dalam</option>
                <option value="anak">Anak</option>
                <option value="mata">Mata</option>
                <option value="gigi">Gigi</option>
                <option value="kandungan">Kandungan</option>
                <option value="kulit">Kulit</option>
              </select>
            </div>
            <div className="d-flex flex-column gap-1">
              <h6>Nama Dokter</h6>
              <input className="form-control" type="text" placeholder="Input nama"/>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-md-6 col-lg-8">
            <div className="listHeader d-flex justify-content-between align-items-center border-bottom border-dark-subtle mb-4">
              <h5><Icon icon="ic:round-list" className="me-2" />LIST DOKTER</h5>
              <span>Tanggal {tgl.getDate()} {tgl.toLocaleString('default', { month: 'long' })} {tgl.getFullYear()}</span>
            </div>
            <List dataJadwal={dataJadwal} loading={loading} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;