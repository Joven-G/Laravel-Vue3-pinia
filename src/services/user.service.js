import axios from '@/utils/axios'

class UserService {
  resetPasswordEmail(email) {
    return axios.post('/v1/request-reset-password/', { email })
  }
  resetNewPassword({ token, newPassword, confirmPassword }) {
    return axios.patch('/v1/reset-password', {
      token,
      "new_password": newPassword,
      "new_password_confirmation": confirmPassword,
    })
  }
}

export default new UserService()
