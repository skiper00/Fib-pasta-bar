import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { databases } from '../backend/api/appwrite'
import { DATABASE_ID, COLLECTION_ID_CART } from '../app.constants'
import type { CartItem } from '@/types/cartItem'
import type { User } from '@/types/user'


export const useCartStore = defineStore('cart', {
  state: () => ({
    cartId: '',
    items: [] as CartItem[],
    totalPrice: 0,
    user:{
      id:'',
      email:'',
      name:'',
      cartId:'',
    } as User,
  }),

  getters: {
    getItems: state => state.items,
    getTotalPrice: state =>
      state.items.reduce((total, item) => total + item.totalPrice, 0),
    cartCount: state =>
      state.items.reduce((total, item) => total + item.quantity, 0),
  },

  actions: {
    async fetchCart(cartId: string) {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID_CART,
          [`cartId=${cartId}`]
        )

        this.cartId = cartId
        this.items = response.documents.map(doc => ({
          cartItemId: doc.$id,
          userId: doc.userId,
          productId: doc.productId,
          quantity: doc.quantity,
          price: doc.price,
          totalPrice: doc.totalPrice,
        }))
        this.totalPrice = this.items.reduce((total, item) => total + item.totalPrice, 0)
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error)
      }
    },

      async createCart(userId: string) {
      const newCartId = uuidv4()
      try {
        await databases.createDocument(DATABASE_ID, COLLECTION_ID_CART, newCartId, {
          userId,
          items: [],
          totalPrice: 0,
          quantity: 0
        })
        this.cartId = newCartId
        return newCartId
      } catch (error) {
        console.error('Ошибка создания корзины:', error)
        throw error
      }
    },

    async addItemCart(productId: string, price: number) {
      const existingItem = this.items.find(item => item.productId === productId)
      if (existingItem) {
        await this.updateItemQuantity(existingItem.cartItemId, existingItem.quantity + 1)
      } else {
        const newItem = {
          cartItemId: uuidv4(),
          productId,
          quantity: 1,
          price,
          totalPrice: price,
          userId:this.user.id 
        }
        this.items.push(newItem)
        await databases.createDocument(DATABASE_ID, COLLECTION_ID_CART, newItem.cartItemId, {
          ...newItem,
          cartId: this.cartId,
          quantity:1
        })
      }
    },

    async updateItemQuantity(cartItemId: string, quantity: number) {
      const item = this.items.find(item => item.cartItemId === cartItemId)
      if (!item) return

      item.quantity = quantity
      item.totalPrice = item.quantity * item.price

      await databases.updateDocument(DATABASE_ID, COLLECTION_ID_CART, cartItemId, {
        quantity: item.quantity,
        totalPrice: item.totalPrice,
      })
    },

    async removeItemCart(cartItemId: string) {
      const itemIndex = this.items.findIndex(item => item.cartItemId === cartItemId)
      if (itemIndex !== -1) {
        this.items.splice(itemIndex, 1)
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_CART, cartItemId)
      }
    },
  },
})
