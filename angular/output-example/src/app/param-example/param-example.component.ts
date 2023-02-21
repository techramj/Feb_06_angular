import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-param-example',
  templateUrl: './param-example.component.html',
  styleUrls: ['./param-example.component.css']
})
export class ParamExampleComponent implements OnInit {
  urlParam:string = '';
  count: number =0;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('param1') || '';
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe(params=>{
      console.log(params['pagesize']);
    });
  }

  onClickButton(){
    ++this.count;
    if(this.count===20){
      this.router.navigateByUrl("/servers");
    }
  }



}
