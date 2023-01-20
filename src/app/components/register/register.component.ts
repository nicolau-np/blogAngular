import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticiaService } from 'src/app/service/noticia.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  reactiveForm!: FormGroup

  constructor(private controller: NoticiaService){}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    this.controller.store(this.reactiveForm.value, "auth/register").subscribe((response:any)=>{
      console.log(response)
    })
  }

}
