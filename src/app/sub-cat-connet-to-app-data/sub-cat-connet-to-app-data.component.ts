import { Component, OnInit } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sub-cat-connet-to-app-data',
  templateUrl: './sub-cat-connet-to-app-data.component.html',
  styleUrls: ['./sub-cat-connet-to-app-data.component.scss']
})
export class SubCatConnetToAppDataComponent implements OnInit {
  subactivitiesList:Array<any>=[
    {
      name:'Reports',
      icon:faTable,
      link:'/connectToApp'
    },
    {
      name:'Forms',
      icon:faFileInvoice,
      link:'/connectToApp'
    },
    {
      name:'Workflows',
      icon:faCog,
      link:'/connectToApp/workflow'
    },
    {
      name:'Databases',
      icon:faProjectDiagram,
      link:'/connectToApp'
    },
    {
      name:'Enterprise Applications',
      icon:faExchangeAlt,
      link:'/connectToApp'
    },
    {
      name:'Web Services',
      icon:faFileInvoiceDollar,
      link:'/connectToApp'
    },
    {
      name:'Industrial IOT',
      icon:faIndustry,
      link:'/connectToApp'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
