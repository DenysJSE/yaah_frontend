import api from '../http';

export default class LessonService {
  static async getAllLessons() {
    return api.get('/lessons');
  }

  static async getLessonById(id: number) {
    return api.get(`/lessons/${id}`);
  }
}