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

  static async updateCorrectAnswerAmount(examID: number, correctAnswer: number) {
    return api.put(`exams/update_correct_answer_amount/${examID}/correct_answer_amount/${correctAnswer}`)
  }

  static async getExamMark(examID: number) {
    return api.get(`exams/get_exam_mark/${examID}`)
  }
}