import { Component,Input} from '@angular/core';

@Component({
selector: 'app-count', //tag
  templateUrl: './counting.component.html', //template path
  styleUrls: ['./counting.component.css']
})
  
export class CountComponent {
 
  @Input()
  title!: string;
  constructor() { }

}