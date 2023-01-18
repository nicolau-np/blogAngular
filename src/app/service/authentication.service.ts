import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(data:any){
    return this.httpClient.post(API_PATH + "user/login", data)
  }

  user(){
    const user:any = localStorage.getItem('user')
    const userobj:any = JSON.parse(user)

    const token = userobj.data.token

    const headers = new HttpHeaders({
      Authorization: 'Bearer '+token,
    })

    return this.httpClient.get(API_PATH + 'user', {headers: headers})
  }

}
