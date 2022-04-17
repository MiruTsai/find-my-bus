<template>
    <ul class="p-2">
        <router-link :to="{ name: 'bus stop routes', params: { mode: 'route', stationId: station.StationID }}" v-for="(station, i) in stations" :key="i" >
            <li class="flex flex-col p-4 rounded-md" 
            :class="i % 2 === 0 ? 'bg-stone-900' : ''">
                <div class="text-primary-color text-base my-1">
                    <span>{{ station.StationName.Zh_tw }}</span>
                    <span class="text-primary-color text-sm my-1 pl-2">{{ station.StationAddress }}</span>
                </div>
                <div class="text-white text-sm flex flex-wrap">
                    <span v-for="(line, j) in station.Stops" :key="j" v-text="`${line.RouteName.Zh_tw}`" class="pr-1.5" />
                </div>
            </li>
        </router-link>
    </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useStore } from 'vuex'
import Station from '@/types/station'
export default defineComponent({
    props: {
        stations: {
            required: true,
            type: Array as PropType<Station[]>
        }
    },
    setup(props, {emit}) {
        const store = useStore()
        const changeMode = (): void => {            
            emit('changeMode', 'route')
        }
        return {
            changeMode
        }
    },
})
</script>
