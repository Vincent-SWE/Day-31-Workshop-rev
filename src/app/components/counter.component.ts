import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  counter = 0;

  @Output()
  onValueChanged = new Subject<number>()


  // input argument is of number type and we call it "delta"
  count(delta: number) {
    this.counter += delta
    // notify our subscribers
    this.onValueChanged.next(this.counter)
  }

  // method to increase
  inc() {
    this.count(1)
  }

  // method to decrease
  dec() {
    this.count(-1)
  }




}
