import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  errors = {
    name:null,
    email: null,
    password:null,
    password_confirmation:null
  }

  reactiveForm!: FormGroup

  constructor(private controller: NoticiaService, private router: Router){}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    this.controller.store(this.reactiveForm.value, "auth/register").subscribe((response:any)=>{
      this.clearFields()
      this.router.navigate(['/login'])
    }, (er:any)=>{
      console.log(er.error.errors)
      this.errors = er.error.errors
    })
  }

  clearFields(){
    this.reactiveForm.reset()
   }

}
