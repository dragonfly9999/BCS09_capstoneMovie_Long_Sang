import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTicketManagerThunk } from '../../redux/slice/ticketManagerSlice';
import { render } from '@testing-library/react';

const TicketManagerPage = () => {

    const dispatch = useDispatch()
    const {listTicket} = useSelector((state) => state.ticketManagerSlice)

    useEffect(() =>{
        dispatch(getAllTicketManagerThunk())
    },[])

    const columns = [
        {
          title: 'Tên phim',
          dataIndex: 'film',
          key: 'film',
        },
        {
          title: 'Khách hàng',
          dataIndex: 'customer',
          key: 'customer',
        },
        {
          title: 'Cụm rạp',
          dataIndex: 'none',
          key: 'none',
        },
        {
          title: 'Số ghế',
          key: 'arrSeat',
          dataIndex: 'arrSeat',
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
            title: 'Giá tiền',
            key: 'arrPrice',
            dataIndex: 'arrPrice',
        },
        {
            title: 'Tùy chọn',
            key: 'moTa',
            render: (_,record) =>{
                console.log(record)
                return (<div className='space-x-3'>
                    <button className='px-2 py-1 bg-orange-600 text-white rounded'>Sửa</button>
                    <button className='px-2 py-1 bg-red-600 text-white rounded'>Xóa</button>
                </div>)
            }
        },
      ];
  return (
    <div className='container'>
        <h2 className="font-bold text-2xl mb-5">Danh sách vé đặt</h2>
        <Table dataSource={listTicket} columns={columns}/>
    </div>
  )
}

export default TicketManagerPage