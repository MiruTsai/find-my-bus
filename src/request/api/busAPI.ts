import Fetch from '../http'
import store from '../../store/store'
export const busAPI = {
    getNearByStations() {
        return Fetch({
            method: 'GET',
            // 空間過濾(最大搜尋半徑為1000公尺)，語法為nearby({Lat},{Lon},{DistanceInMeters})，例如nearby(25.047675, 121.517055, 100)
            url: `/v2/Bus/Station/NearBy?%24top=30&%24spatialFilter=nearby(${store.state.position.latitude}%2C%20${store.state.position.longitude}%2C%20${'1000'})&%24format=JSON`
        })
    },
    getStopRoutes(stationId: string) {
        return Fetch({
            method: 'GET',
            url: `/v2/Bus/Route/City/${store.state.city}/PassThrough/Station/${stationId}?%24top=30&%24format=JSON`
        })
    },
    getRouteEstimatedTime(route: string) {
        return Fetch({
            method: 'GET',
            url: `/v2/Bus/EstimatedTimeOfArrival/City/${store.state.city}/${route}?%24top=30&%24format=JSON`
        })
    },
    searchRoute(keyword: string) {
        return Fetch({
            method: 'GET',
            url: `/v2/Bus/Route/City/${store.state.city}/${keyword}?%24top=30&%24format=JSON`
        })
    }
}
export default busAPI