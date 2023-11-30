import { CardHomeComponent } from './../../components/card-home/card-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CardLabelComponent } from '../../components/card-label/card-label.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuBarComponent,
    CardHomeComponent,
    CardLabelComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HomeService
  ],

})
export class HomeModule { }
