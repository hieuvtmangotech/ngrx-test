import { createAction, props, ActionType } from '@ngrx/store';
import { Post } from '../../model/post.model';


// TODO: Export type Action
export const GET_POSTS = '[Post] GetAll';
export const GET_POSTS_SUCCESS = '[Post] GetAllSuccess';
export const GET_POSTS_FAILED = '[Post] GetAllFailed';
export const GET_POST = '[Post] GetPost';
export const GET_POST_SUCCESS = '[Post] GetPostSuccess';
export const GET_POST_FAILED = '[Post] GetPostFailed';
export const CREATE_POST = '[Post] Create';
export const UPDATE_POST = '[Post] Update';
export const SORTING_POSTS = '[Post] Sorting Posts';

export const getPosts = createAction(GET_POSTS);

export const getPostsSuccess = createAction(
GET_POSTS_SUCCESS,
props<{ posts: Post[] }>()
);

export const getPostsFailed = createAction(
GET_POSTS_FAILED,
props<{ error?: string }>()
);

// // TODO: Get Post by Id
// export const getPost = createAction(
//     GET_POST,
//     props<{ id: string }>());

// export const getPostSuccess = createAction(
//     GET_POST_SUCCESS,
//     props<{ item: Post }>());

// export const getPostFailed = createAction(
//     GET_POST_FAILED,
//     props<{ error?: string }>());

// // TODO: Create Post Parameters
// export const createPost = createAction(
//     CREATE_POST,
//     props<{ post: Post }>());

// // TODO: Update Post Parameters
// export const updatePost = createAction(
//     UPDATE_POST,
//     props<{ post: Post }>());

// TODO: Sorting Post Parameters Theo Thời gian tạo
export const sortingPost = createAction(
    SORTING_POSTS,
    props<{ sort: 'asc' | 'desc' | null }>());


export type PostActions =
| ActionType<typeof getPosts>
| ActionType<typeof getPostsSuccess>
| ActionType<typeof getPostsFailed>
// | ActionType<typeof getPost>
// | ActionType<typeof getPostSuccess>
// | ActionType<typeof getPostFailed>
// | ActionType<typeof createPost>
// | ActionType<typeof updatePost>
| ActionType<typeof sortingPost>;

