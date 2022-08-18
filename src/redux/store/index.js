

import { configureStore } from '@reduxjs/toolkit'
import user_slice from '../reducer-slices/user.slice';

export const appStore = configureStore({
    reducer: {
        user_slice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = appStore.getState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = appStore.dispatch