<template>
  <div>
    <div>
      <Gallery />
    </div>
    <div class="grid grid-cols-4 px-52 gap-4">
      <Card v-for="product in products" :key="product.id" v-bind="product" @add-to-cart="handleAddToCart"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/backend/api/appwrite'
import { useCartStore } from '@/store'
import { useAuthStore } from '@/store/auth.store'
import type { Product } from '@/types/product'
import Card from '@/components/product/Card.vue'
import Gallery from '@/components/home/Gallery.vue'

const products = ref<Product[]>([])
const cartStore = useCartStore()
const authStore = useAuthStore();


onMounted(async () => {
  const allProducts = await fetchProducts()
  products.value = allProducts.filter(
    product => product.categories_id.$id === '6720cb48001d859aff16',
  )
  console.log('Супы', products.value)
})

function handleAddToCart(product: Product) {
  if (!authStore.isAuthenticated) {
    alert('Вы должны войти в систему, чтобы добавить товары в корзину');
    return;
  }
  cartStore.addItemCart(product.id, product.price)
}
</script>
