<template>
    <main class="container mx-auto">
        <img src="../assets/logo.svg" alt="logo" class="w-36 p-4">
        <div class="border border-neutral-100 rounded-full absolute circle_1" />
        <div class="border border-neutral-100 rounded-full absolute circle_2" />
        <div class="border border-neutral-100 rounded-full absolute circle_3" />
        <div class="border border-neutral-100 rounded-full absolute circle_4" />
        <div class="border border-neutral-100 rounded-full absolute circle_5" />
        <router-link :to="{ name: 'bus stop', params: { mode: 'station'}}">            
            <div class="absolute rounded-full btnBox1">            
                <button class="absolute">
                    <img src="../assets/vector.svg" alt="vector">
                    <span class="mt-2">附近公車站</span>
                </button>
            </div>
        </router-link>
        <router-link to="/search">
            <div class="absolute rounded-full btnBox2">
                <button class="absolute">
                    <img src="../assets/union.svg" alt="union">
                    <span class="mt-2">查詢公車</span>
                </button>
            </div>
        </router-link>
        <div class="absolute rounded-full btnBox3">
            <button class="absolute">
                <img src="../assets/union.svg" alt="union">
                <span class="mt-2">查詢客運</span>
            </button>
        </div>
    </main>    
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
<style lang="scss" scoped>
main {
    .logo {
        width: 144px;
    }
}

@media (min-width: 375px) {
    .circle_1 {        
        width: 86px;
        height: 86px;
        left: 214px;
        top: -51px;        
    }
    .circle_2 {        
        width: 87px;
        height: 87px;
        left: -34px;
        top: 191px;        
    }
    .circle_3 {        
        width: 50px;
        height: 50px;
        left: -30px;
        top: 356px; 
    }
    .circle_4 {        
        width: 33px;
        height: 33px;
        left: 228px;
        top: 550px;    
    }    
    .btnBox1 {        
        height: 290px;    
        width: 290px;
        left: 143px;
        top: 116px;        
        border: 1px solid #1cc8ee;
        box-shadow: 0px 0px 10px 0px #1CC8EE;
        button {
            color: #fff;
            position: absolute;
            top: 44px;
            left: 45px;
            background: linear-gradient(149.2deg, #1CC8EE 29.55%, #07738B 78.54%);
            mix-blend-mode: normal;
            box-shadow: 0px 0px 32px #1CC8EE, 1px 13px 10px #000000;
            height: 202px;
            width: 202px;
            border-radius: inherit;
            display: flex;;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            outline: none;
            margin: 0;
            padding: 0;
            border: transparent;            
            border-image-source: linear-gradient(323.99deg, #1CC8EE 65.35%, #FFFFFF 89.01%);
        }
    }
    .btnBox2 {             
        border: 2px solid #f5f5f5;
        width: 204px;
        height: 204px;
        left: 222px;
        top: 323px;
        box-shadow: 0px 11px 18px 0px #000000;
        box-shadow: 0px 0px 8px 0px #FFFFFF;
        button {            
            width: 157px;
            height: 157px;
            left: 22px;
            top: 21px; 
            background-color: #f5f5f5;
            mix-blend-mode: normal;
            box-shadow: 0px 11px 18px 0px #000000;
            box-shadow: 0px 0px 8px 0px #FFFFFF;
            border-radius: inherit;
            display: flex;;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            outline: none;
            margin: 0;
            padding: 0;
            border: transparent;
            border-image-source: linear-gradient(344.08deg, #F1F1F1 17.96%, #FFFFFF 84.68%);
        }
    }
    .btnBox3 {             
        border: 2px solid #f5f5f5;
        height: 230px;
        width: 230px;
        left: -78px;
        top: 484px;
        background: rgba(252, 212, 44, 0.07);
        box-shadow: 0px 11px 18px 0px #000000;
        box-shadow: 0px 0px 8px 0px #FFFFFF;
        button {            
            width: 168px;
            height: 168px;
            left: 31px;
            top: 29px;
            background: linear-gradient(206.57deg, #FCD42C 18.7%, #A98B0D 80.04%);
            mix-blend-mode: normal;
            box-shadow: 0px 11px 18px 0px #000000;
            box-shadow: 0px 0px 8px 0px #FFFFFF;
            border-radius: inherit;
            display: flex;;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            outline: none;
            margin: 0;
            padding: 0;
            border: transparent;
            border: 3px;
            border-image-source: linear-gradient(16.05deg, #FCD42C 49.56%, #FFFFFF 86.1%);
        }
    }
}
   
@media (min-width: 768px) {
    .circle_1 {        
        width: 170px;
        height: 170px;
        left: 499px;
        top: -103px;        
    }
    .circle_2 {        
        width: 183px;
        height: 183px;
        top: 291px;
        left: -81px;        
    }
    .circle_3 {        
        width: 92px;
        height: 92px;
        top: 630px;
        left: -37px;        
    }
    .circle_4 {        
        width: 75px;
        height: 75px;
        top: 490px;
        left: 166px;
    }
    .circle_5 {        
        width: 68px;
        height: 68px;
        top: 874px;
        left: 464px;           
    }
    .btnBox1 {        
        height: 460px;    
        width: 460px;
        top: 221px;
        left: 349px;        
        line-height: 460px;
        button {            
            top: 67px;
            left: 68px;
            height: 321px;
            width: 321px;
        }
    }
    .btnBox2 {        
        width: 324px;
        height: 324px;
        top: 532px;
        left: 495px;        
        button {            
            width: 250px;
            height: 250px;
            top: 36px;
            left: 36px;
        }
    }
    .btnBox3 {             
        height: 337px;
        width: 337px;
        top: 773px;
        left: -81px;        
        button {            
            width: 245px;
            height: 245px;            
            top: 42px;
            left: 47px;
        }
    }
}
</style>