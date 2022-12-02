export interface POST {
    id?:string,
    title:string,
    description:string
}

export interface PostsState{
    posts:POST[]
}

export const initialState:PostsState= {
    posts:[
        { id: '1', title:'POST-1', description:' This is a dummy post 1'},
        { id: '2', title:'POST-2', description:' This is a dummy post 1'},
        { id: '3', title:'POST-3', description:' This is a dummy post 1'},
        { id: '4', title:'POST-4', description:' This is a dummy post 1'},
    ]
}


