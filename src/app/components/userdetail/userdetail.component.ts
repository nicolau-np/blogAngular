import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{

constructor(private auth: AuthenticationService){}

user:any

  ngOnInit(){
    this.auth.status().subscribe((response:any)=>{
      //console.log(response)
    })

    this.auth.user().subscribe((response:any)=>{
      this.user = response
    })

  }

  logout(){
    alert('logut')
  }

}
