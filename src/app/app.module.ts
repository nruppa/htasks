import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { ProceedComponent } from './proceed/proceed.component';
import { TagModule } from "primeng/tag";
import { CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DateComponent } from './date/date.component';
import { DemoComponent } from './demo/demo.component';
import { MessageService } from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { Save2draftComponent } from './save2draft/save2draft.component';
import { LoginComponent } from './login/login.component';
import {ToolbarModule} from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { TimeSheetsComponent } from './time-sheets/time-sheets.component';
import {PasswordModule} from 'primeng/password';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { GuardGuard } from './guard.guard';
import { TestService } from './test.service';
import { RequiredDirective } from './CustomDirective/required.directive';
import { PayrollComponent } from './payroll/payroll.component';



@NgModule({
  declarations: [
    AppComponent,
    ProceedComponent,
    DateComponent,
    DemoComponent,
    Save2draftComponent,
    LoginComponent,
    TimeSheetsComponent,
    RequiredDirective,
    PayrollComponent,
      ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    TagModule,
    CardModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    InputTextareaModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    RippleModule,
    ToolbarModule,
    MenuModule, 
    PasswordModule,
    ToggleButtonModule

  ],
  providers: [MessageService,ConfirmationService,GuardGuard,TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
