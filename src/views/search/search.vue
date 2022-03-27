<template>
    <main class="container">
        <div class="flex justify-between items-center">
            <router-link to="/"><img src="../../assets/logo.svg" alt="logo" class="w-36 p-4"></router-link>
            <input type="text" class="bg-transparent p-4 text-base" placeholder="選擇路線或手動輸入關鍵字">
        </div>
        <div class="bottom-0 absolute container">
            <by-number v-if="method === 'byNumber'" />
            <by-city v-else />
        </div>
    </main>    
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import byNumber from './byNumber.vue'
import byCity from './byCity.vue'
export default defineComponent({
    components: {
        byNumber,
        byCity
    },
    setup() {
        return {
            method: 'byCity'
        }
    },
})
</script>
