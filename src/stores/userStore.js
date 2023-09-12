import { defineStore } from 'pinia'
import { api } from 'boot/axios'



export const userStore = defineStore('user', {

  state:()=>({
    id: '',
    name: '',
    email: '',
    token: '',
  }),

  actions: {

    async login (user) {

      try {


        // const { data } = await api.post('/auth/login',user)

        // this.$state.id = data.user_logged.id
        // this.$state.name = data.user_logged.name
        // this.$state.email = data.user_logged.email
        // this.$state.token = data.access_token

        this.$state.id = 1
        this.$state.name = 'admin'
        this.$state.email = 'admin@admin'
        this.$state.token = 'token_user'
        localStorage.setItem('token','token_user')



      } catch (error) {
        console.log(error);
        throw new error
      }

    },

    async logout () {
      this.$state.id = ''
      this.$state.name = ''
      this.$state.email = ''
      this.$state.token = ''
      localStorage.removeItem('token');
    }

  }

})
