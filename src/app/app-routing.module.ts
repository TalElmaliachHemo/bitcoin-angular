import { ContactResolver } from './resolvers/contact.resolver';
import { AuthGuard } from './guards/auth.guard';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver },
  },
  { path: 'contact', component: ContactAppComponent },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
