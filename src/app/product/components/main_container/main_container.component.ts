import { Component, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'custom-main-container',
  templateUrl: './main_container.component.html',
  styleUrls: ['./main_container.component.css'],
})
  
export class MainContainerComponent {

  @Input() product_list: Product[] = [];

}
