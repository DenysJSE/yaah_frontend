const API_URL = 'http://localhost:5000/api';

export interface ILesson {
  id: number;
  isDone: boolean;
  lesson: {
    id: number;
    title: string;
    award: number;
    lessonData: string;
    subject: {
      id: number,
      title: string
    }
  };
}

export const getLessons = async () => {
  try {
    const response = await fetch(`${API_URL}/lessons`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to get lessons');
    }

    return await response.json() as ILesson[];
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error;
  }
};