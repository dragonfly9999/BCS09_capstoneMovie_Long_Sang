import { DatePicker } from "antd";

// react-router-dom
import { Routes, Route } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import MovieManager from './pages/MovieManager/MovieManager';
import UserManager from './pages/UserManager/UserManager';
import AddMovie from './pages/AddMovie/AddMovie';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import TicketPage from './pages/TicketPage/TicketPage';
import SignUp from "./pages/SignUp/SignUp";

import TicketManagerPage from "./pages/TicketManager/TicketManagerPage";
import UpdateUser from "./pages/UserManager/UpdateUser";

import Films from "./pages/Films/Films";
import TaoLichChieu from "./pages/TaoLichChieu/TaoLichChieu";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserTemplate />} path="/">
          <Route element={<HomePage />} index>
          </Route>
          <Route element = {<MovieDetail/>} path='/detail/:movieId'/>
          <Route element = {<TicketPage/>} path='/ticket/:movieId/:time'/>
        </Route>
        <Route element={<AdminTemplate />} path="/admin">
          <Route index element={<MovieManager />} />
          <Route element={<UserManager />} path="manager-user"/>
          <Route element={<AddMovie />} path="add-movie" />

          <Route element={<TicketManagerPage />} path="ticket-manager" />
          <Route element={<UpdateUser />} path=":id" />

          <Route element={<Films />} path="films" />
          <Route element={<TaoLichChieu />} path="taolichchieu/:id" />

        </Route>
        {/* // <Route element={<TaoLichChieu />}></Route> */}
        <Route element={<Login />} path="/login"></Route>
        <Route element={<SignUp />} path="/signup"></Route>
        {/* page 404  */}
      </Routes>
    </>
  );
}

export default App;
