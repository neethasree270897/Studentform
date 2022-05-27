import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [{ path: 'student', redirectTo: 'student/index', pathMatch: 'full'},
{ path: 'student/index', component: IndexComponent },
{ path: 'student/create', component: CreateComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
