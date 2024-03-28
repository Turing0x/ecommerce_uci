import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
  
export class RegisterComponent {

  createAccount() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const pass = (document.getElementById("pass") as HTMLInputElement).value;

    if (!name || !pass) {
      alert("Debe llenar los campos");
    }
    
    const data = {
      username: name,
      password: pass,
    };
    
    window.localStorage.setItem(data["username"], JSON.stringify(data));
    alert("Usuario creado exitosamente");

  }

}
