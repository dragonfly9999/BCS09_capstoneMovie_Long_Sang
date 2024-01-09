import { https } from './configServ';

export const quanLyRapServ = {
  getAllRap: () => {
    return https.get('/api/QuanLyRap/LayThongTinHeThongRap');
  },
  getInfoShowTimesTheater: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    );
  },
  layThongTinCumRapTheoHeThong: (maRap) =>{
    return https.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`)
  },

};
