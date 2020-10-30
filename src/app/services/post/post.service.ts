import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Post } from '../../models/post/postModel'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public baseURL: String;
  //public _http: HttpClient;

  constructor(
    private _http: HttpClient
  ) {
    this.baseURL = 'http://localhost:3000';
  }

  /** METODO HTTP GET : PARA OBTENER TODOS LOS POSTS */
  getPosts():Observable<any>{
    return this._http.get(`${this.baseURL}/posts`).pipe( map( res => res ) )
  }

  getOnePost(id: Number){
    return this._http.get(`${this.baseURL}/posts/${id}`).pipe( map( res => res ) )
  }

  postPosts(post: Post):Observable<any>{
    return this._http.post(`${this.baseURL}/posts`, post).pipe( map( res => res ) )
  }

  putPosts(id: Number, post: Post):Observable<any>{
    return this._http.put(`${this.baseURL}/posts/${id}`, post).pipe( map( res => res ) )
  }

  deletePosts(id: Number):Observable<any>{
    return this._http.delete(`${this.baseURL}/posts/${id}`).pipe( map( res => res ) )
  }
}
