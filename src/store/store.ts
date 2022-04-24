import { createStore } from 'vuex'
import { busAPI } from '../request/api/busAPI'
import Station from '../types/station'
import Route from '@/types/route'
import Estimated from '@/types/estimatedTime'
export default createStore({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state') || '{}') : {
    position: {
      latitude: 0,
      longitude: 0
    },
    city: 'Taipei' as string | null | undefined,
    stations: [] as Station[],
    routes: [] as Route[],
    routeEstimateTime: [] as Estimated[],
    stationId: '' as string
  },
  mutations: {
    updatePosition(state) {
      navigator.geolocation.getCurrentPosition((position) => {
        state.position.latitude = position.coords.latitude
        state.position.longitude = position.coords.longitude
      });
    },
    updateRoutes(state, routes) {
      state.routes = routes
    },
    updateCity(state, city) {
      state.city = city
    },
    getNearStations(state) {
      fetch(`https://api.nlsc.gov.tw/other/TownVillagePointQuery/${state.position.longitude}/${state.position.latitude}`)
        .then(res => res.text())
        .then(str => {
          const dom: Document = new window.DOMParser().parseFromString(str, "text/xml")
          const city: HTMLElement | null = dom.querySelector('ctyName')
          state.city = converCityName(city?.textContent)
        })
      busAPI.getNearByStations().then((res) => {
        res.sort((a: Station, b: Station) => {
          return a.StationName.Zh_tw.localeCompare(b.StationName.Zh_tw)
        })
        state.stations = res;
      })
    },
    getStopRoutes(state, stationId: string) {
      busAPI.getStopRoutes(stationId).then((res) => {
        state.routes = res
      })
    },
    getRouteEstimateTime(state, routeName: string) {
      busAPI.getRouteEstimatedTime(routeName).then(res => state.routeEstimateTime = res)
    },
    searchRoute(state, keyword: string) {
      busAPI.searchRoute(keyword).then((res) => {
        state.routes = res
      })
    }
  },
  actions: {
    getNearStations({ commit }) {
      commit('getNearStations')
    },
    getStopRoutes({ commit }, stationId) {
      commit('getStopRoutes', stationId)
    },
    getRouteEstimateTime({ commit }, routeName) {
      commit('getRouteEstimateTime', routeName)
    },
    searchRoute({ commit }, keyword) {
      commit('searchRoute', keyword)
    },
    updateRoutes({ commit }, routes) {
      commit('updateRoutes', routes)
    },
    updateCity({ commit }, city) {
      commit('updateCity', city)
    }
  }
})

const converCityName = (text) => {
  switch (text) {
    case '台北市':
      return 'Taipei'
    case '新北市':
      return 'NewTaipei'
    case '桃園市':
      return 'Taoyuan'
    case '台中市':
      return 'Taichung'
    case '台南市':
      return 'Tainan'
    case '基隆市':
      return 'Keelung'
    case '新竹市':
      return 'Hsinchu'
    case '新竹縣':
      return 'HsinchuCounty'
    case '苗栗縣':
      return 'MiaoliCounty'
    case '彰化縣':
      return 'ChanghuaCounty'
    case '南投縣':
      return 'NantouCounty'
    case '雲林縣':
      return 'YunlinCounty'
    case '嘉義縣':
      return 'ChiayiCounty'
    case '嘉義市':
      return 'Chiayi'
    case '屏東縣':
      return 'PingtungCounty'
    case '宜蘭縣':
      return 'YilanCounty'
    case '花蓮縣':
      return 'HualienCounty'
    case '台東縣':
      return 'TaitungCounty'
    case '金門縣':
      return 'KinmenCounty'
    case '澎湖縣':
      return 'PenghuCounty'
    case '連江縣':
      return 'LienchiangCounty'
  }
}