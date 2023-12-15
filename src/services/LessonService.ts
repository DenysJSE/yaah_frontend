import api from '../http';

export default class LessonService {
  static async getAllLessons() {
    return api.get('/lessons');
  }

  static async getLessonById(id: number) {
    return api.get(`/lessons/${id}`);
  }

  static async updateIsDoneLessonStatus(id: number) {
    return api.put(`/lessons/update_is_done/${id}`)
  }
}