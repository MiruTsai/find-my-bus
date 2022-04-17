<template>
    <div class="flex justify-between items-center m-2">
        <button class="city text-white">
            <img src="../../assets/vector.svg" alt="vector" class="w-3 m-4 mr-2.5">
            <span>選擇縣市</span>
        </button>
        <button class="manual mainBlue">手動輸入</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="text-primary-color" value="紅">紅</button>
        <button class="text-primary-color" value="藍">藍</button>
        <button class="text-white" value="1">1</button>
        <button class="text-white" value="2">2</button>
        <button class="text-white">3</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="text-primary-color" value="綠">綠</button>
        <button class="text-primary-color" value="棕">棕</button>
        <button class="text-white" value="4">4</button>
        <button class="text-white" value="5">5</button>
        <button class="text-white" value="6">6</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="text-primary-color" value="橘">橘</button>
        <button class="text-primary-color" value="小">小</button>
        <button class="text-white" value="7">7</button>
        <button class="text-white" value="8">8</button>
        <button class="text-white" value="9">9</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="text-primary-color" value="幹線">幹線</button>
        <button class="text-primary-color">更多</button>
        <button class="text-white" value="C">C</button>
        <button class="text-white" value="0">0</button>
        <button><img src="../../assets/delete.svg" alt="delete"></button>
    </div>
</template>
<style lang="scss" scoped>
button {
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
.city {
    flex-basis: 59%;
}
.manual {
    flex-basis: 39%;
}
</style>