<template>
    <main class="container relative mx-auto">
        <div class="relative flex justify-between items-center mx-6 z-10">
            <div class="text-center text-white text-2xl">&lt;</div>
            <router-link to="/"><img src="../../assets/logo.svg" alt="logo" class="w-36 p-4"></router-link>
            <img src="../../assets/map.svg" alt="map">
        </div>
        <div class="flex justify-between text-center">
            <div class="basis-6/12">
                <span class="text-primary-color">往</span>
                <span class="ml-1 text-base text-white">{{ route.DepartureStopNameZh }}</span>
            </div>
            <div class="basis-6/12">
                <span class="text-primary-color">往</span>
                <span class="ml-1 text-base text-white">{{ route.DestinationStopNameZh }}</span>
            </div>
        </div>
        <div>
            <div v-for="stop in stops" :key="stop.StopID" class="relative flex items-center justify-between mx-6 my-2 h-10">
                <div class="flex items-center">
                    <div class="border border-primary-color text-center text-primary-color rounded-lg mr-2 h-10 w-20 leading-10" :class="stop.StopStatus !== 0 ? 'bg-gray-400':''">
                        {{ status(stop) }}
                    </div>
                    <span class="text-white text-lg text-left" v-text="stop.StopName.Zh_tw" />
                </div>                
                <div class="border border-primary-color rounded-full w-5 h-5"></div>
                <div class="line absolute border border-primary-color"></div>
            </div>
        </div>
    </main>    
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import EstimatedTime from '../../types/estimatedTime'
import Route from '../../types/route'
export default defineComponent({
    components: {
    },
    props: {
        routeName: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const store = useStore()
        onMounted(() => store.dispatch('getRouteEstimateTime', props.routeName))
        const stops = computed<EstimatedTime[]>(() => store.state.routeEstimateTime)
        const route = computed<Route>(()=>store.state.routes.find(elem => elem.RouteName.Zh_tw === props.routeName))
        const status = (stop: EstimatedTime) => {
            let str = ''
            switch (stop.StopStatus) {
                case 0:
                    const minutes = Math.ceil(stop.EstimateTime/60)
                    str = `${minutes}分鐘`
                    break
                case 1:
                    str = '尚未發車'
                    break
                case 2:
                    str = '交管不停靠'
                    break
                case 3:
                    str = '末班車已過'
                    break
                case 4:
                    str = '今日未營運'
                    break
            }
            return str
        }
        return {
            method: 'more',
            stops,
            route,
            status
        }

    }
})
</script>
<style lang="scss" scoped>
.line {
    bottom: -19px;
    right: 8px;
    height: 30px;
}
</style>