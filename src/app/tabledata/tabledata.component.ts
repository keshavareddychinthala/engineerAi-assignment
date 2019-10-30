import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { TabledataserviceService } from '../tabledataservice.service';
@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {
  subscribe: Subscription
  rawJson: any;
  selectedRow: any;
  tableData;
  data;
  constructor(private service: TabledataserviceService) { }

  ngOnInit() {
    this.subscribe = timer(0, 10000).pipe(
      switchMap(() => this.service.getTableData())
    ).subscribe(res => {
      this.data = res;
      this.tableData = this.data.hits
      console.log(this.tableData, "for array")
    })
  }
  displaymodel(data, i) {
    this.selectedRow = i;
    console.log(this.selectedRow, "this is for index")
    this.rawJson = data;
  }

}
