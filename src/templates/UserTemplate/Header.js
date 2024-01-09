import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  return (
    <header className="bg-gray-800 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://phimmoiyyy.net/wp-content/uploads/2023/03/phimmoi.png"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? 'text-red-500' : '';
            }}
            to={'/'}
          >
            Trang chủ
          </NavLink>
          <NavLink to={'/cum-rap'}>Cụm rạp</NavLink>
          <NavLink to={'/'}>Tin tức</NavLink>
          <NavLink
            className={({ isActive, isPending }) => {
              return isActive ? 'text-red-500' : '';
            }}
            to={'/ung-dung'}
          >
            Ứng dụng
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* nếu người dùng chưa đăng nhập sẽ hiển thị login còn nếu đã đăng nhập
          sẽ hiển thị tên người dùng */}
          {user ? (
            <p>{user.hoTen}</p>
          ) : (
            <Link
              to={'/login'}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
        <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-transparent px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={()=>{
                const menu = document.getElementById('navItemDataToggle')
                menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block'
              }}
              >

              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-6 bg-white" id='navItemDataToggle'>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 w-full">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cụm rạp
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Tin tức
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Ứng dụng
                </a>
                <div>
                  <Link
                    to={'/login'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </nav>
      
    </header>
  );
};

export default Header;
