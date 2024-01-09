import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilmListAsyncThunk } from '../../redux/slice/filmSlice';

const RelativeMovies = () => {
const {listFilm} = useSelector((state) => state.filmSlice)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getFilmListAsyncThunk())
  },[])
  return (
    <div className='container my-5'>
        <div className="my-2">
            <h2 className='font-medium text-xl'>Cùng thể loại</h2>
            <div className="my-3 gap-5 grid md:grid-cols-6 sm:grid-cols-3 items-center relative_movie_items">
                {
                    listFilm.slice(0,6).map((item,index) =>{
                        const {hinhAnh,danhGia,tenPhim} = item
                        return <div className="item mx-auto">
                        <Link to={`/detail/${tenPhim}`}>
                            <img src={hinhAnh}/>
                        </Link>
                        <Link to={`/detail/${tenPhim}`}>
                            <p className='font-medium text-base my-1'>{tenPhim}</p>
                        </Link>
                        
                        <div className="flex items-center justify-between">
                            <span className='font-medium text-sm'>{danhGia}/ 5 <i className="fa-star"></i></span>
                            <Link to={`/detail/${tenPhim}`} className='bg-blue-600 text-white text-sm rounded px-2 py-1'>Xem Thêm</Link>
                        </div>
                    </div>
                    })
                }

            </div>
        </div>

        <div className="my-2">
            <h2 className='font-medium text-xl'>Có thể bạn sẽ thích</h2>
            <div className="my-3 gap-5 grid md:grid-cols-6 sm:grid-cols-3 items-center relative_movie_items">
                {
                    listFilm.slice(0,6).map((item,index) =>{
                        const {hinhAnh,danhGia,tenPhim} = item
                        return <div className="item mx-auto">
                        <Link to={`/detail/${tenPhim}`}>
                            <img src={hinhAnh}/>
                        </Link>
                        <Link to={`/detail/${tenPhim}`}>
                            <p className='font-medium text-base my-1'>{tenPhim}</p>
                        </Link>
                        
                        <div className="flex items-center justify-between">
                            <span className='font-medium text-sm'>{danhGia}/ 5 <i className="fa-star"></i></span>
                            <Link to={`/detail/${tenPhim}`} className='bg-blue-600 text-white text-sm rounded px-2 py-1'>Xem Thêm</Link>
                        </div>
                    </div>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default RelativeMovies