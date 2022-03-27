<template>
    <div class="flex justify-between items-center m-2">
        <button class="city text-white">
            <img src="../../assets/vector.svg" alt="vector" class="w-3 m-4 mr-2.5">
            <span>選擇縣市</span>
        </button>
        <button class="manual mainBlue">手動輸入</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="mainBlue">紅</button>
        <button class="mainBlue">藍</button>
        <button class="text-white">1</button>
        <button class="text-white">2</button>
        <button class="text-white">3</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="mainBlue">綠</button>
        <button class="mainBlue">棕</button>
        <button class="text-white">4</button>
        <button class="text-white">5</button>
        <button class="text-white">6</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="mainBlue">橘</button>
        <button class="mainBlue">小</button>
        <button class="text-white">7</button>
        <button class="text-white">8</button>
        <button class="text-white">9</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button class="mainBlue">幹線</button>
        <button class="mainBlue">更多</button>
        <button class="text-white">C</button>
        <button class="text-white">0</button>
        <button><img src="../../assets/delete.svg" alt="delete"></button>
    </div>
</template>
<style lang="scss" scoped>
$mainBlue: #1CC8EE;   
button {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $mainBlue;
    background-color: transparent;
    box-shadow: 0px 0px 6px 0px $mainBlue;
    border-radius: 9px;
    flex-basis: 18%;
}
.city {
    flex-basis: 59%;
}
.manual {
    flex-basis: 39%;
}
.mainBlue {
    color: $mainBlue;
}
</style>