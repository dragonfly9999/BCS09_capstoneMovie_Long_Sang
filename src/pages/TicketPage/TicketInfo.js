import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Note from "./Note";
import { seatSetting } from "../../services/seatSetting";

const TicketInfo = ({ tenPhim, gioChieu }) => {
  const dataForTable = (name,timeFilm) =>{
    const arr = []
        const currentArr = seatSetting.getItemFromStorage()
        if(currentArr!= null){
            currentArr.map((item) =>{
                const {film,time} = item
                if(film.includes(name) && time.includes(timeFilm)){
                    arr.push(item)
                }
            })
        }
        return arr
  }

  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Số ghế",
      dataIndex: "arrSeat",
      key: "arrSeat",
      render: (_,record) =>{
        const {arrSeat} = record
        return(
            arrSeat.map((item,index) =>{
                return <p className='mx-2'>{item}</p>
            })
        )
      }
    },
    {
      title: "Giá tiền",
      dataIndex: "arrPrice",
      key: "arrPrice",
      render: (_,record) =>{
        const {arrPrice} = record
        return(
          arrPrice.map((item,index) =>{
                return <p className='mx-2'>{item}</p>
            })
        )
      }
    },
  ];

  return (
    <div>
      <h2 className="text-white font-bold text-2xl uppercase text-center mb-3">
        Đặt vé
      </h2>
      <div className="flex text-white border-t-2 py-3">
        <p>Tên phim:</p>
        <span className="ml-3">{tenPhim}</span>
      </div>

      <div className="flex text-white border-t-2 py-3">
        <p>Cụm rạp:</p>
        <span className="ml-3">CGV</span>
      </div>

      <div className="flex text-white border-t-2 border-b-2 py-3">
        <p>Giờ chiếu:</p>
        <span className="ml-3">{gioChieu}</span>
      </div>

      <div className=" text-white border-b-2 py-3">
        <p className="uppercase mb-3 font-bold text-xl text-center">
          Danh sách đặt vé
        </p>
        <Table
          dataSource={dataForTable(tenPhim,gioChieu)}
          columns={columns}
          className="bg-transparent text-white"
        />
      </div>

      <Note />
    </div>
  );
};

export default TicketInfo;
