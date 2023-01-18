import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient: HttpClient) { }

  index() {
    return this.httpClient.get(API_PATH + "noticias")
  }

  show(id: number) {
    return this.httpClient.get(API_PATH + "noticias/" + id)
  }

  store(data:any) {
    return this.httpClient.post(API_PATH + "noticias", data)
  }

  update(data:any, id:number) {
    return this.httpClient.put(API_PATH + "noticias/" + id + "", data)
  }

  delete(id: number) {
    return this.httpClient.delete(API_PATH + "noticias/" + id)
  }

  login(data:any){
    return this.httpClient.post(API_PATH + "user/login", data)
  }
}
