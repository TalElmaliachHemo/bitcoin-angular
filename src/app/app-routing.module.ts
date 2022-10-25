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
  // {
  //   path: '', component: PetAppComponent, children: [
  //     { path: 'edit/:id', component: PetEditComponent, resolve: { pet: PetResolver } },
  //     { path: 'edit', component: PetEditComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
