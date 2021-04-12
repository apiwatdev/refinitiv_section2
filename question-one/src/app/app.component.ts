import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'question-one';
  addNumber = 0;
  timer: any;
  timer_id: any;
  modelData: any;
  numberChange: Subject<any> = new Subject();
  correctNumber: boolean = false;
  calculator: string = 'isPrime';
  ngOnInit() {
    this.numberChange
      .pipe(debounceTime(500))
      .subscribe((x) => this.numberTranform(x));
  }
  numberTranform(value: string) {
    if (isNaN(Number(value))) {
      this.addNumber = 1;
    } else {
      this.addNumber = Math.round(Number(value));
    }
    if (this.calculator == 'isFibonacci') {
      this.correctNumber = this.isFibonacci(this.addNumber);
    } else if (this.calculator == 'isPrime') {
      this.correctNumber = this.isPrime(this.addNumber);
    }
  }
  onNumberChange(text: string) {
    this.numberChange.next(text);
  }
  isPerfectSquare(x: number) {
    let s = Math.sqrt(x);
    return s * s == x;
  }

  // Returns true if n is a Fibinacci Number, else false
  isFibonacci(n: number) {
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return (
      this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4)
    );
  }

  isPrime(num:number) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
}
