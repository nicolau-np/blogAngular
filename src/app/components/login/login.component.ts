import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/service/noticia.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  reactiveForm!:FormGroup

  constructor(private noticiaService: NoticiaService, private router:Router){}

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
    this.noticiaService.login(this.reactiveForm.value).subscribe(
    (response:any) => {
      console.log(response.data)
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['/userdetail'])
    })
  }


}
