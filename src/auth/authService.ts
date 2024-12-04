import { ID } from 'appwrite'
import { account, databases } from '@/backend/api/appwrite'
import { DATABASE_ID, USER_ID } from '@/app.constants'
import {useCartStore} from '@/store/index'

export async function register(email: string, password: string, name: string,) {
  try {
    const response = await account.create(ID.unique(), email, password, name)
    console.log('Пользователь зарегистрирован:', response)
    const cartStore = useCartStore();
    const cartId = await cartStore.createCart(response.$id)
    await databases.updateDocument(DATABASE_ID,USER_ID,response.$id,{cartId})
    return response
  } catch (error) {
    console.error('Ошибка регистрации:', error)
    throw error
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await account.createEmailPasswordSession(email, password)
    console.log('Пользователь вошел в систему:', response)
    return response
  } catch (error) {
    console.error('Ошибка входа:', error)
    throw error
  }
}

export async function logout() {
  try {
    await account.deleteSession('current')
    console.log('Пользователь вышел из системы')
  } catch (error) {
    console.error('Ошибка выхода:', error)
    throw error
  }
}
