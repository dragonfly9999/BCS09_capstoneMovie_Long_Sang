import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilmListAsyncThunk } from '../../redux/slice/filmSlice';

const FilmList = () => {

  const {listFilm} = useSelector((state) => state.filmSlice)
  const [isAvailable,setAvailable] = useState(true)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getFilmListAsyncThunk())
  },[])

  console.log(listFilm);

  return (
    <div className='container my-4'>
        <div className="flex">
            <button className='bg-blue-800 text-white px-2 py-1 rounded mr-3' onClick={() => setAvailable(true)}>Phim đang chiếu</button>
            <button className='bg-blue-800 text-white px-2 py-1 rounded' onClick={() => setAvailable(false)}>Phim sắp chiếu</button>
        </div>
        
        <div>
          <div className="grid md:grid-cols-5 sm:grid-cols-2 my-5 ">
              {
                listFilm.map((item,index) => {
                  const {hinhAnh,tenPhim,ngayKhoiChieu,dangChieu,sapChieu,trailer,maPhim} = item
                  return isAvailable === true && dangChieu === true ? <div className="w-2/3" key={index}>
                    <Link to={`/detail/${maPhim}`}>
                      <img src={hinhAnh} alt="img" className='w-full'/>
                    </Link>
                    <Link to={`/detail/${maPhim}`}>
                      <p className="font-medium text-sm text-gray-800 hover:text-blue-800 transition-all mt-3">{tenPhim}</p>
                    </Link>
                    <span className='font-medium text-sm text-gray-600'>{ngayKhoiChieu.split('-')[0]}</span>
                    
                  </div> : (isAvailable === false && sapChieu === true ? <div className="w-2/3" key={index}>
                      <img src={hinhAnh} alt="img" className='w-full'/>
                      <p className="font-medium text-sm text-gray-800 hover:text-blue-800 transition-all mt-3">{tenPhim}</p>
                    <Link to={trailer} className=' bg-blue-800 px-2 py-1 rounded block text-white text-sm font-medium mt-1'>Xem trailer phim</Link>
                    
                  </div>  : <div></div>)
                })
              }
          </div>
        </div>

    </div>
  )
}

export default FilmList