import { Component, OnInit } from '@angular/core';
import {Subscription,timer} from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { TabledataserviceService } from '../tabledataservice.service';
@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
subscribe:Subscription
  rawJson: any;
 selectedRow: any;
  constructor(private service:TabledataserviceService) { }
tableData;
data;
  ngOnInit() {
    this.subscribe=timer(0,10000).pipe(
      switchMap(()=>this.service.getTableData())
    ).subscribe(res=>{console.log(res,"this is data from api")
     this.data=res;
     this.tableData=this.data.hits
  })
  }
  displaymodel(data,i){
    this.selectedRow=i;
    console.log(this.selectedRow,"this is for index")
    this.rawJson=data;
  }

}
