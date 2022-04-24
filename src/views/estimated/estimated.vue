<template>
  <main class="container relative mx-auto">
    <div class="relative flex items-center justify-center z-10 w-full">
      <router-link to
        ><div
          class="absolute top-6 left-0 text-white text-3xl ml-2"
          @click="$router.back"
        >
          &lt;
        </div></router-link
      >
      <logo />
    </div>
    <!-- <div class="flex justify-between text-center">
            <div class="basis-6/12">
                <span class="text-primary-color">往</span>
                <span class="ml-1 text-base text-white">{{ route.DepartureStopNameZh }}</span>
            </div>
            <div class="basis-6/12">
                <span class="text-primary-color">往</span>
                <span class="ml-1 text-base text-white">{{ route.DestinationStopNameZh }}</span>
            </div>
        </div> -->
    <div>
      <div
        v-for="(stop, i) in stops"
        :key="stop.StopID"
        class="relative flex items-center justify-between mx-2 my-2 h-10"
      >
        <div class="flex items-center">
          <div
            class="
              border border-primary-color
              text-center text-primary-color
              rounded-lg
              mr-2
              h-10
              w-20
              leading-10
            "
            :class="{
              'bg-gray-400': stop.StopStatus !== 0,
              'border-gray-400': stop.StopStatus !== 0,
              'bg-primary-color': status(stop) === '進站中',
              'text-black': status(stop) === '進站中' || stop.StopStatus !== 0,
            }"
          >
            {{ status(stop) }}
          </div>
          <span
            class="text-white text-lg text-left"
            v-text="stop.StopName.Zh_tw"
          />
        </div>
        <div
          class="border border-primary-color rounded-full w-5 h-5"
          :class="status(stop) === '進站中' ? 'bg-primary-color' : ''"
        />
        <div
          class="line absolute border border-primary-color"
          :class="stops.length - 1 === i ? 'hidden' : ''"
        ></div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import EstimatedTime from "../../types/estimatedTime";
import logo from "../../components/logo.vue";
import Route from "../../types/route";
export default defineComponent({
  components: {
    logo,
  },
  props: {
    routeName: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    onMounted(() => store.dispatch("getRouteEstimateTime", props.routeName));
    const stops = computed<EstimatedTime[]>(
      () => store.state.routeEstimateTime
    );
    const route = computed<Route>(() =>
      store.state.routes.find(
        (elem) => elem.RouteName.Zh_tw === props.routeName
      )
    );
    const status = (stop: EstimatedTime) => {
      let str = "";
      switch (stop.StopStatus) {
        case 0:
          const minutes = Math.ceil(stop.EstimateTime / 60);
          if (minutes === 0) {
            str = "進站中";
          } else {
            str = `${minutes}分鐘`;
          }
          break;
        case 1:
          str = "尚未發車";
          break;
        case 2:
          str = "交管不停靠";
          break;
        case 3:
          str = "末班車已過";
          break;
        case 4:
          str = "今日未營運";
          break;
      }
      return str;
    };
    return {
      method: "more",
      stops,
      route,
      status,
    };
  },
});
</script>
<style lang="scss" scoped>
.line {
  bottom: -19px;
  right: 8px;
  height: 30px;
}
</style>