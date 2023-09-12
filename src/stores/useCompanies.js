import { defineStore } from 'pinia';
import { useUserStore } from './userAuth';
import { api } from "boot/axios";
const userAuth = useUserStore()
export const useCompanies = defineStore('companies', {

  state:()=> ({
    companies: null,
    categories: null,
    estates: null,
    cidades:null,
    reset:false,
    markers:[
      { id: 1, lon: -51.2277, lat: -30.0346 },
      { id: 2, lon: -52.2277, lat: -31.0346 },
    ]
  }),

  actions : {

    async getCompanies () {
      try {
        const { data } =await api.get('/companies',{headers:{
          Authorization: `Bearer ${userAuth.$state.token}`}})
          this.$state.companies = data
      } catch (error) {
        throw new Error(error)
      }

    },

    async addCompanie (company) {
      console.log(userAuth.$state.token)
      console.log(company)
      try {
        const { data } = await api.post('/companies', company)
        this.$state.reset = true
      } catch (error) {
        throw new Error(error)
      }
    },

    async getCategories () {
      try {
        const { data } =await api.get('/categories')
        this.$state.categories = Array.from(data)
        console.log(data)
      } catch (error) {
        throw new Error(error)
      }
    },

    pushMarkers (){
      this.$state.markers = [
        { id: 1, lon: -51.2277, lat: -30.0346 },
        { id: 2, lon: -52.2277, lat: -21.0346 },
        { id: 3, lon: -22.2277, lat: -31.0346 },
        { id: 4, lon: -12.2277, lat: -21.0346 },
      ]
    },

    async getStates () {
      try {
        const { data } = await api.get('/state-cities/states')
        this.$state.estates = Array.from(data)
      } catch (error) {
        throw new Error(error)
      }
    },

    async getCitiesByState (stateId) {
      console.log("disparou este")
      try {
        const { data } =await api.get(`/state-cities/cities?state_id=${stateId}`)

        this.$state.cidades = Array.from(data)
      } catch (error) {
        throw new Error(error)
      }
    },

    async getCity (latitude, longitude) {
      try {
        const { data } =await api.get(`/state-cities/city?latitude=${latitude}&longitude=${longitude}`)
        this.$state.city = data
      } catch (error) {
        throw new Error(error)
      }
    },

    resetState () {
      this.$state.companies = [],
      this.$state.city = [],
      this.$state.categories = []
    }
  }
})
