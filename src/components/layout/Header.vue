<template>
  <header class="bg-white shadow-sm py-4 w-3/4 m-auto">
  
    <div class="flex gap-[235px] mx-auto items-center">
  
      <div class="flex items-center gap-12">
        <div class="flex gap-4 items-center">
          <div>
            <router-link to="/">
              <img src="/public/icons/Rectangle 76.svg" alt="Logo" class="w-16 h-16" />
            </router-link>
          </div>
        </div>

       
        <div class="font-body">
          <p class="text-lg font-semibold text-[#231F20]">
            Доставка пасты <span class="text-goldenSaffron">Москва</span>
          </p>
          <div class="flex gap-2 text-sm text-[#231F20] mt-1">
            <div class="flex items-center gap-1 font-bold">
              <img src="/public/icons/image 31 (1).svg" alt="Иконка Яндекс" class="mr-[7px]" />
              <span>Яндекс еда</span>
              <span class="text-softPink">•</span>
              <div class="flex gap-1">
                <span class="font-bold">4.8</span>
                <img src="/public/icons/.svg" alt="Звезда" class="w-4 h-4" />
              </div>
              <p class="ml-5">
                Время доставки <span class="text-softPink">•</span> от 31 мин
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div class="flex items-center gap-7">
        <button
          class="py-2 px-7 bg-gray-100 rounded-[28px] transition hover:bg-gray-200"
        >
          <p class="font-bold text-sm text-gray-500 font-body">
            Заказать звонок
          </p>
        </button>
        <span class="text-2xl font-bold font-body text-goldenSaffron">
          8 800 333-36-62
        </span>
      </div>
    </div>

 
    <nav class="mx-auto flex gap-20 mt-5">
      <ul class="flex items-center gap-[22.5px] font-semibold text-base font-body">
        <li class="hover:text-gray-500 transition">
          <router-link to="/Паста">Паста</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Пицца">Пицца</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Супы">Супы</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Салаты">Салаты</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Антипасто">Антипасто</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Напитки">Напитки</router-link>
        </li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Десерты">Десерты</router-link>
        </li>
        <li class="hover:text-gray-500 transition cursor-pointer">
          <router-link to="/Акции">Акции</router-link>
        </li>
        <li class="hover:text-gray-500 transition cursor-pointer">Комбо</li>
        <li class="hover:text-gray-500 transition">
          <router-link to="/Контакты">Контакты</router-link>
        </li>
      </ul>

      
      <div class="relative">
        <div class="flex items-center gap-4">
          <p
            v-if="!authStore.isAuthenticated"
            class="font-bold font-body text-base text-gray-500 cursor-pointer hover:text-gray-600"
            @click="openModal"
          >
            Войти
          </p>
          <p
            v-else
            class="font-bold font-body text-base text-gray-500 cursor-pointer hover:text-gray-600"
            @click="logout"
          >
            Выйти
          </p>
          <button
            class="flex items-center gap-2 px-5 py-2 bg-goldenSaffron text-[#473E43] rounded-md transition hover:bg-[#DEBD29] font-body"
            @mouseover="isCartVisible = true"
          >
            Корзина
            <div class="w-px h-5 bg-[#473E43]"></div>
            <span class="font-bold">{{ cartCount }}</span>
          </button>
        </div>
        <!-- Компонент CartPreview -->
        <div>
          <CartPreview
            v-if="isCartVisible"
            @mouseleave="isCartVisible = false"
            class="absolute top-[75px] right-1 bg-white shadow-lg rounded-lg"
          />
        </div>
      </div>
    </nav>
  </header>
</template>


<script lang="ts" setup>
import { inject,computed} from 'vue';
import type { Ref } from 'vue';
import CartPreview from '@/components/cart/CartPreview.vue'
import { useAuthStore } from '@/store/auth.store';
import { useCartStore } from '@/store';

const authStore = useAuthStore();
const cartStore = useCartStore();


const isCartVisible = inject('CartStatus');
const isModalVisible = inject<Ref<boolean>>('ModalStatus');


const cartCount = computed(() => cartStore.cartCount);

const openModal = () => {
  isModalVisible!.value = true;
};


const logout = () => {
  authStore.logoutUser(); 
};
</script>
