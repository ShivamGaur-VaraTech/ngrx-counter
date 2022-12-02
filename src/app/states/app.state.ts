import { counterReducer } from "../counter/state/counter.reducer";
import { postReducer } from "../posts/state/posts.reducer";
import { CounterStateType } from "../counter/state/counter.state";
import { PostsState } from "../posts/state/post.state";

export interface AppState{
    counter:CounterStateType,
    posts:PostsState
}

export const appReducer = {
    counter:counterReducer,
    posts:postReducer 
}