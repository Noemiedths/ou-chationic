import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerPerduPageRoutingModule } from './creer-perdu-routing.module';

import { CreerPerduPage } from './creer-perdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerPerduPageRoutingModule
  ],
  declarations: [CreerPerduPage]
})
export class CreerPerduPageModule {}
