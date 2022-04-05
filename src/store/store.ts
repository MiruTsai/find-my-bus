import { createStore } from 'vuex'

export default createStore({
  state: {
      position: {
        latitude: 0,
        longitude: 0
      }    
  },
  mutations: {
    updatePosition (state) {
        navigator.geolocation.getCurrentPosition((position) => {
            state.position.latitude = position.coords.latitude;
            state.position.longitude = position.coords.longitude;            
        });
    }
  },
  actions: {

  },
  getters: {

  }
})