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
    case '?????????':
      return 'Taipei'
    case '?????????':
      return 'NewTaipei'
    case '?????????':
      return 'Taoyuan'
    case '?????????':
      return 'Taichung'
    case '?????????':
      return 'Tainan'
    case '?????????':
      return 'Keelung'
    case '?????????':
      return 'Hsinchu'
    case '?????????':
      return 'HsinchuCounty'
    case '?????????':
      return 'MiaoliCounty'
    case '?????????':
      return 'ChanghuaCounty'
    case '?????????':
      return 'NantouCounty'
    case '?????????':
      return 'YunlinCounty'
    case '?????????':
      return 'ChiayiCounty'
    case '?????????':
      return 'Chiayi'
    case '?????????':
      return 'PingtungCounty'
    case '?????????':
      return 'YilanCounty'
    case '?????????':
      return 'HualienCounty'
    case '?????????':
      return 'TaitungCounty'
    case '?????????':
      return 'KinmenCounty'
    case '?????????':
      return 'PenghuCounty'
    case '?????????':
      return 'LienchiangCounty'
  }
}