import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'custom_product_details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
  
export class DetailsComponent implements OnInit{
  
  public product!: Product;
  public is_loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        const id = params.get('product_id');
        if (id) {
          this.productService.getProductById(id).subscribe(
            prod => {
              this.product = prod
              this.is_loading = false
            }
          )
        }
      }
    )
  }

  
  
}
