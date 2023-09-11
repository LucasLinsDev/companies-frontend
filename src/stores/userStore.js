import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import useLoading from 'src/composables/useLoading'
const { showLoading, hideLoading } = useLoading()
export const userStore = defineStore('user', {

  state:()=>({
    id: '',
    name: '',
    email: '',
    token: '',
  }),

  actions: {

    async login (user) {
      showLoading()
      try {
        console.log(user)

        const { data } = await api.post('/auth/login',user)

        this.$state.id = data.user_logged.id
        this.$state.name = data.user_logged.name
        this.$state.email = data.user_logged.email
        this.$state.token = data.access_token

      } catch (error) {
        throw new error
      }
      hideLoading()
    }

  }

})
