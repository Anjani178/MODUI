import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { UtCompletedComponent } from './ut-completed/ut-completed.component';
import { SearchComponent } from './search/search.component';
import { SresultsComponent } from './sresults/sresults.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { UtCurrentComponent } from './ut-current/ut-current.component';
import { MtCompletedComponent } from './mt-completed/mt-completed.component';
import { MtCurrentComponent } from './mt-current/mt-current.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';


const routes: Routes = [
  {path:'',component:SearchComponent},
  {path:'utCompleted',component:UtCompletedComponent},
  {path:'utCurrent',component:UtCurrentComponent},
  {path:'mtCompleted',component:MtCompletedComponent},
  {path:'mtCurrent',component:MtCurrentComponent},
  {path:'EditSkills',component:EditSkillsComponent},
  {path:'sResult',component:SresultsComponent},
  {path:'admin',component:AdminComponent},
  {path:'payment',component:PaymentComponent}
  //{path: '**',component:NotFoundcomponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
