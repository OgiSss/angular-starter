import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent, SignFormComponent } from './components';
import { AuthPageComponent } from './containers';
import { YearPipe } from './pipes';
import { AuthService } from './services';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    AuthPageComponent,
    YearPipe,
    LoginFormComponent,
    SignFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
  ],
})
export class AuthModule { }
