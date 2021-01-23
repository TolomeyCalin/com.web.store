import {Component, OnInit} from '@angular/core';
import {Product} from "./Product";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'store';
  products: Product[]=[];

  constructor(
    private http: HttpClient
  ) {
  }
  getProducts(){
    this.http
      .get<Product[]>('http://localhost:8080/api/products')
      .subscribe(result=>{this.products=result});
  }
  ngOnInit() {
    this.getProducts();
  }
}
