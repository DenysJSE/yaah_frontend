import api from '../http';

export default class SubjectService {
  static async getSubjectsTitle() {
    return api.get('/subjects');
  }
}