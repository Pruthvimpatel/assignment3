import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  title = 'pa';
  a:number=22;
  test:String='testing';
  date1 = new Date();
  b=[1,2,3,4,5,6,7];
  b1=[
    {
      id:101,
      name:'chair'
    },
    {
      id:102,
      name:'table'
    },
    {
      id:103,
      name:'cupboard'
    },{
      id:104,
      name:'table'
    },];
  selectedItem?:String;
  OnSelect(e:any){
     this.selectedItem =e.target.value
  }
  onmulti(){
    console.log("multi Selected");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
