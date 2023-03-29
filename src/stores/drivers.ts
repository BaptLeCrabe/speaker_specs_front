import { defineStore } from 'pinia'
import type { Driver } from './types'



export const useDriversStore = defineStore('Drivers', {
  state: () => ({
    driversLibrary: [] as Driver[]
  }),
  getters: {
    getLibrary(state) {
      return state.driversLibrary
    },
    getDriverById(state) {
      return (id: number) => {
        return state.driversLibrary.find(driver => driver.id === id)
      }
    }
  },
  actions: {
    setDrivers(driverArray: Driver[]) {
      this.driversLibrary = driverArray;
    },
    setDriver(driver: Driver) {
      this.driversLibrary.push(driver);
    },
    buildDriver(data: any) {
      const newDriver: Driver = data;
      return newDriver
    }
  },
})
