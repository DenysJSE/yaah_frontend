export const SET_SELECTED_SUBJECT = 'SET_SELECTED_SUBJECT';

interface SetSelectedSubjectAction {
  type: typeof SET_SELECTED_SUBJECT;
  payload: string;
}

interface SubjectState {
  selectedSubject: string;
}

export const setSelectedSubject = (
  subject: string
): SetSelectedSubjectAction => {
  return {
    type: SET_SELECTED_SUBJECT,
    payload: subject
  };
};

const initialState: SubjectState = {
  selectedSubject: 'All'
};

export const subjectReducer = (
  state: SubjectState = initialState,
  action: SetSelectedSubjectAction
) => {
  switch (action.type) {
    case SET_SELECTED_SUBJECT:
      return { ...state, selectedSubject: action.payload };
    default:
      return state;
  }
};
