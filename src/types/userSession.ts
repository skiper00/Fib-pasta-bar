import type { User } from "./user"
export type UserSession = Omit<User,'password'> & Partial<Pick<User,'cartId'>>