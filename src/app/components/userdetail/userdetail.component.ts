import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit{

constructor(private authenticationService: AuthenticationService){}

user:any

  ngOnInit(){

    this.authenticationService.user().subscribe((response:any)=>{
      console.log(response)
      this.user = response
    })
  }

  logout(){
    alert('logut')
  }

}
