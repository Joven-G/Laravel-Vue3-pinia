import axios from '@/utils/axios'

class AuthService {
  async profile() {
    try {
      const profileData = await axios.get('v1/auth/me')
      if(profileData.status === 200) {
        return profileData.data.data
      }
      
      return Promise.reject(null)
    } catch(error) {
      return Promise.reject(error)
    }
  }

  /**
   * 
   * @param {Object} user - username and email 
   * @param {String} user.username - username
   * @param {String} user.password - password
   */
  login({ username, password }) {    
    return axios.post('v1/auth', { username, password })
      .then(response => {
        const { access_token, refresh_token, expires_in } = response.data.data
        if (access_token) {
          console.log('Access Token:', access_token)
          console.log('Refresh Token:', refresh_token)
          console.log('Expires In:', expires_in)

          const expirationTime = Date.now() + parseInt(expires_in, 10) * 1000 // Parse the expires_in value as an integer

          localStorage.setItem('authToken', JSON.stringify({ access_token, refresh_token, expires_in: expirationTime.toString() }))
        }
        
        return response
      })
      .catch(error => {
        console.log('Login error', error)
        throw error
      })
  }
}

export default new AuthService()
