import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderModule } from './header/header.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { LayoutComponent } from './layout/layout.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent
  ],
  imports: [
    HeaderModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
   
    HeaderModule,
    SidebarComponent,
    FooterComponent,

    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent,


    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,

  ]
})
export class SharedModule { }
