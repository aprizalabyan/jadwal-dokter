import React from 'react'
import ReactPaginate from 'react-paginate'
import { Icon } from '@iconify/react'
// import { data } from './DataJadwal'
import person from '../assets/dok-1.jpg'

const List = ({ dataJadwal, loading }) => {
  if (loading) {
    return (<div className="mt-5">Loading</div>)
  }
  return (
    <>
    <div className="row row-cols-1 row-cols-lg-2 justify-content-center row-gap-4 mb-4">
      {dataJadwal.map((d) => {
        let jam_2 = true
        let jam_3 = true

        if (d.jam_2 !== "" || d.jam_3 !== "") {
          jam_2 = false
          jam_3 = false
        } else {
          jam_2 = true
          jam_3 = true
        }

        return (
          <div className="col" key={d.dokter}>
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="col-4 imgProfile">
                    <img src={person} alt="profile" />
                  </div>
                  <div className="col-8 ps-2">
                    <h5 className="card-title">{d.dokter}</h5>
                    <span className="card-text">Klinik {d.klinik}</span>
                    <div className="d-flex align-items-start mb-2">
                      <span className="card-text d-inline">Jam Praktek :</span>
                      <div className="d-flex flex-column ps-2">
                        <span className="jam">{d.jam_1}</span>
                        <span className="jam" hidden={jam_2}>{d.jam_2}</span>
                        <span className="jam" hidden={jam_3}>{d.jam_3}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btnPrimary w-100" /*onClick={() => handleEdit(contact.id, contact.row_id)}*/>Daftar</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    <ReactPaginate
      previousLabel={<Icon icon="ic:round-navigate-before" width="22" height="22" />}
      nextLabel={<Icon icon="ic:round-navigate-next" width="22" height="22" />}
      // breakLabel={"..."}
      // breakClassName={"break-me"}
      pageCount={7}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      // onPageChange={this.handlePageClick}
      containerClassName={"pagination"}
      // subContainerClassName={"pages-item"}
      activeClassName={"active"}/>
    </>
  )
}

export default List