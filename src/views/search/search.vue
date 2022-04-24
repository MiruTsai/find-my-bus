<template>
  <main class="container h-screen mx-auto relative">
    <div class="relative flex justify-between items-center">
      <logo />
      <input
        type="text"
        class="bg-stone-800 p-4 w-52 text-base text-white rounded-md"
        placeholder="選擇路線或輸入關鍵字"
        @keydown.enter="searchRoutes"
        @blur="updateShowCity"
      />
    </div>
    <by-city :show-city="showCity" />
    <route-list :routes="routes" />
  </main>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import byNumber from "./byNumber.vue";
import byCity from "./byCity.vue";
import more from "./more.vue";
import routeList from "../../components/routeList.vue";
import logo from "../../components/logo.vue";
import Route from "@/types/route";
export default defineComponent({
  components: {
    byNumber,
    byCity,
    logo,
    more,
    routeList,
  },
  setup() {
    const store = useStore();
    const method = ref("more");
    const updateShowCity = () => {
      showCity.value = false;
    };
    const searchRoutes = (e) => {
      store.dispatch("searchRoute", e.target.value);
      updateShowCity();
    };
    const routes = computed<Route[]>(() => store.state.routes);
    const showCity = ref(true);
    return {
      method,
      routes,
      showCity,
      searchRoutes,
      updateShowCity,
    };
  },
});
</script>
