import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-new-activity',
  templateUrl: './home-new-activity.component.html',
  styleUrls: ['./home-new-activity.component.scss']
})
export class HomeNewActivityComponent implements OnInit {
  faMobileAlt=faMobileAlt;
  faEdit=faEdit;
  faSlidersH=faSlidersH;
  faColumns=faColumns;
  faTasks=faTasks;
  faFileInvoiceDollar=faFileInvoiceDollar;
  faQuestion=faQuestion;

  activitiesList:Array<any>=[
    {
      name:'Connet to your application and data',
      icon:faMobileAlt,
      link:'/connectToApp'
    },
    {
      name:'Edit applicatios an data connections',
      icon:faEdit,
      link:'/'
    },
    {
      name:'Fine tune your connections',
      icon:faSlidersH,
      link:'/'
    },
    {
      name:'Organize content on user devices',
      icon:faColumns,
      link:'/'
    },
    {
      name:'Manage users and access',
      icon:faTasks,
      link:'/'
    },
    {
      name:'Manage Webal production ORD account',
      icon:faFileInvoiceDollar,
      link:'/'
    },
    {
      name:'View tutoials and browse manuals',
      icon:faQuestion,
      link:'/'
    }
  ];


  constructor() {

   }

  ngOnInit(): void {
  }

}
