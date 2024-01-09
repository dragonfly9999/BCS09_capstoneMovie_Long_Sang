import React, { useEffect, useState } from "react";
import { quanLyNguoiDung } from "../../services/quanLyNguoiDung";
import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
  },
  {
    title: "Hành động",
    key: "hanhDong",
    render: (_, record) => (
      <div className="space-x-3">
        <button onClick={() =>{
          quanLyNguoiDung.deleteUser(String(record.taiKhoan))
          .then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
          });
        }} className="text-white bg-red-600 py-2 px-4 rounded-md">
          Xóa
        </button>
        <Link to={`/admin/${record.taiKhoan}`} className="text-white bg-yellow-600 py-2 px-4 rounded-md">
          Sửa
        </Link>
      </div>
    ),
  },
];

let displayData = [],searchListData=[]

const UserManager = () => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    quanLyNguoiDung
      .getAllUser()
      .then((res) => {
        res.data.content.map((item) =>{
          const {maLoaiNguoiDung} = item
          if(maLoaiNguoiDung === 'KhachHang'){
            displayData.push(item)
          }
        })
        setListUser(displayData)
      })
      .catch((err) => {
        console.log(err);
      });

    
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl">Thêm Người Dùng</h2>
      <div>
      <input
            type="text"
            id="moTa"
            name="moTa"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-3"
            placeholder="Nhập tài khoản bạn muốn tìm kiếm"
            onChange={(event) =>{
              const searchKey = event.target.value.trim()
              searchListData = []
              searchKey === '' ?
              searchListData = displayData :
              quanLyNguoiDung.timNguoiDung(searchKey)
              .then((result) => {
                result.data.content.map((item) =>{
                  const {maLoaiNguoiDung,taiKhoan} = item
                  if(maLoaiNguoiDung === 'KhachHang' && taiKhoan.toLowerCase().includes(searchKey.toLowerCase())){
                    searchListData.push(item)
                  }
                })
                setListUser(searchListData)
              }).catch((err) => {
                console.log(err)
              });
            }}
          />
      </div>
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{
          pageSize: 6,
          // current: 3,
        }}
      />
    </div>
  );
};
export default UserManager;
