import api from '../http';

export default class UserService {
  static async getUser() {
    return api.get('users/get_user')
  }
}