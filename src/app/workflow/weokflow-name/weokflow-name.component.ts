import { Component, OnInit,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-weokflow-name',
  templateUrl: './weokflow-name.component.html',
  styleUrls: ['./weokflow-name.component.scss']
})
export class WeokflowNameComponent implements OnInit {
  @Output() workflowNameObj = new EventEmitter<{name:string,isvalid:any}>();

  getworkflowname(event:any,isValid:any){
    this.workflowNameObj.emit({name:event.target.value,isvalid:isValid});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
