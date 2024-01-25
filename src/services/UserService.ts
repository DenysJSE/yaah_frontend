import api from '../http';

interface IUpdatePassword {
  userID: number
  userPassword: string
  newUserPassword: string
}

interface IUpdateNickname {
  userID: number
  newNickname: string
}

export default class UserService {
  static async getUser() {
    return api.get('users/get_user')
  }

  static async checkNicknameExist(nickname: string) {
    return api.get(`users/check_nickname/${nickname}`)
  }

  static async checkEmailExist(email: string) {
    return api.get(`users/check_email/${email}`)
  }

  static async updatePassword({userID, userPassword, newUserPassword}: IUpdatePassword) {
    return api.put('users/update_password', {userID, userPassword, newUserPassword})
  }

  static async updateUserNickname({userID, newNickname}: IUpdateNickname) {
    return api.put('users/update_nickname', {userID, newNickname})
  }
}