import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Marcar como inicializado con !

  loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private serviceAuth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      //login
    });
  }

  login() {
    if (this.loginForm && this.loginForm.valid) { // Comprobación de nullabilidad
      const username = this.loginForm.get('username')?.value; // Añadir ? para comprobación de nullabilidad
      const password = this.loginForm.get('password')?.value; // Añadir ? para comprobación de nullabilidad
      if (username && password) { // Comprobación de nullabilidad
        // Aquí va la lógica de autenticación
        if (this.serviceAuth.login(username,password)) {
          this.router.navigate(['/']); // Redirigir si las credenciales son correctas
        } else {
          this.loginError = true; // Mostrar mensaje de error si las credenciales son incorrectas
        }
      }
    }
  }
}
