import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from './product-managment';
import { AuthService } from '../service/auth-managment';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class Product {
  protected readonly productSignal = inject(ProductService);
  protected readonly authSignal = inject(AuthService);
}
