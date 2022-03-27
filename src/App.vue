<template>    
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App'
});
</script>

<style lang="scss">
#app {  
  background: linear-gradient(180deg, #323232 0.52%, #0A0A0B 100%);
  height: 100vh;
  width: 100vw;
}
</style>
