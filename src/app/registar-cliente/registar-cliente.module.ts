import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistarClientePageRoutingModule } from './registar-cliente-routing.module';

import { RegistarClientePage } from './registar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistarClientePageRoutingModule
  ],
  declarations: [RegistarClientePage]
})
export class RegistarClientePageModule {}
