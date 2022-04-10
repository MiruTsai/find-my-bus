import Fetch from '../http';
import store  from '../../store/store';
export const busAPI = {
    getNearByStations() {
        return Fetch({
            method: 'GET',
            // 空間過濾(最大搜尋半徑為1000公尺)，語法為nearby({Lat},{Lon},{DistanceInMeters})，例如nearby(25.047675, 121.517055, 100)
            url: `/v2/Bus/Station/NearBy?%24top=30&%24spatialFilter=nearby(${store.state.position.latitude}%2C%20${store.state.position.longitude}%2C%20${'800'})&%24format=JSON`
        })
    },
    getStopRoutes(stopId) {
        return Fetch({
            method: 'GET',            
            url: `/v2/Bus/Route/City/Taipei/PassThrough/Station/${stopId}?%24top=30&%24format=JSON`
        })
    }
}

export default busAPI