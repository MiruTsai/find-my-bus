import { createStore } from 'vuex'
import { busAPI } from '../request/api/busAPI'
import Station from '../types/station'
import Route from '@/types/route'
export default createStore({
  state: {
      position: {
        latitude: 0,
        longitude: 0
      },
      stations: [] as Station[],
      routes: [] as Route[]
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
    getStopRoutes (state, stopId) {
      busAPI.getStopRoutes(stopId).then((res) => {
        state.routes = res;      
      })
    }
  },
  actions: {
    getNearStations ({ commit }) {
      commit('getNearStations')
    },
    getStopRoutes ({ commit }, stopId) {
      commit('getStopRoutes', stopId)
    }
  }
})