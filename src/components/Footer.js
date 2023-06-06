import React from 'react'
import logo from '../assets/logo-outer-white.svg'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <section id="footer" className="d-flex flex-column align-items-center justify-content-center gap-4 pb-4">
      <div className="container d-flex flex-column flex-md-row py-5">
        <div className="col-12 col-md-6 d-flex flex-column gap-4 px-4 pb-5 pb-md-0">
          <div className="d-flex align-items-center gap-2">
            <img src={logo} alt="logo" />
            <span className="fw-semibold fs-6">RS. HARAPAN BANGSA</span>
          </div>
          <span>Memberikan pelayanan dengan sepenuh hati untuk anda. Berkunjung tanpa antri, konsultasi dengan dokter langganan anda.</span>
          <div className="d-flex flex-column gap-2">
            <span className="fw-semibold fs-6">Social Media</span>
            <div className="d-flex gap-2">
              <Icon icon="ri:facebook-fill" color="white" width="20" height="20"/>
              <Icon icon="mdi:instagram" color="white" width="20" height="20"/>
              <Icon icon="mdi:twitter" color="white" width="20" height="20"/>
              <Icon icon="mdi:youtube" color="white" width="20" height="20"/>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column gap-2 pt-2 px-4 pb-5 pb-md-0">
          <h6 className="pb-1 pb-md-3">About Us</h6>
          <span><a href="#link" className="link">Privacy Policy</a></span>
          <span><a href="#link" className="link">Blog</a></span>
          <span><a href="#link" className="link">Patient Story</a></span>
          <span><a href="#link" className="link">Contact Us</a></span>
          <span><a href="#link" className="link">Terms of Service</a></span>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column gap-2 pt-2 px-4">
          <h6 className="pb-1 pb-md-3">Services</h6>
          <span><a href="#link" className="link">Call Center</a></span>
          <span><a href="#link" className="link">Rawat Jalan</a></span>
          <span><a href="#link" className="link">Rawat Inap</a></span>
          <span><a href="#link" className="link">Medical Check Up</a></span>
          <span><a href="#link" className="link">Vaksin</a></span>
        </div>
      </div>
      <span className="copyright">Copyright © 2023 RS Harapan Bangsa. All Rights Reserved.</span>
    </section>
  )
}

export default Footer