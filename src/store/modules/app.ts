import { defineStore } from 'pinia'
import { store } from '../index'

interface AppState {
  name: string
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    name: 'PikPak',
  }),
  getters: {
    getTest(): string {
      return this.name
    },
  },
  actions: {},
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}