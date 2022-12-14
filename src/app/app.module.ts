import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { HomeComponent } from './pages/home/home.component';
import { NaturalTypePipe } from './pipes/natural-type.pipe';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { AddContactComponent } from './cmps/add-contact/add-contact.component';
import { StatisticAppComponent } from './pages/statistic-app/statistic-app.component';
import { TransactionListComponent } from './cmps/transaction-list/transaction-list.component';
import { TransactionPreviewComponent } from './cmps/transaction-preview/transaction-preview.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './cmps/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactFilterComponent,
    HomeComponent,
    NaturalTypePipe,
    LoginSignupComponent,
    ContactDetailsComponent,
    AddContactComponent,
    StatisticAppComponent,
    TransactionListComponent,
    TransactionPreviewComponent,
    TransferFundsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
