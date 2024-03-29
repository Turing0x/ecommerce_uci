import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/cart.service';
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
    private productService: ProductService,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      params => {
        const id = params.get('product_id');
        if (id) {
          this.productService.getProductById(id).subscribe(
            prod => {
              prod.cant = 1
              this.product = prod
              this.is_loading = false
            }
          )
        }
      }
    )
  }

  onClick(product: Product) {
    this.cartService.actionsOnCart(product)
  }

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product)
  }
  
}
