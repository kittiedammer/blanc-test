import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { TableModule } from 'primeng/table';
import { TransactionsComponent } from './client-card/transactions/transactions.component';
import { ClientsRoutes } from './clients.routing';
import { CustomCurrencyPipe } from 'src/app/shared/pipes/currency.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ClientPhoneComponent } from './client-card/client-phone/client-phone.component';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientCardComponent,
    TransactionsComponent,
    CustomCurrencyPipe,
    ClientPhoneComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutes,
    TableModule,
    ProgressSpinnerModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    DialogModule
  ]
})
export class ClientsModule { }
