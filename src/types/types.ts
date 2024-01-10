// Components Interfaces
export interface ISubjectTitleDuration {
  description: string,
  additionalInfo: string
}

// Layouts Interfaces
export interface IHeader {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export interface IProfilePopUp {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  setIsProfileVisible: (isProfileVisible: boolean) => void;
}

export interface ISideBar {
  isDark: boolean;
}

// Auth Page Interfaces
export interface ILoginForm {
  handleAuthMode: () => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface IRegistrationForm {
  handleAuthMode: () => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

// Exams Page Interfaces
export interface IExam {
  id: number
  isDone: boolean
  exam: {
    id: number
    award: string
    title: string
    description: string
    questions: {
      id: number
      question: string
      option: {
        id: number
        isCorrect: boolean
        text: string
      }
    }
    subject: {
      id: number
      title: string
      description: string
      courseDuration: number
      examsNumber: number
      lessonNumber: number
    }
  }
}

export interface ExamInterface {
  id: number;
  title: string;
  subjectTitle: string;
  testAward: string;
  isDone: boolean
}

export interface IExamOption {
  id: number;
  text: string;
  isCorrect: boolean
}

export interface IExamQuestion {
  id: number;
  question: string;
  option: IExamOption[];
}

export interface IExamExam {
  id: number;
  isDone: boolean;
  award: string;
  description: string;
  questions: IExamQuestion[];
}

// Lesson Page Interfaces
export interface ILessons {
  id: number,
  isDone: boolean,
  lesson: {
    id: number
    title: string
    award: string
    lessonData: string
    subject: {
      id: number
      title: string
      description: string
      examNumber: number
      lessonNumber: number
      courseDuration: number
    }
  }
}

export interface ILessonCard {
  id: number;
  title: string;
  subjectTitle: string;
  examsAmount: string;
  isDone: boolean
}

export interface ILesson {
  id: number
  isDone: boolean
  lesson: {
    id: number
    title: string
    award: number
    lessonData: string
  }
}

// Profile Page Interfaces
export interface IUser {
  id: number;
  nickname: string;
  email: string;
  password?: string
  coins: number;
  created_at: string
  roles: {
    id: number;
    value: string;
    description: string;
  };
}