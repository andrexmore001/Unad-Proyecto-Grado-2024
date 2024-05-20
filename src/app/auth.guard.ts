import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service'; // Importa el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad{

  constructor(private router: Router, private authService: AuthService) {} // Inyecta el servicio de autenticación

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canLoad(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    debugger
    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
