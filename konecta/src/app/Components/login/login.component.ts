import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  showPass = false;
  loading = false
  form = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ])
  });

  constructor(private loginService: LoginService, private router: Router) { }

  logo = '/assets/nik_logo.png'

  ngOnInit(): void {
  }


  get user() {
    return this.form.controls.user;
  }
  
  get password() {
    return this.form.controls.password;
  }
  
  logIn() {
    this.loading === false
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loginService.logIn(this.form.value).subscribe(
      () => {
        this.router.navigate(['home']);
      },
      (err) => {
        console.log('Hubo un error');
        console.error(err);
      }
    );
  }
  
  togglePass() {
    this.showPass = !this.showPass
  }
}
