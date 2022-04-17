import { createStore } from 'vuex'
import { busAPI } from '../request/api/busAPI'
import Station from '../types/station'
import Route from '@/types/route'
import Estimated from '@/types/estimatedTime'
export default createStore({
  state: {
      position: {
        latitude: 0,
        longitude: 0
      },
      stations: [] as Station[],
      routes: [] as Route[],
      routeEstimateTime: [] as Estimated[],
      stationId: '' as String
  },
  mutations: {
    updatePosition (state) {
        navigator.geolocation.getCurrentPosition((position) => {
            state.position.latitude = position.coords.latitude;
            state.position.longitude = position.coords.longitude;            
        });
    },
    getNearStations (state) {      
      busAPI.getNearByStations().then((res) => {
        res.sort((a:Station, b:Station)=> {
          return a.StationName.Zh_tw.localeCompare(b.StationName.Zh_tw)
        })
        state.stations = res;      
      })
    },
    getStopRoutes (state, stationId) {
      busAPI.getStopRoutes(stationId).then((res) => {
        state.routes = res;      
      })
    },
    getRouteEstimateTime (state, routeName) {
      busAPI.getRouteEstimatedTime(routeName).then((res) => {
        state.routeEstimateTime = res;
      })
    }
  },
  actions: {
    getNearStations ({ commit }) {
      commit('getNearStations')
    },
    getStopRoutes ({ commit }, stationId) {
      commit('getStopRoutes', stationId)
    },
    getRouteEstimateTime({ commit }, routeName) {
      commit('getRouteEstimateTime', routeName)
    }
  }
})