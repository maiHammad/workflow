import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  disabled = true;
  active:any;
  workflowname:any;
  nameIsValid:any;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
  constructor() { }

  receivename($event:any) {
    this.workflowname = $event.name;
    this.nameIsValid=$event.isvalid;
  }
  ngOnInit(): void {
  }

}
