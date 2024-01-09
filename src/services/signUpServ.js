import { https } from "./configServ";

export const SignUpServ = {
  signup: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
};
