import { Action, createReducer, on } from '@ngrx/store';
import { addPost, updatePost } from './post.action';
import { initialState } from './post.state';
import { PostsState } from './post.state';


export interface State {
        
};

const _postReducer = createReducer(
    initialState,
    on(addPost,(state,action)=>{
        let post  = {...action.post};
        post.id = (state.posts.length+1).toString()
        return {
            ...state,
            posts:[...state.posts,post] 
        }
    }),
    on(updatePost,(state,action)=>{
        let post = {...action.post}
        const updatedPostList = state.posts.map((p)=>{
          return p.id==post.id? post:p
        })   
        console.log({post},{updatedPostList});
            
        return {
            ...state,
            posts:updatedPostList   
        }
    })
    
    )

export function postReducer (state: PostsState | undefined,action: Action){
    return _postReducer(state,action)

}