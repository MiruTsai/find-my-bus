<template>
    <ul class="m-4 p-2">
        <router-link :to="{name: 'estimated', params: {routeName: route.RouteName.Zh_tw}}" v-for="(route, i) in routes" :key="i">
            <li class="flex flex-col p-4 rounded-md" :class="i % 2 === 0 ? 'bg-stone-900' : ''">
                <div class="text-primary-color text-base my-1">
                    <span>{{ route.RouteName.Zh_tw }}</span>
                </div>
                <div class="text-white text-sm flex flex-wrap"><span class="text-primary-color">往</span><span class="ml-2" v-text="route.DestinationStopNameZh" /></div>
            </li>
        </router-link>
    </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Route from '@/types/route'

export default defineComponent({
    props: {
        routes: {
            required: true,
            type: Array as PropType<Route[]>
        }
    },
    setup() {
    },
})
</script>
