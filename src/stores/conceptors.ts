import { defineStore } from 'pinia'
import type { Conceptor } from './types'

export const useConceptorsStore = defineStore('Conceptors', {
  state: () => ({
    conceptorsLibrary: [] as Conceptor[]
  }),
  getters: {
    getLibrary(state) {
      return state.conceptorsLibrary
    },
    getConceptorById(state) {
      return (id: number) => {
        return state.conceptorsLibrary.find(conceptor => conceptor.id === id)
      }
    }
  },
  actions: {
    setConceptors(conceptorArray: Conceptor[]) {
      this.conceptorsLibrary = conceptorArray;
    },
    setConceptor(conceptor: Conceptor) {
      this.conceptorsLibrary.push(conceptor);
    },
    buildConceptor(data: any) {
      const newConceptor: Conceptor = data;
      return newConceptor
    }
  },
})
