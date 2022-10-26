import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { StatisticAppComponent } from './pages/statistic-app/statistic-app.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ContactResolver } from './resolvers/contact.resolver';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
  },
  { path: 'contact', component: ContactAppComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'statistic', component: StatisticAppComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
