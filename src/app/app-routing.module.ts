import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNewActivityComponent } from './home-new-activity/home-new-activity.component';
import { SubCatConnetToAppDataComponent } from './sub-cat-connet-to-app-data/sub-cat-connet-to-app-data.component';
import { WorkflowComponent } from './workflow/workflow/workflow.component';


const routes: Routes = [
  { path: '', component: HomeNewActivityComponent },
  { path: 'connectToApp', component: SubCatConnetToAppDataComponent,
    children: [
    {
      path: 'workflow',
      component: WorkflowComponent,
  }
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
