<template>
  <div>
    <div>
      <Gallery />
    </div>
    <div class="px-[196px]">
      <div class="flex">
        <Reviews />
      </div>
      <div class="mt-[55px] mb-[51px] mx-auto">
        <h1 class="font-body font-bold text-2xl mb-[33px]">
          Новое и популярное
        </h1>
        <div class="flex gap-10">
          <ProductCard />
        </div>
      </div>
      <div>
        <h1 class="mb-7 font-body text-3xl font-bold text-goldenSaffron">
          Пицца
        </h1>
        <div class="grid grid-cols-4 gap-4">
          <Card
            v-for="product in pizzaProducts"
            :key="product.id"
            v-bind="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </div>

      <div class="mt-12">
        <h1 class="mb-7 font-body text-3xl font-bold text-goldenSaffron">
          Напитки
        </h1>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <Card
          v-for="product in drinksProducts"
          :key="product.id"
          v-bind="product"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <div class="mt-12">
        <h1 class="mb-7 font-body text-3xl font-bold text-goldenSaffron">
          Супы
        </h1>
        <div class="grid grid-cols-4 gap-4">
          <Card
            v-for="product in soupProducts"
            :key="product.id"
            v-bind="product"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </div>
    </div>

    <div>
      <PromotionsSection />
    </div>
    <div>
      <PaymentAndDeliveryInfo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchProducts } from '@/backend/api/appwrite'
import Card from '@/components/product/Card.vue'
import type { Product } from '@/types/product'
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store/index.ts';
import Gallery from '@/components/home/Gallery.vue'
import Reviews from '@/components/home/Reviews.vue'
import PromotionsSection from '@/components/home/PromotionsSection.vue'
import PaymentAndDeliveryInfo from '@/components/home/PaymentAndDeliveryInfo.vue'
import ProductCard from '@/components/product/ProductCard.vue'

const pizzaProducts = ref<Product[]>([]);
const drinksProducts = ref<Product[]>([]);
const soupProducts = ref<Product[]>([]);

onMounted(async () => {
  const products: Product[] = await fetchProducts();
  
  pizzaProducts.value = products.filter(
    (product: Product) => product.categories_id.$id === '6720cc1f000d89ca076b'
  );
  
  drinksProducts.value = products.filter(
    (product: Product) => product.categories_id.$id === '6720cb970006c8c799c4'
  );
  
  soupProducts.value = products.filter(
    (product: Product) => product.categories_id.$id === '6720cb48001d859aff16'
  );
});


const authStore = useAuthStore();
const cartStore = useCartStore();


function handleAddToCart(product: Product) {
 if (!authStore.isAuthenticated) {
    alert('Вы должны войти в систему, чтобы добавить товары в корзину');
    return;
  }

  cartStore.addItemCart(
    product.id,
    product.price,
  );
}
</script>
