<template>
  <main class="container-fluid h-screen mx-auto overflow-hidden relative">
    <logo />
    <div class="border border-neutral-100 rounded-full absolute circle_1" />
    <div class="border border-neutral-100 rounded-full absolute circle_2" />
    <div class="border border-neutral-100 rounded-full absolute circle_3" />
    <div class="border border-neutral-100 rounded-full absolute circle_4" />
    <div class="border border-neutral-100 rounded-full absolute circle_5" />
    <router-link :to="{ name: 'bus stop', params: { mode: 'station' } }">
      <div class="absolute rounded-full btnBox1">
        <button>
          <img
            src="../assets/vector.svg"
            alt="vector"
            class="absolute left-1/2 top-1/3"
          />
          <div class="mt-2">附近公車站</div>
        </button>
      </div>
    </router-link>
    <router-link to="/search">
      <div class="absolute rounded-full btnBox2">
        <button>
          <img
            src="../assets/union.svg"
            alt="union"
            class="absolute top-1/3 left-1/2"
          />
          <span class="mt-2">查詢公車</span>
        </button>
      </div>
    </router-link>
    <div class="absolute rounded-full btnBox3">
      <button>
        <!-- <img src="../assets/union.svg" alt="union">
                <span class="mt-2">查詢客運</span> -->
      </button>
    </div>
    <p
      class="
        text-white text-xs
        absolute
        bottom-2
        right-2
        md:text-base
        lg:left-12 lg:text-xl
      "
    >
      Find My Bus © Code: Miru / Design: KT
    </p>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import logo from "../components/logo.vue";
export default defineComponent({
  components: {
    logo,
  },
});
</script>
<style lang="scss" scoped>
@media (min-width: 375px) {
  .circle_1 {
    width: 86px;
    height: 86px;
    left: 214px;
    top: -5%;
  }
  .circle_2 {
    width: 87px;
    height: 87px;
    left: -2%;
    top: 20%;
  }
  .circle_3 {
    width: 50px;
    height: 50px;
    left: -5%;
    top: 60%;
  }
  .circle_4 {
    width: 33px;
    height: 33px;
    left: 228px;
    top: 90%;
  }
  .circle_5 {
    display: none;
  }
  .btnBox1 {
    height: 290px;
    width: 290px;
    right: -15%;
    top: 30%;
    border: 1px solid #1cc8ee;
    box-shadow: 0px 0px 10px 0px #1cc8ee;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 220px;
      width: 220px;
      color: #fff;
      background: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
      mix-blend-mode: normal;
      box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;
      border-radius: inherit;
      outline: none;
      border: transparent;
      border-image-source: linear-gradient(
        323.99deg,
        #1cc8ee 65.35%,
        #ffffff 89.01%
      );
    }
  }
  .btnBox2 {
    border: 2px solid #f5f5f5;
    width: 204px;
    height: 204px;
    right: -15%;
    top: 55%;
    box-shadow: 0px 11px 18px 0px #000000;
    box-shadow: 0px 0px 8px 0px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 157px;
      height: 157px;
      background-color: #f5f5f5;
      mix-blend-mode: normal;
      box-shadow: 0px 11px 18px 0px #000000;
      box-shadow: 0px 0px 8px 0px #ffffff;
      border-radius: inherit;
      outline: none;
      border: transparent;
      border-image-source: linear-gradient(
        344.08deg,
        #f1f1f1 17.96%,
        #ffffff 84.68%
      );
    }
  }
  .btnBox3 {
    border: 2px solid #f5f5f5;
    height: 230px;
    width: 230px;
    left: -20%;
    top: 78%;
    background: rgba(252, 212, 44, 0.07);
    box-shadow: 0px 11px 18px 0px #000000;
    box-shadow: 0px 0px 8px 0px #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 168px;
      height: 168px;
      background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
      mix-blend-mode: normal;
      box-shadow: 0px 11px 18px 0px #000000;
      box-shadow: 0px 0px 8px 0px #ffffff;
      border-radius: inherit;
      outline: none;
      border: transparent;
      border: 3px;
      border-image-source: linear-gradient(
        16.05deg,
        #fcd42c 49.56%,
        #ffffff 86.1%
      );
    }
  }
}

@media (min-width: 768px) {
  .circle_1 {
    width: 170px;
    height: 170px;
    left: 50%;
    top: -10%;
  }
  .circle_2 {
    width: 183px;
    height: 183px;
    top: 30%;
    left: -10%;
  }
  .circle_3 {
    width: 92px;
    height: 92px;
    top: 66%;
    left: -5%;
  }
  .circle_4 {
    width: 75px;
    height: 75px;
    top: 50%;
    left: 22%;
  }
  .circle_5 {
    width: 68px;
    height: 68px;
    bottom: 10%;
    right: 40%;
    display: block;
  }
  .btnBox1 {
    height: 460px;
    width: 460px;
    right: -5%;
    button {
      height: 321px;
      width: 321px;
    }
  }
  .btnBox2 {
    width: 324px;
    height: 324px;
    right: -10%;
    top: 55%;
    button {
      width: 250px;
      height: 250px;
    }
  }
  .btnBox3 {
    height: 337px;
    width: 337px;
    left: -10%;
    top: 79%;
    button {
      width: 245px;
      height: 245px;
      top: 42px;
      left: 47px;
    }
  }
}
@media (min-width: 1024px) {
  .circle_2 {
    width: 183px;
    height: 183px;
    top: 30%;
    left: -81px;
  }
  .btnBox1 {
    height: 460px;
    width: 460px;
    top: 20%;
    right: 7%;
    button {
      width: 357px;
      height: 357px;
    }
  }
  .btnBox2 {
    width: 300px;
    height: 300px;
    top: 55%;
    right: -5%;
    button {
      width: 230px;
      height: 230px;
    }
  }
  .btnBox3 {
    height: 337px;
    width: 337px;
    top: 75%;
    left: -5%;
    button {
      width: 245px;
      height: 245px;
      top: 42px;
      left: 47px;
    }
  }
}
@media (min-width: 1200px) {
  .circle_1 {
    width: 142px;
    height: 142px;
    left: 60%;
    top: -9%;
  }
  .circle_2 {
    width: 183px;
    height: 183px;
    top: 291px;
    left: -81px;
  }
  .circle_3 {
    width: 82px;
    height: 81px;
    top: 70%;
    left: 20%;
  }
  .circle_4 {
    width: 56px;
    height: 56px;
    top: 60%;
    left: 60%;
  }
  .circle_5 {
    width: 128px;
    height: 128px;
    bottom: -8%;
    right: 25%;
  }
  .btnBox1 {
    height: 460px;
    width: 460px;
    top: 20%;
    right: 7%;
    button {
      width: 357px;
      height: 357px;
    }
  }
  .btnBox2 {
    width: 324px;
    height: 324px;
    top: 55%;
    right: 7%;
    button {
      width: 250px;
      height: 250px;
    }
  }
  .btnBox3 {
    height: 337px;
    width: 337px;
    top: 75%;
    left: 45%;
    button {
      width: 245px;
      height: 245px;
      top: 42px;
      left: 47px;
    }
  }
}
</style>