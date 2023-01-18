import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  reactiveForm!:FormGroup

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
      alert("hello");
  }

}
