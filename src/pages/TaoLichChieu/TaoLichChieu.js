import { DatePicker } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import { Link, useLocation } from 'react-router-dom'
import "./taoLichChieu.css";
import { quanLyDanhSachPhim } from "../../services/quanLyDanhSachPhim";

const TaoLichChieu = () => {
  const [rap, setLich] = useState([]);
  const [filmData, setFilmData] = useState({});
  const [heThongRapDaChon, setHeThongRap] = useState([]);
  const [maRapDaChon, setMaRapDaChon] = useState('');
  const [ngayThangDaChon, setDatetimePicked] = useState('');
  const location = useLocation()
  useEffect(() => {
    quanLyRapServ
      .getAllRap()
      .then((res) => {
        setLich(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });

      quanLyDanhSachPhim.getMovieByID(location.pathname.split('/')[3])
      .then((result) => {
        setFilmData(result.data.content)
      }).catch((err) => {
        console.log(err)
      });

  }, []);
  const formik = useFormik({
    initialValues: {
      maPhim: filmData.maPhim ? Number(filmData.maPhim) : 0,
      ngayChieuGioChieu: String(ngayThangDaChon),
      maRap: maRapDaChon,
      giaVe: 0,
    },
    enableReinitialize: true,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      // convert dữ liệu ngày giờ

      const formData = {};
      for (let key in values) {
        formData[key] =  values[key]
      }

      quanLyPhimServ
        .taolichchieu(formData)
        .then((res) => {
          resetForm();
          window.location.href = "http://localhost:3000/admin/"
        })
        .catch((err) => {
          console.log(err);

        });
    },
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    reset,
  } = formik;

  return (
    <div>

      <Link to={'/admin/'} className="font-medium px-2 py-1 mb-3 inline-block rounded text-white bg-red-700">Trở lại</Link>

      <h2 className="font-bold text-2xl mb-5">Tạo lịch chiếu</h2>
      <div>
        <img src={filmData.hinhAnh} alt="" className="w-1/6" />
        <p className="my-2 text-base font-medium text-slate-800">{filmData.tenPhim}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="heThongRap"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hệ Thống Rạp
          </label>
          <select onChange={(data) =>{
            quanLyRapServ.layThongTinCumRapTheoHeThong(data.target.value)
            .then((result) => {
              let arr = result.data.content
              setHeThongRap(arr)
            }).catch((err) => {
              console.log(err)
            });
          }} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {rap.map((item, index) => {
              return (
                <option value={item.maHeThongRap}>{item.maHeThongRap}</option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="cumRap"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Cụm Rạp
          </label>
          <select id="maRap" name="maRap" onChange={(event) =>{
            setMaRapDaChon(event.target.value)
             }} 
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            {heThongRapDaChon.map((item) => {
              const {tenCumRap, danhSachRap,maCumRap} = item
              return (
                danhSachRap.map((item) =>{
                    const {maRap,tenRap} = item
                    return (
                      <option value={maCumRap} key={maRap}>{tenCumRap} - {tenRap}</option>
                    )
                })
                
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="ngayKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Ngày khởi chiếu giờ chiếu
          </label>
          <DatePicker
            onChange={
              (date, dateString) => {
                // setDatetimePicked(dateString)
              setFieldValue("ngayChieuGioChieu", date);
              setDatetimePicked(dateString)
            }
          }
            format={"DD/MM/YYYY hh:mm:ss"}
            // changeOnBlur={handleBlur}
          />
        </div>

        <div>
          <label
            htmlFor="giaVe"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Giá vé
          </label>
          <input
            type="text"
            id="giaVe"
            name="giaVe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Vui lòng nhập giá vé"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.giaVe}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
           ) : null} */}
        </div>

        <div>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 ">
            Chức năng
          </h2>
          <button
            type="submit"
            className="text-white bg-black py-2 px-5 rounded-md"
          >
            Tạo lịch chiếu
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaoLichChieu;
