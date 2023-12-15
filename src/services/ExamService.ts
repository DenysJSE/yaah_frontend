import api from '../http';

export default class ExamService {
  static async getAllExams() {
    return api.get('/exams')
  }

  static async getExamById(id: number) {
    return api.get(`/exams/${id}`)
  }

  static async updateIsDoneExamStatus(id: number) {
    return api.put(`/exams/update_is_done/${id}`)
  }
}