<template>
  <div class="bg-white shadow-2xl rounded-xl px-6 pt-[24px] pb-[29px] w-[349px] z-50">
    <div class="absolute -top-3 right-[20px] w-[23px] h-[23px] rotate-45 bg-white z-0"></div>
    
    <!-- Товары в корзине -->
    <div class="scrollable max-h-[255px] overflow-y-auto">
      <div 
        v-for="item in cartItems" 
        :key="item.cartItemId" 
        class="flex items-center gap-4 flex-wrap mb-[18px] border-b-[1px] pb-[18px]"
      >
        <div>
          <img 
            :src="item.product?.image_url || '/public/icons/image 9.png'" 
            alt="Изображение товара" 
            class="w-[64px] h-[64px] object-cover"
          />
        </div>
        <div class="flex-1">
          <div class="flex justify-between gap-12 mb-[12px]">
            <h1 class="font-body font-bold text-sm w-[146px] truncate">
              {{ item.product?.name }}
            </h1>
            <img 
              @click="removeItem(item.cartItemId)" 
              src="/public/icons/.svg" 
              alt="Удалить" 
              class="cursor-pointer w-[18px] h-[18px]"
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-5 px-3.5 rounded-lg bg-[#f3f3f7] font-body text-[#5C6370]">
              <button 
                @click="decreaseQuantity(item)" 
                class="text-[25px] font-semibold"
              >
                -
              </button>
              <span class="font-semibold text-lg">{{ item.quantity }}</span>
              <button 
                @click="increaseQuantity(item)" 
                class="text-[25px] font-semibold"
              >
                +
              </button>
            </div>
            <p class="font-body font-semibold text-xl text-goldenSaffron">
              {{ item.totalPrice }} ₽
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Сумма заказа -->
    <div class="mb-[20px] font-body flex justify-between">
      <h1 class="font-semibold text-[15px]">Сумма заказов</h1>
      <span class="font-bold text-2xl text-goldenSaffron">{{ totalPrice }} ₽</span>
    </div>

    <!-- Добавить к заказу -->
    <div class="cursor-pointer font-body font-semibold text-goldenSaffron text-base mb-[22px]">
      <h1>Добавить к заказу?</h1>
    </div>

    <!-- Рекомендуемые товары -->
    <Swiper :slides-per-view="'auto'" :space-between="16" :free-mode="true" :mousewheel="true">
      <SwiperSlide
        class="flex items-center py-3.5 pl-[17px] pr-[9px] border-[1.5px] rounded-xl"
      >
        <div class="flex items-center gap-4">
          <div>
            <img src="/public/icons/image 9.png" alt="Рекомендуемый товар" />
          </div>
          <div class="font-body">
            <h2 class="font-semibold text-[13px]">Молочный коктейль с приятным ароматом</h2>
            <span class="text-sm font-bold text-goldenSaffron">от 120 ₽</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';

// Pinia store
import { computed } from 'vue';
import { useCartStore } from '@/store';
import type { CartItem } from '@/types/cartItem';

const cartStore = useCartStore();


const cartItems = computed(() => cartStore.getItems);
const totalPrice = computed(() => cartStore.getTotalPrice);


const decreaseQuantity = (item: CartItem) => {
  if (item.quantity > 1) {
    cartStore.updateItemQuantity(item.cartItemId, -1);
  }
};

const increaseQuantity = async (item: CartItem) => {
  try {
    await cartStore.updateItemQuantity(item.cartItemId, 1);
  } catch (error) {
    console.error('Ошибка увеличения количества товара:', error);
  }
};


const removeItem = (cartItemId: string) => {
  cartStore.removeItemCart(cartItemId);
};
</script>

<style scoped>
.scrollable::-webkit-scrollbar {
  display: none;
}
</style>
