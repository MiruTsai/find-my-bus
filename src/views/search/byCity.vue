<template>
    <div v-show="showCity" class="w-full absolute bottom-0 bg-black">
        <div class="flex justify-between items-center m-2">        
            <input v-model="city" type="radio" name="citys" id="Taipei" value="Taipei">
            <label for="Taipei">台北市</label>        
            <input v-model="city" type="radio" name="citys" id="NewTaipei" value="NewTaipei">
            <label for="NewTaipei">新北市</label>        
            <input v-model="city" type="radio" name="citys" id="Keelung" value="Keelung">
            <label for="Keelung">基隆市</label>
            <input v-model="city" type="radio" name="citys" id="Taoyuan" value="Taoyuan">
            <label for="Taoyuan">桃園市</label>
            <input v-model="city" type="radio" name="citys" id="Hsinchu" value="Hsinchu">
            <label for="Hsinchu">新竹市</label>        
        </div>
        <div class="flex justify-between items-center m-2">           
            <input v-model="city" type="radio" name="citys" id="HsinchuCounty" value="HsinchuCounty">
            <label for="HsinchuCounty">新竹縣</label>
            <input v-model="city" type="radio" name="citys" id="MiaoliCounty" value="MiaoliCounty">
            <label for="MiaoliCounty">苗栗縣</label>        
            <input v-model="city" type="radio" name="citys" id="Taichung" value="Taichung">
            <label for="Taichung">台中市</label>
            <input v-model="city" type="radio" name="citys" id="NantouCounty" value="NantouCounty">
            <label for="NantouCounty">南投縣</label>        
            <input v-model="city" type="radio" name="citys" id="ChanghuaCounty" value="ChanghuaCounty">
            <label for="ChanghuaCounty">彰化縣</label>        
        </div>
        <div class="flex justify-between items-center m-2">
            <input v-model="city" type="radio" name="citys" id="YunlinCounty" value="YunlinCounty">
            <label for="YunlinCounty">雲林縣</label>
            <input v-model="city" type="radio" name="citys" id="Chiayi" value="Chiayi">
            <label for="Chiayi">嘉義市</label>
            <input v-model="city" type="radio" name="citys" id="ChiayiCounty" value="ChiayiCounty">
            <label for="ChiayiCounty">嘉義縣</label>
            <input v-model="city" type="radio" name="citys" id="Tainan" value="Tainan">
            <label for="Tainan">台南市</label>
            <input v-model="city" type="radio" name="citys" id="Kaohsiung" value="Kaohsiung">
            <label for="Kaohsiung">高雄市</label>        
        </div>
        <div class="flex justify-between items-center m-2">        
            <input v-model="city" type="radio" name="citys" id="PingtungCounty" value="PingtungCounty">
            <label for="PingtungCounty">屏東縣</label>        
            <input v-model="city" type="radio" name="citys" id="TaitungCounty" value="TaitungCounty">
            <label for="TaitungCounty">台東縣</label>        
            <input v-model="city" type="radio" name="citys" id="HualienCounty" value="HualienCounty">
            <label for="HualienCounty">花蓮縣</label>
            <input v-model="city" type="radio" name="citys" id="YilanCounty" value="YilanCounty">
            <label for="YilanCounty">宜蘭縣</label>        
            <input v-model="city" type="radio" name="citys" id="PenghuCounty" value="PenghuCounty">
            <label for="PenghuCounty">澎湖縣</label>
        </div>
        <div class="flex justify-start items-center m-2">
            <input v-model="city" type="radio" name="citys" id="KinmenCounty" value="KinmenCounty">
            <label for="KinmenCounty">金門縣</label>        
            <input v-model="city" type="radio" name="citys" id="LienchiangCounty" value="LienchiangCounty">
            <label class="ml-2.5" for="LienchiangCounty">連江縣</label>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
    props: {
        showCity: {
            required: true,
            type: Boolean
        }
    },
    setup(props) {
        const store = useStore()
        const city = ref('Taipei')
        const showCity = toRef(props, 'showCity')
        watch (city, (newValue) => {
            store.dispatch('updateCity', newValue)
            store.commit('updateRoutes', [])
        })
        return {
            city,
            showCity
        }
    },
})
</script>
<style lang="scss" scoped>
input[type='radio'] {
    display: none;
}
input[type='radio']:checked + label{
    background-color: var(--primary-color);
    color: #000000;
}

label {
    color: var(--primary-color);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 18%;
    border: 1px solid var(--primary-color);
    background-color: transparent;
    box-shadow: 0px 0px 6px 0px var(--primary-color);
    border-radius: 9px;
}
label.lg {
    flex-basis: 59%;
}

</style>