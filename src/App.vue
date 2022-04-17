<template>
  <div class="bg w-screen h-screen" />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from "vuex";
export default defineComponent({
    name: 'App',
    setup () {
      const store = useStore();
      store.commit('updatePosition')
    }
});
</script>

<style lang="scss">
#app {  
  width: 100vw;
}
.bg {
  position: fixed;
  background: linear-gradient(180deg, #323232 0.52%, #0A0A0B 100%);
}
</style>
