import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="grid gap-5 md:grid-cols-4 sm:grid-cols-2">
          <div className='flex flex-col text-white'>
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://phimmoiyyy.net/wp-content/uploads/2023/03/phimmoi.png"
                className="h-8"
                alt="Flowbite Logo"
              />
            </Link>
            <span className='mt-3 font-medium text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est qui magnam, expedita excepturi tenetur.</span>
          </div>
          <div className="flex flex-col">
            <Link to={'/'} className='mb-3 text-white font-medium text-xl'>
              Cụm rạp
            </Link>
            <ul className="flex flex-col text-blue-500 font-medium text-sm">
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Cụm rạp nổi bật
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Cụm rạp gần nhất
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Cụm rạp mới mở
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Doanh thu
              </Link>
            </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Link to={'/'} className='mb-3 text-white font-medium text-xl'>
              Phim chiếu rạp
            </Link>
            <ul className="flex flex-col text-blue-500 font-medium text-sm">
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Phim nổi bật
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Đánh giá cao nhất
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Phim sắp chiếu
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Trailer phim
              </Link>
            </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <Link to={'/'} className='mb-3 text-white font-medium text-xl'>
              Tin tức
            </Link>
            <ul className="flex flex-col text-blue-500 font-medium text-sm">
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Tin trong ngày
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Tin hot
              </Link>
            </li>
            <li>
              <Link className="hover:underline mb-3 block md:me-6">
                Đang được quan tâm
              </Link>
            </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©
          <a href="https://flowbite.com/" className="hover:underline">
            Phimmoi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
