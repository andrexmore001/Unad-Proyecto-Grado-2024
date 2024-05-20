import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DomainSecurityComponent } from './domain-security/domain-security.component';
import { DomainReliabilityComponent } from './domain-reliability/domain-reliability.component';
import { DomainPerformanceComponent } from './domain-performance/domain-performance.component';
import { DomainCostComponent } from './domain-cost/domain-cost.component';
import { DomainOperationalExcellenceComponent } from './domain-operational-excellence/domain-operational-excellence.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DomainSecurityComponent,
    DomainReliabilityComponent,
    DomainPerformanceComponent,
    DomainCostComponent,
    DomainOperationalExcellenceComponent,
    AppLayoutComponent,
    LoginComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
