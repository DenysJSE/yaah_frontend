import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/types.ts';

interface IUserState {
  user: IUser;
  isAuthenticated: boolean;
}

const initialState: IUserState = {
  user: {
    id: 0,
    nickname: '',
    email: '',
    password: '',
    created_at: '',
    coins: 0,
    roles: {
      id: 0,
      value: '',
      description: '',
    },
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUser } = userSlice.actions;
export default userSlice.reducer;