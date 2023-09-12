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

        return {
          id: 1,
          name: 'admin',
          email: 'admin@admin',
          token: 'token_user',
        };

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

    }

  }

})
