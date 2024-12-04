<template>
  <div class="mt-16">
    <div class="flex justify-center">
      <h1 class="font-bold font-body text-[44px]">
        Наши <span class="text-goldenSaffron">акции</span>
      </h1>
    </div>
    <div class="grid grid-areas-layout gap-7 my-12 place-items-center">
      <img src="/public/icons/image 26.svg" alt="" class="area-large" />
      <img src="/public/icons/image 27.svg" alt="" class="area-small1" />
      <img src="/public/icons/image 27.svg" alt="" class="area-small2" />
      <img src="/public/icons/image 27.svg" alt="" class="area-small3" />
      <img src="/public/icons/image 27.svg" alt="" class="area-small4" />
    </div>
    <div class="flex items-center justify-center mb-[62px]">
      <button
        class="px-[40px] py-[14px] font-body text-sm font-bold text-white bg-goldenSaffron rounded-[23px] hover:bg-[#DEBD29] transition"
      >
        Все акции
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.grid-areas-layout {
  display: grid;
  grid-template-columns: repeat(4, 260px);
  justify-content: center; 

  grid-template-areas:
    'large large small1 small3'
    'large large small2 small4';
}


.area-large {
  grid-area: large;
}

.area-small1 {
  grid-area: small1;
}

.area-small2 {
  grid-area: small2;
}

.area-small3 {
  grid-area: small3;
}

.area-small4 {
  grid-area: small4;
}
</style>
