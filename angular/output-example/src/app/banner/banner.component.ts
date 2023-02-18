import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input("countBanner") count:number = 0;
  @Input("batchBanner") batch:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
