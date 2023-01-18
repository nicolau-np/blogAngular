import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{

constructor(private http:HttpClient){}

  ngOnInit(){
    const user:any = localStorage.getItem('user')
    const userobj = JSON.parse(user)

    const token = userobj.data.token

    const headers = new HttpHeaders({
      Authorization: 'Bearer '+token,
    })

    this.http.get('http://127.0.0.1:8000/api/user', {headers: headers}).subscribe((response:any)=>{
      console.log(response)
    })

  }



}
