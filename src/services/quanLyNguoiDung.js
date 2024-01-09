import { https } from "./configServ";
export const quanLyNguoiDung = {
  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00");
  },
  timNguoiDung: (key) => {
    return https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00&tuKhoa=${key}`
    );
  },

  updateUser: (data) =>{
    return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,data)
  },

  deleteUser: (id) =>{
    return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung`,id)
  }
};

