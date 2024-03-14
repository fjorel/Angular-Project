import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
number: number = 1
  changeValue ( action:string ){
  console.log(action)
    if (action ==='increase'){
      this.number++
  }
else if (action ==='decrease'){
  this.number--
    }
  }
}
