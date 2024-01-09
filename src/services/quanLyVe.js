import axios from "axios"

export const quanLyVe = {
    getTicket: () =>{
        return axios.get('/data/danhSachGhe.json')
    }
}