import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  currentYear: number;

  constructor(private authService: AuthService,private router: Router) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout(); // Llama al método de logout del servicio de autenticación
  }

}
