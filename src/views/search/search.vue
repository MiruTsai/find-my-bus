<template>
    <main class="container mx-auto">
        <div class="relative flex justify-between items-center mx-4">
            <router-link to="/"><img src="../../assets/logo.svg" alt="logo" class="w-36 p-4"></router-link>
            <input type="text" class="bg-stone-800 p-4 w-52 text-base text-white rounded-md" placeholder="選擇路線或輸入關鍵字">
        </div>
        <div class="bottom-0 absolute container">
            <by-number v-if="method === 'byNumber'" />
            <by-city v-else-if="method === 'byCity'" />
            <more v-else />
        </div>
    </main>    
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import byNumber from './byNumber.vue'
import byCity from './byCity.vue'
import more from './more.vue'
export default defineComponent({
    components: {
        byNumber,
        byCity,
        more
    },
    setup() {
        return {
            method: 'more'
        }
    },
})
</script>
