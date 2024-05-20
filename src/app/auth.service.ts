import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInValue: boolean = false; // Cambiado a false para que los usuarios no estén autenticados inicialmente

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Lógica de autenticación
    if (username === "TutorUnad" && password === "ModeloMadurez*001") {
      this.isLoggedInValue = true;
      return true;
    } else {
      this.isLoggedInValue = false;
      return false;
    }
  }

  logout() {
    // Lógica de cierre de sesión
    this.isLoggedInValue = false;
    this.router.navigateByUrl("/login");
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedInValue;
  }
}
