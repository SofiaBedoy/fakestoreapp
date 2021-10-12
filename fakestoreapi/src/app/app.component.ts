import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface PRODUCTS {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating:      Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boutique para Todos';

  /**/Products: PRODUCTS[] = [];

  constructor(private http: HttpClient){  
    this.http.get<any>('https://fakestoreapi.com/products').subscribe(
    response => {
      console.log(response);
      /**/this.Products = response;
      /*Products: PRODUCTS[] = response;*/
    }
  );
  }
}
