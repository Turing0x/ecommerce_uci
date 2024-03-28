import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
  
export class ProductListComponent implements OnInit, AfterViewInit{

  product_list: Product[] = []
  is_loading: boolean = true;

  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit(): void {
    this.productServices.getAllProdcuts().subscribe(
      list => {
        this.product_list = list
        this.is_loading = false
      }
    )
  }
  
  ngAfterViewInit(): void {
    this.addClicked()
  }

  addClicked() {
    let list = document.querySelectorAll(".navbar li");
    function activeLink(this: any) {
      list.forEach((item) => {
        item.classList.remove("clicked");
      });
      this.classList.add("clicked");
    }
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
  }
}
