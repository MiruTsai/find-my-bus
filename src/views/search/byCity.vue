<template>    
    <div class="flex justify-between items-center m-2">
        
        <input v-model="city" type="radio" name="citys" id="Taipei" value="Taipei">
        <label for="Taipei">台北市</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">新北市</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">基隆市</label>
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">桃園市</label>
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">新竹市</label>
    </div>
    <div class="flex justify-between items-center m-2">        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">新竹縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">苗栗縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">台中市</label>
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">南投縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">彰化縣</label>
    </div>
    <div class="flex justify-between items-center m-2"> 
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">雲林縣</label>
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">嘉義市</label>
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">嘉義縣</label>
        <input v-model="city" type="radio" name="citys" id="Tainan" value="Tainan">
        <label for="Taipei">台南市</label>
        <input v-model="city" type="radio" name="citys" id="Kaohsiung" value="Kaohsiung">
        <label for="Taipei">高雄市</label>
    </div>
    <div class="flex justify-between items-center m-2">        
        <input v-model="city" type="radio" name="citys" id="Pintung" value="Pintung">
        <label for="Pintung">屏東縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taitung" value="Taitung">
        <label for="Taitung">台東縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">花蓮縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">宜蘭縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">澎湖縣</label>
    </div>
    <div class="flex justify-between items-center m-2">
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">金門縣</label>        
        <input v-model="city" type="radio" name="citys" id="Taipei">
        <label for="Taipei">連江縣</label>
        <label for="Taipei" class="lg">
            <input type="radio" name="setting" id="Taipei">設定
        </label>        
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        return {
            city: 'Taipei'
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
    border: 1px solid var(--primary-color);
    background-color: transparent;
    box-shadow: 0px 0px 6px 0px var(--primary-color);
    border-radius: 9px;
    flex-basis: 18%;
}
label.lg {
    flex-basis: 60%;
}

</style>