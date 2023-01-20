import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient: HttpClient) { }

  index(route:string) {
    return this.httpClient.get(API_PATH + route)
  }

  show(id: number, route:string) {
    return this.httpClient.get(API_PATH + route + id)
  }

  store(data:any, route:string) {
    return this.httpClient.post(API_PATH + route, data)
  }

  update(data:any, id:number, route:string) {
    return this.httpClient.put(API_PATH + route + id + "", data)
  }

  delete(id: number, route:string) {
    return this.httpClient.delete(API_PATH + route + id)
  }
}
