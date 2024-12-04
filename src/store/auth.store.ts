import { defineStore } from 'pinia'
import { account, databases } from '@/backend/api/appwrite'
import { useCartStore } from '@/store/index'
import { DATABASE_ID, USER_ID } from '@/app.constants'
import { register, login, logout } from '@/auth/authService'
import type { User } from '@/types/user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user:{
      id:'',
      email:'',
      name:'',
      cartId:'',
    } as User,
    isAuthenticated: false,
  }),

  actions: {
    async fetchCurrentUser() {
      try {
        const user = await account.get() 
        if (user) {
          const userDoc = await databases.getDocument(DATABASE_ID, USER_ID, user.$id)
          this.user = { 
            id:user.$id,
            email:user.email,
            name:user.name,
            password:user.password,
            cartId:userDoc.cartId || ''
          }

          this.isAuthenticated = true
          const cartStore = useCartStore()

          if (this.user.cartId) {
        
            await cartStore.fetchCart(this.user.cartId)
          } else {
            // Если корзины нет, создаем новую
            const newCartId = await cartStore.createCart(this.user.id)
            await databases.updateDocument(DATABASE_ID, USER_ID, this.user.id, { cartId: newCartId })
            this.user.cartId = newCartId
          }
        }
      } catch (error) {
        console.error('Ошибка получения текущего пользователя:', error)
        this.isAuthenticated = false
      }
    },

    async registerUser(email: string, password: string, name: string) {
      try {
        const response = await register(email, password, name)
        this.user = {
          id:response.$id,
          email:response.email,
          name:response.name,
          cartId:'',
        }
        this.isAuthenticated = true
        const cartStore = useCartStore()
        await cartStore.fetchCart(this.user.id) 
      } catch (error) {
        console.error('Ошибка регистрации:', error)
      }
    },

    async loginUser(email: string, password: string) {
      try {
        await login(email, password)
        const currentUser = await account.get()
        const userDoc = await databases.getDocument(DATABASE_ID, USER_ID, currentUser.$id)
        this.user = { 
          id:currentUser.$id,
          email:currentUser.email,
          name:currentUser.name,
          cartId:userDoc.cartId || ''
        }
        this.isAuthenticated = true

        const cartStore = useCartStore()
        if (this.user.cartId) {
          // Загружаем корзину по cartId
          await cartStore.fetchCart(this.user.cartId)
        } else {
          // Если корзины нет, создаем новую
          const cartId = await cartStore.createCart(this.user.id)
          this.user.cartId = cartId
          await databases.updateDocument(DATABASE_ID, USER_ID, this.user.id, { cartId })
        }
      } catch (error) {
        console.error('Ошибка входа:', error)
      }
    },

    async logoutUser() {
      try {
        await logout()
        this.user = {
          id:'',
          email:'',
          name:'',
          cartId:''
        }
        this.isAuthenticated = false
      } catch (error) {
        console.error('Ошибка выхода:', error)
      }
    },
  },
})
