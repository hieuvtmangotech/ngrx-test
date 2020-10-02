import { PostService } from './../../core/services/post.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { getPosts, sortingPost } from './../../core/store/post/post.actions';
import { Post } from 'src/app/core/model/post.model';
import { postsSelector, postStatusSelector, postSortingSelector } from './../../core/store/post/post.selector';
import { AppState } from './../../core/store/app.state';
import {  vmFromLatest } from '../../core/utils/operators.util';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormControl } from '@angular/forms';

interface PostListVm{
  posts: Post[];
  isLoading: boolean;
  sort?: 'asc' | 'desc';
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: [
    `
    .sorting {
      min-width: 250px;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {

  vm$: Observable<PostListVm>;
  sortCtrl = new FormControl(null);

  constructor(private store: Store<AppState>,
              private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts();
    // console.log(this.postService.getPosts());
    // TODO: Selector and dispatch
    this.store.dispatch(getPosts());

    this.vm$ = vmFromLatest<PostListVm>({
      posts: this.store.pipe(select(postsSelector)),
      sort: this.store.pipe(select(postSortingSelector)),
      isLoading: this.store.pipe(select(postStatusSelector), map(status => status === 'loading'))
    });
    this.vm$.subscribe(vm => {
      this.sortCtrl.setValue(vm.sort, {emitEvent: false});
    });
    this.sortCtrl.valueChanges.subscribe(value => this.setSorting(value));
  }
    setSorting(order: 'asc' | 'desc'): any {
      this.store.dispatch(sortingPost({sort: order}));
    }

}
