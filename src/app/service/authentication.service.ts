import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = new BehaviorSubject<boolean>(false)

  constructor(private httpClient: HttpClient) { }

  toggleLogin(state:boolean):void{
    this.isLoggedIn.next(state)
  }

  status(){
    const localData:any = localStorage.getItem('user')
    if(!localData){
      this.isLoggedIn.next(false)
      console.log('usuario nao esta logado!')
    }else{
      this.isLoggedIn.next(true)
      this.user().subscribe((response:any)=>{
        console.log('usuario logado!')
        this.isLoggedIn.next(true)
      }, error=>{
        console.log('usuario nao esta logado!')
        this.isLoggedIn.next(false)
      })

    }

  return this.isLoggedIn.asObservable();
  }

  login(data:any){
    return this.httpClient.post(API_PATH + "auth/login", data)
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

  logout(){
    const user:any = localStorage.getItem('user')
    const userobj:any = JSON.parse(user)

    const token = userobj.data.token

    const headers = new HttpHeaders({
      Authorization: 'Bearer '+token,
    })

    return this.httpClient.post(API_PATH + 'auth/logout', {allDevice: true}, {headers: headers})
  }

}
