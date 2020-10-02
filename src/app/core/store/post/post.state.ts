import { Post } from '../../model/post.model';

export interface PostState {
    items: Post[];
    currentItem: Post;
    status: 'idle' | 'loading' | 'error';
    error?: string;
    sort: 'asc' | 'desc' | null;
}

