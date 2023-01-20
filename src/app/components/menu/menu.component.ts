import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  loggedIn = false

  constructor(private auth: AuthenticationService, private router:Router){}

  ngOnInit(): void {
    this.auth.status().subscribe((response:any)=>{
      this.loggedIn = response
     // console.log('menu: '+this.loggedIn)
    })
  }

  logout(){
    this.auth.logout().subscribe((response:any)=>{
      localStorage.removeItem('user')
      this.auth.toggleLogin(false)
      this.router.navigate(['/'])
      console.log(response)
    })
  }

}
