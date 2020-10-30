import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post/postModel'
import { PostService } from '../../services/post/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: Post;
  public posts: Array<Post>;

  public isEdit;

  constructor(
    private _router: Router,
    private _service: PostService
  ) { 
    this.isEdit = false;
   }

  ngOnInit(): void {
    this.post = new Post(Date.now().toString(),'', '', (new Date).toString());
    this.getPosts();
  }

  redirectUsuario(){
    this._router.navigate(['/usuario'])
  }

  sendPost(){
    this._service.postPosts(this.post).subscribe(
      res => {
        console.log("se guardo correctamente ", res);
        this.post = new Post(Date.now().toString(),'', '', (new Date).toString());
        this.getPosts();
      },
      err => {
        console.log("hubo un error", err)
      }
    )
  }

  getPosts(){
    this._service.getPosts().subscribe(
      res => {
        this.posts = res;
        console.log("los posts this.posts ", this.posts)
      },
      err => {
        console.log("hubo un error", err)
      }
    )
  }

  getOne(id){
    //console.log("el id", id)
    this.post = this.posts.find(v => v.id == id)
    this.isEdit = true;
  }

  cancelar(){
    this.isEdit = false;
    this.post = new Post(Date.now().toString(),'', '', (new Date).toString());
  }

  updatePost(id){    
    this._service.putPosts(id, this.post).subscribe(
      res => {
        console.log("Se actualizo correctamente ", res);
        this.post = new Post(Date.now().toString(),'', '', (new Date).toString());
        this.isEdit = false;
      },
      err => {
        console.log("error ", err)
      }
    )
  }
  


  deletePost(id){
    this._service.deletePosts(id).subscribe(
      res => {
        console.log("Se elimino correctamente ", res);
        this.posts = this.posts.filter(v => v.id != id)
      },
      err => {
        console.log("error ", err)
      }
    )
  }


}
