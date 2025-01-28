<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-35 flex items-start justify-center z-30"
    @click="closeModal"
  >
    <div class="relative bg-white mt-[92px] rounded-xl" @click.stop>
      <button
        class="absolute top-4 right-4 text-gray-500 hover:text-black"
        @click="closeModal"
      >
        <img src="/public/icons/image 31.svg" alt="CloseBtn" />
      </button>

      <div class="pt-[45px] pl-10 pb-9 pr-[61px]">
        <h1 class="font-body font-bold text-[32px] text-goldenSaffron">
          {{ isLogin ? 'Вход' : 'Регистрация' }}
        </h1>
        <form @keydown.enter="handleSubmit" @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-4">
            <label>
              <span>Email</span>
              <input
                v-model="email"
                type="email"
                placeholder="Введите email"
                class="border rounded w-full p-2"
              />
            </label>
            <label>
              <span>Пароль</span>
              <input
                v-model="password"
                type="password"
                placeholder="Введите пароль"
                class="border rounded w-full p-2"
              />
            </label>
            <label v-if="!isLogin">
              <span>Имя</span>
              <input
                v-model="name"
                type="text"
                placeholder="Введите имя"
                class="border rounded w-full p-2"
              />
            </label>
          </div>
          <button class="bg-goldenSaffron hover:bg-[#DEBD29] text-white py-2 px-4 rounded mt-4">
            {{ isLogin ? 'Войти' : 'Зарегистрироваться' }}
          </button>
        </form>
        <p class="text-sm text-gray-500 mt-4">
          {{ isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?' }}
          <span
            class="text-goldenSaffron cursor-pointer hover:text-[#DEBD29]"
            @click="toggleAuthMode"
          >
            {{ isLogin ? 'Зарегистрироваться' : 'Войти' }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,inject } from 'vue';
import type { Ref } from 'vue';
import { useAuthStore } from '@/store/auth.store';

const email = ref('');
const password = ref('');
const name = ref('');
const isLogin = ref(true);

const authStore = useAuthStore();
const isModalVisible = inject('ModalStatus') as Ref<boolean>;

const closeModal = ()=>{
  isModalVisible.value = false
}



const handleSubmit = async () => {
  if (isLogin.value) {
    await authStore.loginUser(email.value, password.value);
  } else {
    await authStore.registerUser(email.value, password.value, name.value);
  }
  closeModal()
};

const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};
</script>
