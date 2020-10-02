import { Injectable } from '@angular/core';
import { Post } from './../model/post.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs: AngularFirestore) {}

  // TODO: Get all post
  getPosts(): Observable<Post[]> {
    return this.afs.collection<Post>('posts').valueChanges({
      idField: 'id'
    });
  }

  // getPostById(id: string): any {
  //   return this.afs.collection('posts').doc<Post>(id).valueChanges().pipe(
  //     map(post => {
  //       return {
  //         ...post,
  //         id
  //       } as Post;
  //     })
  //   );
  // }
}
