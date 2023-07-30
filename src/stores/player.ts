import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
  id: 'player',
  state: () => ({
    id: 0
  }),
  actions: {
    async play(id: number) {
      if (id == this.id) {
        return
      }
    }
  }
})
