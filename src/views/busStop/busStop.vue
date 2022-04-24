<template>
  <main class="container relative mx-auto">
    <div class="flex justify-between items-center">
      <logo />
      <router-link :to="{ name: 'bus stop', params: { mode: 'station' } }"
        ><div class="text-white mr-3">我的附近</div></router-link
      >
    </div>
    <station-list v-show="mode === 'station'" :stations="stations" />
    <route-list v-show="mode === 'route'" :routes="routes" />
  </main>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, watchEffect } from "vue";
import { useStore } from "vuex";
import routeList from "../../components/routeList.vue";
import stationList from "../../components/stationList.vue";
import logo from "../../components/logo.vue";
import Station from "@/types/station";
import Route from "@/types/route";
export default defineComponent({
  components: {
    routeList,
    stationList,
    logo,
  },
  props: {
    mode: {
      type: String,
      required: true,
    },
    stationId: String,
  },
  setup(props) {
    const store = useStore();
    onMounted(() => store.dispatch("getNearStations"));
    const stations = computed<Station[]>(() => store.state.stations);
    watchEffect(() => {
      const stationId = props.stationId;
      store.dispatch("getStopRoutes", stationId);
    });
    const routes = computed<Route[]>(() => store.state.routes);
    return {
      stations,
      routes,
    };
  },
});
</script>
