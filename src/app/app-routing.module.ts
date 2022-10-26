import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'contact/:id',
  //   component: ContactDetails,
  //   resolve: { pet: PetResolver },
  // },
  { path: 'contact', component: ContactAppComponent },
  {
    path: '', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
