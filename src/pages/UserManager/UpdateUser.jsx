import { useFormik } from 'formik'
import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { quanLyNguoiDung } from '../../services/quanLyNguoiDung'
import { Link, useLocation } from 'react-router-dom'

const UpdateUser = () => {
  const [userData,setUser] = useState({})
  const location = useLocation()
  const [messageApi] = message.useMessage()
  useEffect(() =>{
    quanLyNguoiDung.timNguoiDung(location.pathname.split('/')[2])
    .then((result) => {
      setUser(result.data.content[0])
    }).catch((err) => {
      console.log(err)
    });
  },{})

    const {handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        reset} = useFormik({
        initialValues:{
            taiKhoan: userData.taiKhoan ? userData.taiKhoan : '',
            matKhau: userData.matKhau ? userData.matKhau : '',
            email: userData.email ? userData.email :  '',
            soDt: userData.soDT ? userData.soDT : '',
            maNhom: 'GP00',
            maLoaiNguoiDung: userData.maLoaiNguoiDung ? userData.maLoaiNguoiDung : '',
            hoTen: userData.hoTen ? userData.hoTen :''
        },
        enableReinitialize: true,
        onSubmit: (values,{resetForm}) =>{
          console.log(values);
          const upload = {}
            for (let key in values) {
              upload[key] =  values[key]
            }
            quanLyNguoiDung.updateUser(upload)
            .then((result) => {
                resetForm()
                window.location.href = "http://localhost:3000/admin/manager-user"
            }).catch((err) => {
                console.log(err)
            });
        }
    })


  return (
    <div>
        <Link to={'/admin/manager-user'} className='px-2 py-1 mb-5 mt-1 inline-block text-white bg-red-600 text-base font-medium rounded'>Quay trở lại</Link>
        <h2 className='text-2xl font-bold'>Cập nhật người dùng</h2>
        <form onSubmit={handleSubmit} className='my-5'>
        <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Tài khoản
          </label>
          <input
            type="text"
            id="taiKhoan"
            name="taiKhoan"
            className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập tài khoản"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.taiKhoan}
          />

            <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

            <label
            htmlFor="soDt"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Số điện thoại
          </label>
          <input
            type="text"
            id="soDt"
            name="soDt"
            className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập số điện thoại"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.soDt}
          />

          <label
            htmlFor="hoTen"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Họ và tên 
          </label>
          <input
            type="text"
            id="hoTen"
            name="hoTen"
            className="bg-gray-50 my-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập họ và tên"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hoTen}
          />

            <div>
          <button
            type="submit"
            className="text-white bg-black py-2 px-5 rounded-md"
          >
            Cập nhật người dùng
          </button>
        </div>
        </form>
    </div>
  )
}

export default UpdateUser