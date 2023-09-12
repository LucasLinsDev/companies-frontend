import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useUserStore = defineStore('user', {

    state:()=>({
      id:'',
      name:'',
      email:'',
      token:''
    }),

    actions: {

      async getTokens () {

      },

      async login (email,password) {
        try{
          const { data }= await api.post('/auth/login', {
            email: email,
            password: password,
          })
          this.$state.token = data.access_token
          this.$state.email = data.user_logged.email
          this.$state.token = data.user_logged.id
          this.$state.name = data.user_logged.name
          localStorage.setItem("token",data.access_token);
        } catch (error) {
          console.log(error);
        }
      },

      async getUser (){
        let user = await api.get('/api/users',{ headers:{
          Authorization: `Bearer ${this.$state.token}`,
        }});
      },

      async logout () {
        await api.post('/logout')
        this.resetState()
      },

      resetState () {
        this.$state.id = '',
        this.$state.name = '',
        this.$state.email = '',
        this.$state.token = ''
      }
    },
    persist: true,
})
