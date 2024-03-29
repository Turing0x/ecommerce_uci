import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
  
export class ProductListComponent implements OnInit {
    
  product_list: Product[] = [];
  is_loading: boolean = true;

  constructor(
    private productServices: ProductService,
  ) { }

  ngOnInit(): void {
    this.productServices.getAllProdcuts().subscribe(
      list => {
        for (const item of list) {
          item.cant = 1;
          this.product_list.push(item);
        }
        this.is_loading = false;
      }
    );
  }

}