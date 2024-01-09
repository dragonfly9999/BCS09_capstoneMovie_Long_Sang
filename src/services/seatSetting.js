
export const seatSetting = {
    addSeatListToStorage: (data) =>{
        localStorage.setItem('seatList',JSON.stringify(data))
    },

    getItemFromStorage: () =>{
        return JSON.parse(localStorage.getItem('seatList'))
    },

    getItemFromStorageByNameAndTime: (name,time) =>{
        const arr = []
        const currentArr = JSON.parse(localStorage.getItem('seatList'))
        if(currentArr!= null){
            currentArr.map((item,index) =>{
                const {film,time} = item
                if(film.includes(name) && time.includes(time)){
                    arr.push(item)
                }
            })
        }
        return arr
    },

    removeSeatList: () =>{
        localStorage.removeItem('seatList')
    }
}