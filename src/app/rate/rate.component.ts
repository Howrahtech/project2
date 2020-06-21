import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {


 @Input() rate:Number;
  constructor() { }
  

 stars:Array<Number>=[];
  
 
  

  ngOnInit() {
  for(let i=0;i<this.rate; i++){
  this.stars.push(i);
  }
  
  }

}
