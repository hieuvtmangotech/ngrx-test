import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    NzIconModule,
    NzEmptyModule,
    NzCardModule,
    NzAvatarModule,
    NzSelectModule,
  ]
})
export class PostModule { }
