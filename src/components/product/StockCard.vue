<template>
  <div
    class="w-[350px] transition-all hover:-translate-y-2"
    v-for="stock in stocks"
    :key="stock.name"
  >
    <img :src="stock.imagePath" :alt="stock.name" />
    <div class="pl-[20px] pt-[13px] pr-[7px] pb-[20px]">
      <div class="font-body">
        <h1 clas="font-bold text-xl">{{ stock.name }}</h1>
        <p
          class="text-xs font-medium leading-5 mt-[7px] mb-[20px] text-[#686466]"
        >
          {{ stock.description }}
        </p>
      </div>
      <div>
        <button
          class="px-9 py-2 bg-brightRaspberry rounded-lg hover:bg-pink-600"
        >
          <p class="font-bold font-body text-sm text-white">Посмотреть</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fetchStocks } from '@/backend/api/appwrite'
import type { Stock } from '@/types/stock'
import { onMounted, ref } from 'vue'

const stocks = ref<Stock[]>([])

onMounted(async () => {
  const stock = await fetchStocks()
  stocks.value = stock
})
</script>
