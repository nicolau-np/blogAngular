import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { Noticia } from '../Models/Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private httpClient: HttpClient) { }

  index() {
    return this.httpClient.get<Noticia[]>(API_PATH + "noticias")
  }

  show(id: number) {
    return this.httpClient.get<Noticia>(API_PATH + "noticias/" + id)
  }

  store(noticia: Noticia) {
    return this.httpClient.post<Noticia>(API_PATH + "noticias", noticia)
  }

  update(noticia: Noticia) {
    return this.httpClient.put<Noticia>(API_PATH + "noticias/" + noticia.id + "", noticia)
  }

  delete(id: number) {
    return this.httpClient.delete(API_PATH + "noticias/" + id).toPromise()
  }
}
