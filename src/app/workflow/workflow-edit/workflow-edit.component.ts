import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-workflow-edit',
  templateUrl: './workflow-edit.component.html',
  styleUrls: ['./workflow-edit.component.scss']
})
export class WorkflowEditComponent implements OnInit {
  @Input() workflowname: any;
   editorResult:string;
   constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openXl(content:any) {
    this.modalService.open(content, { size: 'xl' });
  }
  getEditorResult(html){
    this.editorResult=html;
  }
}
