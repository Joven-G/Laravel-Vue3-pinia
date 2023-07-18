// import router from '@/router'
import axios from 'axios'


const axiosIns = axios.create({
// You can add your headers here
// ================================
  baseURL: 'https://dev-api.mygrosir.com',
})


// ℹ️ Add request interceptor to send the authorization header on each subsequent request after login
axiosIns.interceptors.request.use(config => {
  // Retrieve token from localStorage
  const token = JSON.parse(localStorage.getItem('authToken') || null)

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {}

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${token.access_token}` : ''
  }

  // Return modified config
  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(response => {
  return response
}, async error => {
  // Handle error
  if (error.response && error.response.status === 401) {
    // ℹ️ Logout user and redirect to login page
    // Remove "userData" from localStorage
    // localStorage.removeItem('userData')

    // Remove "accessToken" from localStorage
    localStorage.removeItem('authToken')

    // localStorage.removeItem('userAbilities')

    // If 401 response returned from api
    // await router.push('/login')
    window.location.href = '/auth/login'
  }
  else {
    return Promise.reject(error)
  }
})
export default axiosIns
