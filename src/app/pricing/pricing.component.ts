import { Component, OnInit } from '@angular/core';
import { fetchdataService } from '../fetchdata.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
result : any;
  constructor(private _fetchData:fetchdataService) { }

  ngOnInit() {
    this.result = this._fetchData.data;
  }

}
