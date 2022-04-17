<template>
    <div class="flex justify-between items-center m-2">
        <button>F</button>
        <button>R</button>
        <button>T</button>
        <button>快</button>
        <button>內科</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button>跳蛙</button>
        <button>通勤</button>
        <button>南軟</button>
        <button>先導</button>
        <button>夜間</button>
    </div>
    <div class="flex justify-between items-center m-2">
        <button>市民</button>
        <button>其他</button>
        <button class="back">回上一頁</button>
    </div>
</template>
<style lang="scss" scoped>
button {
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
button.back {
    flex-basis: 59%;
}
</style>