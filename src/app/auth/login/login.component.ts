import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    const name = (document.getElementById("name") as HTMLInputElement)!.value;
    const pass = (document.getElementById("pass") as HTMLInputElement)!.value;

    const data = window.localStorage.getItem(name);
    if (!data) {
      alert("No existe una cuenta con ese nombre de usuario");  
      return;
    }
    
    const jsonData = JSON.parse(data);
    if (jsonData["password"] === pass) {
      this.router.navigate(['/products/list'])
    }
  }

}
