import { configureStore} from '@reduxjs/toolkit'; // конфигурируем Store
import userSlice from '../features/user/userSlice';
import todoSlice from '../features/todo/todoSlice';
import postSlice from '../features/post/postSlice';

export const store = configureStore({ // Store
    reducer: {
        user: userSlice,
        todo: todoSlice,
        post: postSlice,
    },
})