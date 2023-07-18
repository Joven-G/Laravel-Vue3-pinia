import AuthService from '@/services/auth.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const initToken = {
  accessToken: null,
  refreshToken: null,
}

export const useAuthStore = defineStore("auth", () => {
  const accountData = ref(null)

  const tokens = ref({ ...initToken })


  /**
   * 
   * @param {Object} user - username and email 
   * @param {String} user.username - username
   * @param {String} user.password - password
   */
  async function login(user) {    
    try {
      const response = await AuthService.login({ password: user.password, username: user.email })
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data.data

        tokens.value = { accessToken: access_token, refreshToken: refresh_token }

        const userProfileData = await AuthService.profile()

        console.log(userProfileData)
        accountData.value = userProfileData
        
        return Promise.resolve(response)
      } else {
        loginFailure()
          
        return Promise.reject()
      }
    } catch (error) {
      console.log(error)
      loginFailure()
        
      return Promise.reject(error)
    }
  }
  function loginFailure() {
    accountData.value = null
    tokens.value = { ...initToken }
  }
  
  return { login, accountData, tokens, loginFailure }
})
