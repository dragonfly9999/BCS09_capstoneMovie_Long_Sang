import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRapServ';
import {Tabs} from 'antd'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filmScheduleAsyncThunk } from '../../redux/slice/filmScheduleSlice';

const ThongTinCumRap = ({film}) => {
  console.log(film)
    const [rap, setRap] = useState([]);
    const [films, setFilm] = useState([]);
    const dispatch = useDispatch()
    const {filmSchedule} = useSelector((state) => state.filmScheduleSlice)

    useEffect(() =>{
      quanLyRapServ
      .getAllRap()
      .then((res) => {
        setRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });  

      dispatch(filmScheduleAsyncThunk(film))
    },[])
  return (
    <div className='container'>
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          // style={{
          //   height: 220,
          // }}
          // 4 key =" abc", key="xyz"
          style={{
            border: '1px solid #8080806e',
          }}
          items={rap.map((item, index) => {
            return {
              // thuộc tính label tạo nội dung cho các nút tab
              label: <img className="w-10" src={item.logo} alt="" />,
              // key là khoá của tab, giúp cho một số chức năng sau này cần biết đang đứng ở tab nào
              key: item.maHeThongRap,
              // disabled giúp ngăn chặn người dùng bấm mở tab nếu giá trị là true
              // disabled: true,
              // children giúp hiển thị nội dung của tab mà chúng ta muốn
              children:
              <div>
                <div className="grid grid-cols-10 items-center">
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 2</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 3</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 4</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 5</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 6</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 7</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Chủ Nhật</button>
                </div>

                <div className="grid grid-cols-3 w-1/3 ml-10 md:grid-cols-3 sm:grid-cols-2 cum_rap_time">
                  {
                    filmSchedule.length != 0 ?filmSchedule.heThongRapChieu.map((item) =>{
                      const {cumRapChieu} = item
                      return(
                        cumRapChieu.map((item) =>{
                          const {lichChieuPhim} = item
                          return(
                            lichChieuPhim.map((item) =>{
                              return(
                                <Link to={`/ticket/${film}/${item.ngayChieuGioChieu.split('T')[1]}`} className='cum_rap_item font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700 sm:mt-3'>{item.ngayChieuGioChieu.split('T')[1]}</Link>
                              )
                            })
                          )
                        })
                      )
                    }) : <div>Loading...</div>
                  }
                  <Link to={`/ticket/${film}/12h30`} className='cum_rap_item font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700 sm:mt-3'> 12h30 - 14h00</Link>
                  <Link to={`/ticket/${film}/14h30`} className='cum_rap_item font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700 sm:mt-3'> 14h30 - 16h00</Link>
                  <Link to={`/ticket/${film}/19h00`} className='cum_rap_item font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700 sm:mt-3'> 19h00 - 21h00</Link>
                </div>
              </div>
              ,
            };
          })}
        />
    </div>
  )
}

export default ThongTinCumRap