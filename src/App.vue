<template>
  <div>
    <AuthModal v-if="isModalVisible" @close="isModalVisible = false" />
  </div>
  <div class="bg-white m-auto w-fit w-[1555px]">
    <Header @open-auth="isModalVisible = true" />
    <div>
      <router-view />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import AuthModal from './components/authentication/AuthModal.vue'

import { ref, provide, onMounted } from 'vue'
import { useAuthStore } from './store/auth.store'
import { useCartStore } from './store/index'

const isCartVisible = ref(false)
provide('CartStatus', isCartVisible)

const isModalVisible = ref(false)
provide('ModalStatus', isModalVisible)

const authStore = useAuthStore()
const cartStore = useCartStore()

onMounted(async () => {

  if (authStore.isAuthenticated) {
    await authStore.fetchCurrentUser()
   
    if (authStore.user.cartId) {
      await cartStore.fetchCart(authStore.user.cartId)
    } else {
  
      await cartStore.createCart(authStore.user.id)
    }
  }
})

</script>
