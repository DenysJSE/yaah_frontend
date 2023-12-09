import api from '../http';

export default class ExamService {
  static async getAllExams() {
    return api.get('/exams')
  }

  static async getExamById(id: number) {
    return api.get(`/exams/${id}`)
  }
}