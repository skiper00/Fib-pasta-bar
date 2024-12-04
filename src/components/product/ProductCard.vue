<template>
  <div
    class="relative pizza-card flex items-center rounded-lg gap-5 pl-[17px] py-3.5 pr-[35px] w-[255px]"
    v-for="pizza in pizzas"
    :key="pizza.id"
  >
    <div>
      <img :src="pizza.image_url" :alt="pizza.name" class="w-[71px] h-[71px]" />
    </div>
    <div class="font-body">
      <h1 class="font-bold text-lg">{{ pizza.name }}</h1>
      <p class="mt-[4px] font-semibold text-base text-goldenSaffron">
        от {{ pizza.price }} ₽
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { fetchProducts } from '@/backend/api/appwrite'
import type { Product } from '@/types/product'

const pizzas = ref<Product[]>([])

onMounted(async () => {
  const products = await fetchProducts()
  pizzas.value = products
    .filter(product => product.categories_id.$id === `6720cc1f000d89ca076b`)
    .slice(0, 4)
})
</script>

<style scoped>
.pizza-card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition:
  transform 0.3s ease,
  box-shadow 0.3s ease;
}

.pizza-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
