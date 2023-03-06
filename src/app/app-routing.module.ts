import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { DemoComponent } from './demo/demo.component';
import { GuardGuard } from './guard.guard';
import { InternalProjectComponent } from './internal-project/internal-project.component';
import { LoginComponent } from './login/login.component';
import { ProceedGuard } from './proceed.guard';
import { ProceedComponent } from './proceed/proceed.component';
import { Save2draftComponent } from './save2draft/save2draft.component';
import { TimeSheetsComponent } from './time-sheets/time-sheets.component';
import { TimeGuard } from './time.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'date', component:DateComponent, canActivate: [GuardGuard],
    children: [
      {
        path: 'time-sheets', 
        canActivateChild:[TimeGuard],
        component: TimeSheetsComponent,
        children: [
          {
            path: 'proceed', component: ProceedComponent, canDeactivate: [ProceedGuard],
          },
          {
            path: 'save2draft', component: Save2draftComponent,
          },
          {
            path: 'demo', component: DemoComponent,
          },
        ]
      },

    ]
  },
  {
    path: 'back', component: DateComponent
  },
  {
    path: 'internal', component: InternalProjectComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
