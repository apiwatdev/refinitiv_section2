import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'question-two';
  categories: any;
  categoriesDisplay: any;
  search = '';
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.appService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.categoriesDisplay = this.categories;
    });
  }

  filterCategories(value: string) {
    this.categoriesDisplay = this.categories.filter((cat:string)=>{
      return cat.toLowerCase().includes(value.toLowerCase());
    })
  }
}
