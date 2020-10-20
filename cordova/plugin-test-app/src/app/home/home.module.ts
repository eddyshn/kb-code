import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PluginDemo} from './PluginDemo';
import {PluginDemo2} from './PluginDemo2';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [
    PluginDemo,
    PluginDemo2
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
