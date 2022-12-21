import { Component } from '@angular/core';

enum Category {
  Computer = 'Computer',
  Laptop = 'Laptop',
  Tablet = 'Tablet',
  Cellphone = 'Cellphone'
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name = 'HP';
  description = 'work laptop';
  price = 300;
  category = Category;
  isAvailable = true;
  computers = [this.category.Computer ,this.category.Laptop];
  gadgets = [this.category.Cellphone, this.category.Tablet];
}
