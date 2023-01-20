import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/service/noticia.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errors = {
    email:null,
    password: null
  }

  status = false

  reactiveForm!:FormGroup

  constructor(private authenticationService: AuthenticationService, private router:Router){}

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password:  new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
      this.logar()
  }

  logar(){
    this.authenticationService.login(this.reactiveForm.value).subscribe(
    (response:any) => {
      console.log(response.data)
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['/userdetail'])
    }, (er:any)=>{
      if(er.error.errors){
        //console.log('tem valor erros')
        this.errors = er.error.errors
      }else{
        this.status = true
        //console.log('nao tem valor erros')
      }
    })
  }


}
