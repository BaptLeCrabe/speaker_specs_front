import { defineStore } from 'pinia'
import type { Speaker } from './types'



export const useSpeakersStore = defineStore('speakers', {
  state: () => ({
    speakersLibrary: [] as Speaker[]
  }),
  getters: {
    getLibrary(state) {
      return state.speakersLibrary
    },
    getSpeakerById(state) {
      return (id: number) => {
        return state.speakersLibrary.find(speaker => speaker.id === id)
      }
    }
  },
  actions: {
    setSpeakers(speakerArray: Speaker[]) {      
      this.speakersLibrary = speakerArray;
    },
    setSpeaker(speaker: Speaker) {
      this.speakersLibrary.push(speaker);
    },
    buildSpeaker(data: any) {
      const newSpeaker: Speaker = data;
      return newSpeaker
    }
  }
})
