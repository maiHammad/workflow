import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeNewActivityComponent } from './home-new-activity/home-new-activity.component';
import { SubCatConnetToAppDataComponent } from './sub-cat-connet-to-app-data/sub-cat-connet-to-app-data.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkflowComponent } from './workflow/workflow/workflow.component';
import { WorkflowEditComponent } from './workflow/workflow-edit/workflow-edit.component';
import { EditorComponent } from './workflow/workflow-edit/editor/editor.component';
import { FormsModule } from '@angular/forms';

import { WeokflowNameComponent } from './workflow/weokflow-name/weokflow-name.component';
import { DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule } from '@syncfusion/ej2-angular-diagrams';


@NgModule({
  declarations: [
    AppComponent,
    HomeNewActivityComponent,
    SubCatConnetToAppDataComponent,
    WorkflowEditComponent,
    WorkflowComponent,
    WeokflowNameComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    DiagramAllModule, SymbolPaletteAllModule, OverviewAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
