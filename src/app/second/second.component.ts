import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  inputValue: string= ''
  getValue(){
    if (this.inputValue===''){
      return true
    }
    else return false
  }
  resetValue(){
    this.inputValue=''
    }
  

}
