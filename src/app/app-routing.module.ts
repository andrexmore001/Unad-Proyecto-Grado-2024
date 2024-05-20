import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DomainSecurityComponent } from './domain-security/domain-security.component';
import { DomainReliabilityComponent } from './domain-reliability/domain-reliability.component';
import { DomainPerformanceComponent } from './domain-performance/domain-performance.component';
import { DomainCostComponent } from './domain-cost/domain-cost.component';
import { DomainOperationalExcellenceComponent } from './domain-operational-excellence/domain-operational-excellence.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'security', component: DomainSecurityComponent, canActivate: [AuthGuard] },
      { path: 'reliability', component: DomainReliabilityComponent, canActivate: [AuthGuard] },
      { path: 'performance', component: DomainPerformanceComponent, canActivate: [AuthGuard] },
      { path: 'cost', component: DomainCostComponent, canActivate: [AuthGuard] },
      { path: 'operational-excellence', component: DomainOperationalExcellenceComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '**', redirectTo: '/login' } // Redirige a la página de inicio de sesión si la URL es inválida
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
